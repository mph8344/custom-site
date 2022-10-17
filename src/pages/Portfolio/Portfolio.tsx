import './Portfolio.scss';
import Grid from '../../components/Grid';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { BsMoon, BsMoonFill, BsSun } from 'react-icons/bs';
// import Drawer from "../../components/Drawer";
// import Backdrop from "../../components/Backdrop";

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeSetter = () => void;

// interface ThemeProps {
//   theme: Theme;
//   themeSetters: ThemeSetter[];
// }
interface ThemeProps {
  theme: Theme;
  callbacks: (() => void)[];
}

function ThemeSwitcher(props: ThemeProps) {
  if (props.theme === Theme.LIGHT) {
    return (
      <div className='theme-switcher'>
        <Button
          className='btn btn-dark theme-button'
          onClick={props.callbacks[0]}
        >
          <BsMoonFill />
        </Button>
      </div>
    );
  } else {
    return (
      <div className='theme-switcher'>
        <Button
          className='btn btn-light theme-button'
          onClick={props.callbacks[1]}
        >
          <BsSun />
        </Button>
      </div>
    );
  }
}

function Portfolio() {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const darkTheme = () => {
    setTheme(Theme.DARK);
    console.log('dark');
  };
  const lightTheme = () => {
    setTheme(Theme.LIGHT);
    console.log('light');
  };

  const themeSetters = [darkTheme, lightTheme];

  // const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* <Drawer isOpen={isOpen}></Drawer>
      <Backdrop onClick={toggleDrawer} isOpen={isOpen}></Backdrop> */}

      <div className={`${theme.valueOf()}-theme`}>
        <div className='header'>
          <div className='header-text'>DAE-ONE.XYZ</div>
          <div className='theme-switcher'>
            <ThemeSwitcher theme={theme} callbacks={themeSetters} />
          </div>
        </div>

        <div className='main-body'>
          <div className='content-left'>
            <Grid withSound={false}></Grid>
          </div>
          <div className='divider'>
            <div className='silly-box'></div>
          </div>
          <div className='content-right'>
            <div className='text'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
