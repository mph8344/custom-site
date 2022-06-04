import useSound from "use-sound";
import { soundNames, sounds } from "../Sounds";

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomColor(): string {
  var red = randomInt(255);
  var blue = randomInt(255);
  var green = randomInt(255);
  return `rgb(${red}, ${green}, ${blue})`;
}

type SquareProps = {
  thisIdx: number;
  withSound: boolean;
};

function Square(props: SquareProps) {
  const [play] = useSound(sounds[props.thisIdx]);
  var colorString = getRandomColor();

  if (props.withSound) {
    return (
      <div
        className="square"
        style={{ backgroundColor: colorString }}
        onClick={() => play()}
      >
        {soundNames[props.thisIdx]}
      </div>
    );
  } else {
    return (
      <div className="square" style={{ backgroundColor: colorString }}></div>
    );
  }
}

export default Square;
