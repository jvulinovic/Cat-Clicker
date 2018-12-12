
// declaring variables

let catnames = ["Fred", "Harry", "Jim", "Josie", "Fatso"];

let catimages = ["catone.jpg", "cattwo.jpg", "catthree.jpg", "catfour.jpg", "catfive.jpg"];

let container = document.getElementById('catList');

let cattitle = document.getElementById('cattitle');

let catimage = document.getElementById('catimage');

let clickCounter = document.getElementById('clickCounter');


function createList () {
  for (const [index, value] of catnames.entries()) {
    var elem = document.createElement('div');
    elem.textContent = value;
    elem.className = "catlistitem";
    elem.addEventListener('click', (function(catname) {
        return function() {
            let catClicks = 0;
            cattitle.innerHTML = catname;
            catimage.src = "img/" + catimages[index];
            catimage.addEventListener('click', function () {
              catClicks ++;
              clickCounter.innerHTML = "Number of Clicks = " + catClicks;
            }, false);
          };
        })(value));
        container.appendChild(elem);
      };
};

createList ();
