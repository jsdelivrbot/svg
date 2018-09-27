var refRect = document.querySelector("rect");
var refPath = document.querySelector("path");

refRect.addEventListener("mouseenter", function() {
  refRect.style.cursor = "pointer";
  refPath.style.stroke = "blue";
});

refRect.addEventListener("mouseleave", function() {
  refPath.style.stroke = "#000";
});

refPath.addEventListener("mouseenter", function() {
  refPath.style.cursor = "pointer";
  refPath.style.stroke = "blue";
});

refRect.addEventListener("click", function() {
  alert("click event detected");
});

refPath.addEventListener("click", function() {
  alert("click event detected");
});
