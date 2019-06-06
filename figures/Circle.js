import { context } from "../index";

function Circle(x, y, radius, dx, dy, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.dx = dx;
	this.dy = dy;
	this.color = color;

	// Определяю начальный радиус кружка для того,
	// чтобы уменьшить текущий радиус до его первоначального
	// значения, когда курсор покидает окрестность кружка

	this.initialRadius = radius;
}

Circle.prototype.draw = function () {
	context.beginPath();
	context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
	context.fillStyle = this.color;
	context.fill();
	context.closePath();
};

Circle.prototype.update = function () {
// x + radius - левая граница окружности, x - radius правая граница окружности

	if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
		// Меняю направление скорости, если окружность доходит до края справа или слева
		this.dx = -this.dx;
	}

	if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
		// Меняю направление скорости, если окружность доходит до края сверху или снизу
		this.dy = -this.dy;
	}

	this.x += this.dx;
	this.y += this.dy;

	this.draw();
};

export {
	Circle
}
