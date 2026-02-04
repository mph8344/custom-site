// import useSound from 'use-sound';
import { isNil, range, toInteger, uniqueId } from 'lodash';
import styles from './Soundboard.module.scss';
import type React from 'react';
import { sounds } from '../Sounds/Sounds';
import { useCallback, useMemo, useRef, useState } from 'react';

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBackgroundColorAndTextColor(): [string, string] {
  const hue = getRandomInt(0, 359);
  const saturation = getRandomInt(40, 100);
  const lightness = getRandomInt(20, 80);
 
  const backgroundHsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  const threshold = 60;
  const textColor = lightness > threshold ? 'black' : 'white';

  return [backgroundHsl, textColor];
}

interface SquareProps {
  title?: string;
  onPlay: (audioFile?: string) => void;
  index: number;
}

const MusicSquare: React.FC<SquareProps> = ({ title, onPlay, index }) => {
  const play = () => {
    onPlay(title);
  };

  const [colorString, text] = generateBackgroundColorAndTextColor();

  return (
    <div className={styles.buttonWrapper} onClick={play}>
      <div className={styles.padText}>
        <span>{`PAD ${index}`}</span>
        <span className={styles.musicTitle}>{title || 'untitled'}</span>
      </div>
      <div className={styles.squareWrapper}>
        <div
          className={styles.musicSquare}
          style={{ backgroundColor: colorString, color: text }}
        ></div>
      </div>
    </div>
  );
};

export const SoundboardView: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [volume, setVolume] = useState(1);

  const playAudio = useCallback(
    (audioFile?: string) => {
      if (isNil(audioFile)) {
        return;
      }

      if (!isNil(audioRef.current)) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      audioRef.current = new Audio(`/sounds/${audioFile}.mp3`);
      audioRef.current.volume = volume;
      console.log(audioRef.current.src.split('/').pop());
      audioRef.current.play();
    },
    [volume],
  );

  return (
    <div className={styles.soundboardView}>
      <div className={styles.controller}>
        <div className={styles.volumeControl}>
          <div className={styles.volumeSlider}>
            <input
              defaultValue={volume}
              min={0}
              max={1}
              step={0.1}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
              }}
              type='range'
              className={styles.volumeBar}
            />
          </div>
          <div className={styles.volumeSlider}>
            <input
              defaultValue={volume}
              min={0}
              max={1}
              step={0.1}
              type='range'
              className={styles.volumeBar}
            />
          </div>
        </div>

        <div className={styles.centerController}>
          <div className={styles.screen}></div>
          <div className={styles.buttonController}>
            {range(0, 16).map((index) => {
              return (
                <MusicSquare
                  onPlay={playAudio}
                  key={`square-${uniqueId()}`}
                  title={sounds[index]}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
