import { circleFactory } from "./circleFactory";

/*******************
 ***  Definitions
 *******************/

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
  x: undefined,
  y: undefined
};

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

/*******************
 ***	Drawing
 *******************/

let circles = circleFactory(150);

// Определяю начальный радиус кружка для того,
// чтобы уменьшить текущий радиус до его первоначального
// значения, когда курсор покидает окрестность кружка

circles.forEach((circle) => {
  circle.initialRadius = circle.radius;
});

function init () {
  circles = circleFactory(150);
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  circles.forEach(function (circle) {
    let dr = 2;

    // Использую Math.hypot для нахождения расстояния между точками

    if ( Math.hypot( mouse.x - circle.x, mouse.y - circle.y ) < circle.radius ) {

      console.log(Math.hypot( mouse.x - circle.x, mouse.y - circle.y ), circle.radius);

      // Ограничиваем то, во сколько раз увеличится кружок

      if ( circle.radius <= circle.initialRadius * 3 ) {
        circle.radius += dr;
      }

    } else if ( circle.radius > circle.initialRadius ) {

      circle.radius -= dr;
    }

    circle.update();
  });
}

animate();

export {
  context
}




