/*            Author: Richard Myatt
              Date: 12 August 2018
              A demonstration of how an external SVG can be imported using the
              object tag.  Doing so allows the attributes of the SVG to be
              altered using Javascript.
*/

var flag = false;
var svgDoc;
var svgContent;
var svgItem;
var btn;


function loadScript() {
  svgDoc = document.getElementById("svgBullseye");
  svgContent = svgDoc.contentDocument;
  svgItem = svgContent.getElementById("inner-circle");
}

window.onload = function() {
btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  if(flag === false) {
    svgItem.setAttribute("style", "stroke: none; fill: blue;");
    flag = true;
  } else {
    svgItem.setAttribute("style", "stroke: none; fill: red;");
    flag = false;
  }
});


}
