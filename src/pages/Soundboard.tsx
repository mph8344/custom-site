import { MusicGrid } from '../components/Grid';
import './soundboard.css';

function Soundboard() {
  return (
    <>
      <div className='page-container'>
        <div className='page-header' id='soundboard'>
          Soundboard
        </div>
        <div className='grid-wrapper'>
          <div className='mpc-top'>
            <div className='mpc-display'>SOUNDBOARD</div>
          </div>
          <MusicGrid />
        </div>
      </div>
    </>
  );
}

export default Soundboard;
