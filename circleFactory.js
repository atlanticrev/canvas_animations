import {random, randomPaletteColors, randomSpeedWithDirection} from "./helpers";
import { Circle } from "./figures/Circle";

const colors = [
  '#304360',
  '#3e586a',
  '#3f6c77',
  '#4c8a84',
  '#41a48c'
];

// const colors = [
//   '#35477d',
//   '#6c5b7b',
//   '#c06c84',
//   '#f67280'
// ];

function circleFactory (quantity) {
  let result = [];

  for (let i = 0; i < quantity; i++) {

    let radius = random(2, 30);
    let x = random(radius, innerWidth - radius);
    let y = random(radius, innerHeight - radius);

    // Получение отрицательных скоростей
    let dx = randomSpeedWithDirection(1);
    let dy = randomSpeedWithDirection(1);
    let color = randomPaletteColors(colors);

    result.push(new Circle(x, y, radius, dx, dy, color));
  }

  return result;
}

export {
  circleFactory
}
