import "./Home.scss";
import Grid from "../../components/Grid";
import { useState } from "react";
import Drawer from "../../components/Drawer";
import Backdrop from "../../components/Backdrop";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <Drawer isOpen={isOpen}></Drawer>
      <Backdrop onClick={toggleDrawer} isOpen={isOpen}></Backdrop>

      <div className="header">
        <div onClick={toggleDrawer} className="dae-header">
          DAE-ONE.XYZ
        </div>
      </div>

      <div className="main-body">
        <div className="content-left">
          <Grid withSound={false}></Grid>
        </div>
        <div className="divider">
          <div className="silly-box"></div>
        </div>
        <div className="content-right">
          <div className="text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
