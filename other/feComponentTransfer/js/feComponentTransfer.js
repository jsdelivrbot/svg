/*                Author: Richard Myatt
                  Date: 22 November 2018

                  Using the SVG feComponentTransfer filter.
*/

alert("Please note that the image filters in this example are set to change every 3s.");

var ref;
var i = 1;

// construct an array of filters and image captions
var refs = [
  {
    id: "#identity",
    caption: "Original Image"
  },
  {
    id: "#lighten-linear",
    caption: "Lighten Using 'linear'"
  },
  {
    id: "#lighten-gamma",
    caption: "Lighten Using 'gamma'"
  },
  {
    id: "#lighten-table",
    caption: "Lighten Using 'table'"
  },
  {
    id: "#discrete",
    caption: "Posterize"
  }
];

// get references to the DOM elements
var picEl = document.querySelector("#pic");
var capEl = document.querySelector("#cap");

picEl.style.filter = "url(#identity)";

// function to set the next filter
function setNext() {
  console.log(i);
  ref = "url(" + refs[i].id + ")";
  picEl.style.filter = ref;
  capEl.innerHTML = refs[i].caption;
  if(i < refs.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

// cycle throgh the filters
var imgShift = setInterval(setNext, 3000);
