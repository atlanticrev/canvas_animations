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

/* context.beginPath();
context.moveTo(100, window.innerHeight / 2);
context.lineTo(600, window.innerHeight / 2 - 150);
context.lineTo(600, window.innerHeight / 2 + 150);
context.lineTo(100, window.innerHeight / 2);
context.lineTo(600, window.innerHeight / 2);
context.strokeStyle = "blue";
context.stroke(); */

/* for (let i = 0; i < 100; i++) {
	let radius = random(10, 50);
	let x = random(radius, window.innerWidth - 50);
	let y = random(radius, window.innerHeight - 50);

	context.beginPath();
	context.arc(x, y, radius, 0, 2*Math.PI, false);
	context.strokeStyle = 'rgb(' + randomColor().toString() + ')';
	context.stroke();
} */

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




