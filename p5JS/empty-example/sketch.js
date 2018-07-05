var leftX = 50;
var upY = 20;


function keyPressed() {
    
    if (keyCode === RIGHT_ARROW) {
        leftX += 5;
    } else if (keyCode === LEFT_ARROW) {
        leftX -= 5;
    }
    
    if (keyCode === DOWN_ARROW) {
        upY += 5;
    } else if (keyCode === UP_ARROW) {
        upY -= 5;
    }

}

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(210);
      rotateX(upY * -0.01);
  rotateY(leftX * -0.01);
    translate(leftX, upY);
  box(40);
}
//var valueA = 0;
//var valueB = 0;
//var valueC = 0;
//
//function setup() {
//    createCanvas(600, 480);
//    
//}
//
//
//function draw() {
//    fill(valueA, valueB, valueC);
//    rect(25, 25, 50, 50);
//    
//    if (mouseIsPressed) {
//        
//        fill(valueA, valueB, valueC);
//        triangle(mouseX + 50, mouseY, mouseX, mouseY + 50, mouseX - 50, mouseY - 50);
//        
//    }
//}
//
//function keyPressed() {
//    if (keyCode === LEFT_ARROW) {
//        valueA += 50;
//    }
//}
//function keyPressed() {
//    if (keyCode === RIGHT_ARROW) {
//        valueA -= 50;
//    }
//}
//function keyPressed() {
//    if (keyCode === UP_ARROW) {
//        valueC += 50;
//    }
//}
//function keyPressed() {
//    if (keyCode === DOWN_ARROW) {
//        valueC -= 50;
//    }
//}
//
//function keyPressed() {
//    if (keyCode === ALT) {
//        valueB += 50;
//    }
//}
//
//function keyPressed() {
//    if (keyCode === CONTROL) {
//        valueB -= 50;
//    }
//}
//
