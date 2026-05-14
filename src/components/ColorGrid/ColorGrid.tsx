import { range } from 'lodash';

import styles from './ColorGrid.module.scss';

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomColor(): string {
  const red = randomInt(255);
  const blue = randomInt(255);
  const green = randomInt(255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function GridSquare() {
  const colorString = getRandomColor();

  return (
    <div
      className={`${styles.square} ${styles.untitled}`}
      style={{ backgroundColor: colorString }}
    />
  );
}

export function ColorGrid() {
  return (
    <div className={styles.colorGrid}>
      {range(0, 16).map((index) => {
        return <GridSquare key={`square${index}`} />;
      })}
    </div>
  );
}
