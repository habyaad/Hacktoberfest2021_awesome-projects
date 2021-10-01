// Full Rainbow Colors Spectrum that can be visible when Triggered !!

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

//get Button
let button = document.getElementById("button");

button.addEventListener("click", function () {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  let container = document.getElementById("container");

  container.style.background = randomColor;
});
