// import Square from '../Square';
import soundProfiles from '../Sounds';
import useSound from 'use-sound';
import './styles.scss';

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

function MusicSquare(props: SquareProps) {
  const [play] = useSound(props?.sound);

  const [colorString, text] = generateBackgroundColorAndTextColor();

  if (props) {
    return (
      <div className='square-wrapper'>
        <div
          className='musicSquare'
          style={{ backgroundColor: colorString, color: text }}
          onClick={() => play()}
        >
          {props.title}
        </div>
      </div>
    );
  } else {
    return (
      <div className='square' style={{ backgroundColor: colorString }}></div>
    );
  }
}

export default function MusicGrid() {
  return (
    <div className='soundboard-wrapper'>
      {[...soundProfiles].map((profile, index) => {
        return (
          <MusicSquare
            key={`square${index}`}
            sound={profile.sound}
            title={profile.title}
          />
        );
      })}
    </div>
  );
}
