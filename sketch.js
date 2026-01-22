function setup() {
 createCanvas(1000, 1000);
}

function draw() {
if (mouseIsPressed) {
  fill(255, 255, 0, 40);
} else{
  fill(128, 0, 128, 40);
} ellipse(mouseX, mouseY, 80, 80);
}