import Square from './Square';
import './Grid.scss';
import { useState } from 'react';
import { range } from 'lodash';

function Grid() {
  const [hovered, setHover] = useState(false);

  const hideText = () => {
    setHover(true);
  };

  return (
    <div className='grid-container'>
      <div className='hover-text' style={{ opacity: hovered ? 0 : 1 }}>
        {'Hover me :)'}
      </div>
      <div className='grid-display' onMouseOver={hideText}>
        {range(0, 16).map((index) => {
          return <Square key={`square${index}`} />;
        })}
      </div>
    </div>
  );
}

export default Grid;
