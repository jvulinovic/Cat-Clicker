
// declaring variables

let catClicks = 0;

let catImage = document.getElementById('cat');

let clickCounter = document.getElementById('clickCounter');


// function to count the clicks

catImage.addEventListener('click', function(){
  catClicks ++;
  clickCounter.innerHTML = "Number of Clicks = " + catClicks;
}, false);
