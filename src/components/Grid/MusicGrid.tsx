// import useSound from 'use-sound';
import { isNil, range } from 'lodash';
import './styles.scss';
import type React from 'react';
import { useRef } from 'react';
import { sounds } from '../Sounds/sounds';

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function generateContrastingColors(): [string, string] {
//   const hue = getRandomInt(0, 359);
//   const saturation = getRandomInt(40, 100);
//   const lightness = getRandomInt(20, 80);

//   const backgroundHsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

//   const complementaryHue = (hue + 180) % 360;
//   const textSaturation = saturation > 80 ? saturation - 40 : saturation + 40;
//   const textLightness = lightness > 60 ? lightness - 40 : lightness + 40;

//   const textHsl = `hsl(${complementaryHue}, ${textSaturation}%, ${textLightness}%)`;

//   return [backgroundHsl, textHsl];
// }

function generateBackgroundColorAndTextColor(): [string, string] {
  const hue = getRandomInt(0, 359);
  const saturation = getRandomInt(40, 100);
  const lightness = getRandomInt(20, 80);

  const backgroundHsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  const threshold = 60;
  const textColor = lightness > threshold ? 'black' : 'white';

  return [backgroundHsl, textColor];
}

// function getRandomColor(): string {
//   var red = randomInt(255);
//   var blue = randomInt(255);
//   var green = randomInt(255);
//   return `rgb(${red}, ${green}, ${blue})`;
// }

interface SquareProps {
  title?: string;
  onPlay: (audioFile?: string) => void;
}

const MusicSquare: React.FC<SquareProps> = ({ title, onPlay }) => {
  const play = () => {
    onPlay(title);
    // if (isNil(title)) {
    //   return;
    // }

    // const audio = new Audio(`/sounds/${title}.mp3`);
    // audio.play();
  };

  const [colorString, text] = generateBackgroundColorAndTextColor();

  return (
    <div className='square-wrapper'>
      <div
        className='musicSquare'
        style={{ backgroundColor: colorString, color: text }}
        onClick={play}
      >
        {title}
      </div>
    </div>
  );
};

export default function MusicGrid() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = (audioFile?: string) => {
    if (isNil(audioFile)) {
      return;
    }

    if (!isNil(audioRef.current)) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    audioRef.current = new Audio(`/sounds/${audioFile}.mp3`);
    audioRef.current.play();
  };

  return (
    <div className='soundboard-wrapper'>
      {range(0, 16).map((index) => {
        return (
          <MusicSquare
            onPlay={playAudio}
            key={`square${index}`}
            title={sounds[index]}
          />
        );
      })}
    </div>
  );
}
