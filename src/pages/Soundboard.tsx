import Grid from "../components/Grid";
// import Backdrop from "../components/Backdrop";
// import Drawer from "../components/Drawer";
// import { useState } from "react";

function Soundboard() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleDrawer = () => setIsOpen(!isOpen);
  return (
    <>
      {/* <Drawer isOpen={isOpen}></Drawer>
      <Backdrop onClick={toggleDrawer} isOpen={isOpen}></Backdrop>

      <div className="header">
        <div onClick={toggleDrawer} className="dae-header">
          DAE-ONE.XYZ
        </div>
      </div> */}
      <div className="encapsulator">
        <div className="dae-container" id="soundboard">
          Soundboard
        </div>
        <Grid withSound={true} />
      </div>
    </>
  );
}

export default Soundboard;
