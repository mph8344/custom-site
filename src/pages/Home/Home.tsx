import './Home.scss';
import { Grid, MusicGrid } from '../../components/Grid';
import { useState } from 'react';
import Drawer from '../../components/Drawer';
import Backdrop from '../../components/Backdrop';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <Drawer isOpen={isOpen}></Drawer>
      <Backdrop onClick={toggleDrawer} isOpen={isOpen}></Backdrop>

      <div className='header'>
        <div onClick={toggleDrawer} className='dae-header'>
          DAE-ONE.XYZ
        </div>
      </div>

      <div className='main-body'>
        <div className='content-left'>
          <Grid withSound={false}></Grid>
          {/* <MusicGrid></MusicGrid> */}
        </div>
        <div className='divider'>
          <div className='silly-box'></div>
        </div>
        <div className='content-right'>
          <div className='text'></div>
        </div>
      </div>
    </>
  );
}

export default Home;
