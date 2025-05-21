function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomColor(): string {
  const red = randomInt(255);
  const blue = randomInt(255);
  const green = randomInt(255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function Square() {
  const colorString = getRandomColor();

  return (
    <div className='square untitled' style={{ backgroundColor: colorString }} />
  );
}

export default Square;
