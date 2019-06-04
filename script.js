/*
* Definitions
*/
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pi = Math.PI;

function random (start, stop) {
	// Установить длину интервала а потом передвинуть его
	return Math.random() * (stop - start) + start;
}

function randomColor () {
	return [random(0, 255), random(0, 255), random(0, 255)];
}

function circleFactory (quantity) {
	let result = [];
	
	for (let i = 0; i < quantity; i++) {
		result.push(new Circle(random(0, innerWidth - random(2, 30)), random(0, innerHeight - random(2, 30)), random(2, 30), 
	random(0, 12) - 6, random(0, 12) - 6, randomColor()));
	}
	
	return result;
}

function Circle (x, y, radius, dx, dy, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.dx = dx;
	this.dy = dy;
	this.color = 'rgb(' + color.toString() + ')';
}

Circle.prototype.draw = function () {
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, 2*pi, false);
	ctx.strokeStyle = this.color;
	ctx.lineWidth = 2;
	ctx.stroke();
}

Circle.prototype.update = function () {
	// x + radius - левая граница окружности, x - radius правая граница окружности
	if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
		// Меняю направление скорости, если окружность доходит до края справа или слева
		this.dx = -this.dx;
	}
		
	if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
		this.dy = -this.dy;
	}
	
	this.x += this.dx;
	this.y += this.dy;
}

/*
* Drawing
*/

/* ctx.beginPath();
ctx.moveTo(100, window.innerHeight / 2);
ctx.lineTo(600, window.innerHeight / 2 - 150);
ctx.lineTo(600, window.innerHeight / 2 + 150);
ctx.lineTo(100, window.innerHeight / 2);
ctx.lineTo(600, window.innerHeight / 2);
ctx.strokeStyle = "blue";
ctx.stroke(); */

/* for (let i = 0; i < 100; i++) {
	let radius = random(10, 50);
	let x = random(radius, window.innerWidth - 50);
	let y = random(radius, window.innerHeight - 50);

	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2*pi, false);
	ctx.strokeStyle = 'rgb(' + randomColor().toString() + ')';
	ctx.stroke();
} */
	
/* 	let circleOne = new Circle(random(20, innerWidth - 20), random(20, innerHeight - 20), 20, 
	random(0, 12) - 6, random(0, 12) - 6, randomColor());
	
	let circleTwo = new Circle(random(20, innerWidth - 20), random(20, innerHeight - 20), 20, 
	random(0, 12) - 6, random(0, 12) - 6, randomColor()); */
	
	let circles = circleFactory(250);
	
	function animate () {
		requestAnimationFrame(animate);
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		
/* 		let circles = circleFactory(50); */
		circles.forEach(function (circle) {
			circle.draw();
			circle.update();
		});
/* 		
		circleOne.draw();
		circleTwo.draw();
		
		circleOne.update();
		circleTwo.update(); */
	}
	
	animate();




