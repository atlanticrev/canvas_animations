// Не включает stop
function random(start, stop) {
  // Установить длину интервала а потом передвинуть его
  return Math.random() * (stop - start) + start;
}

function randomPaletteColors(colors) {
  return colors[Math.floor(random(0, colors.length + 1))];
}

function randomSpeedWithDirection (multiplier) {
  return ((random(0, 1) - 0.5) * 2) * multiplier;
}

function randomColor() {
  return [
    random(0, 255),
    random(0, 255),
    random(0, 255)
  ];
}

let getHexadecimalNumberForColor = () => {
  let result = [];

  for ( let i = 0; i < 6; i++ ) {
    result[i] = Math.floor(Math.random() * 16).toString(16);
  }

  return '#' + result.toString().replace(/,/g, '');
};


export {
  random,
  randomPaletteColors,
  randomSpeedWithDirection,
  randomColor,
  getHexadecimalNumberForColor
}
