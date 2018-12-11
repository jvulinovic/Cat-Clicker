
// declaring variables

let catClicksOne = 0;
let catImageOne = document.getElementById('cat1');
let clickCounterOne = document.getElementById('clickCounter1');
let catName1 = document.getElementById('catName1');
let name1 = "Anna";

let catClicksTwo = 0;
let catImageTwo = document.getElementById('cat2');
let clickCounterTwo = document.getElementById('clickCounter2');
let catName2 = document.getElementById('catName2');
let name2 = "Gabby";

// function to count the clicks

function catNames () {
  catName1.innerHTML = name1;
  catName2.innerHTML = name2;
};

function catCounterOne () {
  catImageOne.addEventListener('click', function() {
    catClicksOne ++;
    clickCounterOne.innerHTML = "Number of Clicks = " + catClicksOne;
  }, false);
};

function catCounterTwo () {
  catImageTwo.addEventListener('click', function() {
    catClicksTwo ++;
    clickCounterTwo.innerHTML = "Number of Clicks = " + catClicksTwo;
  }, false);
};

// catCounterOne();
// catCounterTwo();
// catNames();


let catnames = ["Fred", "Harry", "Jim", "Josie", "Fatso"];

let catimages = ["catone.jpg", "cattwo.jpg", "catthree.jpg", "catfour.jpg", "catfive.jpg"];

let container = document.getElementById('catList');

let cattitle = document.getElementById('cattitle');

let catimage = document.getElementById('catimage');

function createList () {
  for (const [index, value] of catnames.entries()) {
    var elem = document.createElement('div');
    elem.textContent = value;
    elem.className = "catlistitem";
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            cattitle.innerHTML = numCopy;
            catimage.src = "img/" + catimages[index];
          };
        })(value));
        container.appendChild(elem);
      };
};


createList ();
