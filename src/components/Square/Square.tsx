function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomColor(): string {
  var red = randomInt(255);
  var blue = randomInt(255);
  var green = randomInt(255);
  //)
  return `rgb(${red}, ${green}, ${blue})`;
}

type SquareProps = {
  thisIdx: number;
};

function Square({ thisIdx }: SquareProps) {
  var colorString = getRandomColor();
  return (
    <div className="square" style={{ backgroundColor: colorString }}></div>
  );
}

export default Square;
