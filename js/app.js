

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
        // set the current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell the views to initialize
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

    toggleAdmin: function () {
      inputScreen.classList.toggle('hidden');
    },

    saveAdmin: function () {
      adminView.save();
      catListView.render();
      this.toggleAdmin();
      catView.render();
    },
};


var catView = {

    init: function () {
      this.cattitle = document.getElementById('cat-title');
      this.catimage = document.getElementById('cat-image');
      this.clickCounter = document.getElementById('click-counter');

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
      adminButton = document.getElementById('admin-button');
      saveButton = document.getElementById('save-button');
      cancelButton = document.getElementById('cancel-button');
      inputScreen = document.getElementById('input-screen');

      adminButton.addEventListener('click', function () {
        octopus.toggleAdmin();
      });

      cancelButton.addEventListener('click', function () {
        octopus.toggleAdmin();
      });

      saveButton.addEventListener('click', function () {
        octopus.saveAdmin();
      });

      this.render();
    },

    render: function () {

      var currentCat = octopus.getCurrentCat();
      inputCatName = document.getElementById('name');
      inputCatClick = document.getElementById('number');
      inputCatURL = document.getElementById('URL');
      inputCatName.value = currentCat.name;
      inputCatClick.value = currentCat.clickCount;
      inputCatURL.value = currentCat.URL;
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
        catListElem = document.getElementById('catlist');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function () {
      catListElem.innerHTML = '';
      model.cats.forEach (function(cats) {
        var elem = document.createElement('div');
        elem.textContent = cats.name;
        elem.className = "cat-list-item";
        elem.addEventListener('click', (function(selectedCat) {
            return function () {
              octopus.setCurrentCat(selectedCat);
              catView.render();
            };
          })(cats));
        catlist.appendChild(elem);
  });
}
}


octopus.init();
