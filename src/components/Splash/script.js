let webFonts = [
  "Poppins",
  "Tahoma",
  "Arial",
  "Verdana",
  "Helvetica",
  "Nunito Sans",
  "Trebuchet",
  "EXO",
  "Brush Script MT",
  "Georgia",
  "Garamond",
  "Times New Roman",
  "Courier New",
];

var currentFont = "Arial";

function changeWebFont() {
  let webElement = document.getElementById("word");
  webElement.style.fontFamily = webFonts[currentFont++ % webFonts.length];
}
setInterval(changeWebFont, 200);

let colors = ["#fa535b", "pink", "#72e2c6"];

function changeBackground() {
  let backgroundColor = document.getElementById("word");
  let colorRandom = Math.floor(Math.random() * colors.length);
  backgroundColor.style.backgroundColor = colors[colorRandom++ % colors.length];
}
setInterval(changeBackground, 300);

let weights = [200, 500, 300, 400, 600, 100, 400];

function changeWeight() {
  let weight = document.getElementById("word");
  let weightRandom = Math.floor(Math.random() * weights.length);
  weight.style.fontWeight = weights[weightRandom++ % weights.length];
}
setInterval(changeWeight, 500);

let spacing = ["3px", "10px", "20px", "15px", "30px", "6px"];

function changeSpace() {
  let space = document.getElementById("word");
  let spaceRandom = Math.floor(Math.random() * spacing.length);
  space.style.letterSpacing = spacing[spaceRandom++ % spacing.length];
}
setInterval(changeSpace, 400);

let sizing = ["100px", "40px", "20px", "200px", "60px", "6px"];

function changeSize() {
  let size = document.getElementById("word");
  let sizeRandom = Math.floor(Math.random() * sizing.length);
  size.style.fontSize = sizing[sizeRandom++ % sizing.length];
}
setInterval(changeSize, 300);
