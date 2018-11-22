/*                Author: Richard Myatt
                  Date: 21 November 2018

                  Using the SVG feColorMatrix.  Various examples partly based on
                  https://alistapart.com/article/finessing-fecolormatrix
*/

var ref;
var i = 1;

// construct an array of filters and image captions
var refs = [
  {
    id: "#identity",
    caption: "Original Image"
  },
  {
    id: "#darken",
    caption: "Darken Image"
  },
  {
    id: "#lighten",
    caption: "Lighten Image"
  },
  {
    id: "#desaturate-half",
    caption: "Desaturate by 50%"
  },
  {
    id: "#desaturate-full",
    caption: "Desaturate by 100%"
  },
  {
    id: "#hue-rotate",
    caption: "Hue Rotate 180 deg"
  },
  {
    id: "#lum2alpha",
    caption: "Luminance To Alpha"
  },
  {
    id: "#red",
    caption: "Red Channel"
  },
  {
    id: "#green",
    caption: "Green Channel"
  },
  {
    id: "#blue",
    caption: "Blue Channel"
  },
  {
    id: "#yellow",
    caption: "Red + Green Channel"
  },
  {
    id: "#magenta",
    caption: "Red + Blue Channel"
  },
  {
    id: "#cyan",
    caption: "Green + Blue Channel"
  },
  {
    id: "#magenta",
    caption: "Red + Blue Channel"
  },
  {
    id: "#mono-red",
    caption: "Grey Scale (Red Channel)"
  },
  {
    id: "#mono-green",
    caption: "Grey Scale (Green Channel)"
  },
  {
    id: "#mono-blue",
    caption: "Grey Scale (Blue Channel)"
  },
  {
    id: "#alpha",
    caption: "Reduce Opacity By 50%"
  },
  {
    id: "#hard-green",
    caption: "Hard Green"
  },
  {
    id: "#hard-yellow",
    caption: "Hard Yellow"
  },
  {
    id: "#blue-shadow-magenta-highlight",
    caption: "Blue Shadow, Magenta Highlight"
  },
  {
    id: "#elim-blue",
    caption: "Remove Blue"
  },
  {
    id: "#no-g-red",
    caption: "Green Contributes To Red Channel"
  },
  {
    id: "#no-g-red",
    caption: "No Green, Magenta Colorized"
  }
];

// get references to the DOM elements
var picEl = document.querySelector("#pic");
var capEl = document.querySelector("#cap");

picEl.style.filter = "url(#identity)";

// function to set the next filter
function setNext() {
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
