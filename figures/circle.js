function Circle (x, y, dx, dy) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
}

Circle.prototype.draw = function(first_argument) {
	console.log('circle is drawing...');
};