function random(start, stop) {
  // Установить длину интервала а потом передвинуть его
  return Math.random() * (stop - start) + start;
}

function randomPraetorianColor(colors) {
  return colors[Math.floor(random(0, 5))];
}

function randomColor() {
  return [
    random(0, 255),
    random(0, 255),
    random(0, 255)
  ];
}

export {
  random,
  randomPraetorianColor,
  randomColor
}
