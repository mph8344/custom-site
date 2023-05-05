import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './main.scss';

function App() {
  return (
    <div className='home-body'>
      <div className='content-body'>
        <div className='content'>
          <Outlet></Outlet>
        </div>
      </div>
      <div className='navigation'>
        <div className='nav-content'>
          <div className='title-box'>Matt Hills</div>
          <div className='button-container'>
            <Link className='button' to={'/'}>
              home
            </Link>
            <Link className='button' to={'soundboard'}>
              soundboard
            </Link>
            <Link className='button' to={'countdown'}>
              countdown
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
