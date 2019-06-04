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