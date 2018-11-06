/*                Author: Richard Myatt
                  Date: 3 November 2018

                  Revised 6 November 2018 - svg mask demo.
*/

document.addEventListener('DOMContentLoaded', function() {


// image aspect ration
var imgAspRatio = 1.5;      // 158.75/105.83334

var el = document.querySelector(".container");

window.addEventListener("resize", function() {
  if(window.innerWidth/window.innerHeight >= 1.5) {
    el.style.width = "135vh";
    el.style.height = "90vh";
  } else {
    el.style.width = "90vw";
    el.style.height = "60vw";
  }
});

 window.dispatchEvent(new Event('resize'));

});
