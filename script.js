import { circleFactory } from "./circleFactory";

/*******************
 ***  Definitions
 *******************/

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*******************
 ***	Drawing
 *******************/

let circles = circleFactory(250);

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  circles.forEach(function (circle) {
    circle.update();
  });
}

animate();

export {
  context
}




