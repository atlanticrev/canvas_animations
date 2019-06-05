import {random, randomPraetorianColor} from "./helpers";
import { Circle } from "./figures/Circle";

const colors = [
  '#304360',
  '#3e586a',
  '#3f6c77',
  '#4c8a84',
  '#41a48c'
];

function circleFactory (quantity) {
  let result = [];

  for (let i = 0; i < quantity; i++) {

    let radius = random(2, 30);
    let x = random(radius, innerWidth - radius);
    let y = random(radius, innerHeight - radius);

    // Получение отрицательных скоростей
    let dx = (random(0, 1) - 0.5) * 10;
    let dy = (random(0, 1) - 0.5) * 10;
    let color = randomPraetorianColor(colors);

    result.push(new Circle(x, y, radius, dx, dy, color));
  }

  return result;
}

export {
  circleFactory
}
