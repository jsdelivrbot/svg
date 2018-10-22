/*              Author: Richard Myatt
                Date: 18 October 2018
                Revised 22 October 2018 - script added for dynamic resizing

                An experiment with the import of an external svg with built in
                script put together with the help of inkscape.
*/

document.addEventListener('DOMContentLoaded', function() {

// image aspect ration
var imgAspRatio = 1.5;      // 158.75/105.83334

var el = document.querySelector(".container");

window.addEventListener("resize", function() {
  if(window.innerWidth/window.innerHeight >= 1.5) {
    el.style.width = "150vh";
    el.style.height = "100vh";
  } else {
    el.style.width = "100vw";
    el.style.height = "66.67vw";
  }
});

window.dispatchEvent(new Event('resize'));
});
