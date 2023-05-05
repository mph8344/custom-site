import Square from './Square';
import soundProfiles from '../Sounds';
import './Grid.scss';
import { useState } from 'react';

function Grid() {
  const [hovered, setHover] = useState(false);

  const hideText = () => {
    setHover(true);
  };

  return (
    <>
      <div className='hover-text' style={{ opacity: hovered ? 0 : 1 }}>
        Hover me :)
      </div>
      <div className='grid-container' onMouseOver={hideText}>
        {[...soundProfiles].map((profile, index) => {
          return <Square key={`square${index}`} />;
        })}
      </div>
    </>
  );
}

export default Grid;
