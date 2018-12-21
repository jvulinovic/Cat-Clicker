

var model = {
         currentCat: null,
            cats: [ {
          name: "Frank",
          clickCount: 0,
          URL: "img/catone.jpg"
          },
             {
          name: "Harry",
          clickCount: 0,
          URL: "img/cattwo.jpg"
          },
             {
          name: "Jim",
          clickCount: 0,
          URL: "img/catthree.jpg"
          },
             {
          name: "Josie",
          clickCount: 0,
          URL: "img/catfour.jpg"
          },
             {
          name: "Jeff",
          clickCount: 0,
          URL: "img/catfive.jpg"
        },
        ]
};

var octopus = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
        adminView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    },

    showAdmin: function () {
      inputscreen.classList.toggle('hidden');
    },

    hideAdmin: function () {
      inputscreen.classList.toggle('hidden');
    },

    saveAdmin: function () {
      adminView.save();
      catListView.render();
      this.hideAdmin();
      catView.render();
    },
};




var catView = {

    init: function () {
      this.cattitle = document.getElementById('cattitle');
      this.catimage = document.getElementById('catimage');
      this.catList = document.getElementById('catList');
      this.clickCounter = document.getElementById('clickCounter');

      this.catimage.addEventListener('click', function () {
        octopus.incrementCounter();
      });

      this.render();

    },

    render: function () {

      var currentCat = octopus.getCurrentCat();
      this.clickCounter.textContent = "No. of clicks = " + currentCat.clickCount;
      this.cattitle.textContent = currentCat.name;
      this.catimage.src = currentCat.URL;
      adminView.render();

    }

};

var adminView = {

    init: function () {
      adminbutton = document.getElementById('adminbutton');
      savebutton = document.getElementById('savebutton');
      cancelbutton = document.getElementById('cancelbutton');
      inputscreen = document.getElementById('inputscreen');
      adminbutton.addEventListener('click', function () {
        octopus.showAdmin();
      });
      cancelbutton.addEventListener('click', function () {
        octopus.hideAdmin();
      });

      savebutton.addEventListener('click', function () {
        octopus.saveAdmin();
      });

      this.render();
    },

    render: function () {

      var currentCat = octopus.getCurrentCat();
      inputcatname = document.getElementById('name');
      inputcatclick = document.getElementById('number');
      inputcatURL = document.getElementById('URL');
      inputcatname.value = currentCat.name;
      inputcatclick.value = currentCat.clickCount;
      inputcatURL.value = currentCat.URL;
    },

    save: function () {

      var currentCat = octopus.getCurrentCat();
      currentCat.name = document.getElementById('name').value
      currentCat.URL = document.getElementById('URL').value
      currentCat.clickCount = document.getElementById('number').value
    }
}


var catListView = {

  init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('catList');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function () {
        this.catListElem.innerHTML = '';
        model.cats.forEach (function(cats) {
          var elem = document.createElement('div');
          elem.textContent = cats.name;
          elem.className = "catlistitem";
          elem.addEventListener('click', (function(selectedCat) {
              return function () {
                octopus.setCurrentCat(selectedCat);
                catView.render();
              };
            })(cats));
          catList.appendChild(elem);
    });
  }
}


octopus.init();
