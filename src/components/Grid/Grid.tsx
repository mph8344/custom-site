//import Square from "../Square";
import { useEffect, useState, useRef } from "react";

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

type GridProps = {
  withSound: boolean;
};

const sounds: string[] = [
  "beandip.mp3",
  "BrandonPlayApek.wav",
  "hedontbox.mp3",
  "hillaryisinhim.mp3",
  "mattaah.mp3",
  "reed_nut.wav",
];

function Grid(props: GridProps) {
  const [sound, setSound] = useState("");

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (sound) {
      var newAudio = new Audio(`./sounds/${sound}`);
      newAudio.volume = 0.5;

      newAudio.play();
    }
  }, [sound]);

  return (
    <div className="grid-container">
      {[...Array(16)].map((e, index) => {
        if (props.withSound) {
          return (
            <div
              key={`square${index}`}
              className="square"
              style={{ backgroundColor: getRandomColor() }}
              onClick={() => {
                setSound(sounds[index]);
              }}
            >
              <p className="innerText">{sounds[index]}</p>
            </div>
          );
        } else {
          return (
            <div
              key={`square${index}`}
              className="square"
              style={{ backgroundColor: getRandomColor() }}
            ></div>
          );
        }
      })}
    </div>
  );
}

export default Grid;
