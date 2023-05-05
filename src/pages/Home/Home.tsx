import './Home.scss';
import Drawer from '../../components/Drawer';
import Backdrop from '../../components/Backdrop';
import Routes from '../../Routes';
import { Link, NavLink } from 'react-router-dom';

function Home() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleDrawer = () => setIsOpen(!isOpen);

  const navToSoundboard = () => {};

  return (
    <></>
    // <div className='home-body'>
    //   <div className='content-body'>
    //     <div className='content'>
    //       <Routes />
    //     </div>
    //   </div>
    //   <div className='navigation'>
    //     <div className='nav-content'>
    //       <div className='title-box'>Matt Hills</div>
    //       <div className='button-container'>
    //         <NavLink className='button' to={'/'}>
    //           home
    //         </NavLink>
    //         {/* <div className='button'>about me</div>
    //         <div className='button'>contact</div> */}
    //         <NavLink className='button' to={'soundboard'}>
    //           soundboard
    //         </NavLink>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Home;
