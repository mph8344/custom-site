// import { Link } from "react-router-dom";
import useSound from 'use-sound';

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomColor(): string {
  var red = randomInt(255);
  var blue = randomInt(255);
  var green = randomInt(255);
  return `rgb(${red}, ${green}, ${blue})`;
}

interface SquareProps {
  sound?: any;
  title?: string;
}

function Square(props: SquareProps) {
  const [play] = useSound(props?.sound);
  var colorString = getRandomColor();

  if (props.sound && props.title) {
    return (
      <div
        className='square'
        style={{ backgroundColor: colorString }}
        onClick={() => play()}
      >
        {props.title}
      </div>
    );
  } else {
    return (
      <div
        className='square untitled'
        style={{ backgroundColor: colorString }}
        onClick={() => {}}
      ></div>
    );
  }
}

export default Square;
