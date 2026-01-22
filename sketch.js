let userColor = (255);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(userColor);
  ellipse(mouseX, mouseY, 80, 80);
}

function mousePressed() {
  let input = prompt("Enter a Color!");
  if (input) {
    userColor = input;
  }
}