import { Link, Outlet } from 'react-router';
import './App.scss';

function App() {
  return (
    <div className='main'>
      <Outlet />
      {/* <div className='navigationPillar'></div> */}
    </div>
    // <div className='home-body'>
    //   <div className='grid-section'>
    //     <div className='grid-item top-left'></div>
    //     <div className='grid-item top'></div>
    //     {/* <div className='grid-item left'></div> */}
    //     <div className='grid-item center'></div>
    //     {/* <div className='grid-item right'></div> */}
    //     <div className='grid-item bot-left'></div>
    //     <div className='grid-item bot-right'>
    //       <div className='content'>Dungeons & Dragons</div>

    //       <div className='bg'></div>
    //       <div className='cover'></div>
    //     </div>
    //   </div>
    // {/* <div className='content-body'>
    //   <div className='content'>
    //     <Outlet></Outlet>
    //   </div>
    // </div> */}
    // {/* <div className='navigation'>
    //   <div className='nav-content'>
    //     <div className='title-box'>Matt Hills</div>
    //     <div className='button-container'>
    //       <Link className='button' to={'/'}>
    //         {'home'}
    //       </Link>
    //       <Link className='button' to={'soundboard'}>
    //         {'soundboard'}
    //       </Link>
    //       <a className='button' href={'/foundry/game'}>
    //         {'foundry'}
    //       </a>
    //     </div>
    //   </div>
    // </div> */}
    // </div>
  );
}

export default App;
