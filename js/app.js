
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

catCounterOne();
catCounterTwo();
catNames();
