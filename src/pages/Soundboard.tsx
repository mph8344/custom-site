import { MusicGrid } from '../components/Grid';
import './soundboard.scss';

function Soundboard() {
  return (
    <div className='routed-page'>
      <div className='soundboard-container'>
        <div className='page-header' id='soundboard'>
          Soundboard
        </div>
        <div className='grid-wrapper'>
          {/* <div className='mpc-top'>
            <div className='mpc-display'>SOUNDBOARD</div>
          </div> */}
          <MusicGrid />
        </div>
      </div>
    </div>
  );
}

export default Soundboard;
