import "./Drawer.scss";
import { Link } from "react-router-dom";

interface DrawerProps {
  isOpen: boolean;
}

// function Drawer(props: DrawerProps) {
//   const drawerClasses = props.isOpen ? "drawer open" : "drawer closed";
//   const linkButtons = [
//     {
//       text: "Home",
//       link: "/",
//     },
//     {
//       text: "Soundboard",
//       link: "/soundboard",
//     },
//     {
//       text: "Countdown",
//       link: "/countdown",
//     },
//   ];

//   return (
//     <>
//       <div className={drawerClasses}>
//         <div className="drawer-container">
//           {linkButtons.map((button, index) => {
//             return (
//               <Link to={button.link}>
//                 <div className="drawer-button" key={`button${index}`}>
//                   <div className="button-text">{button.text}</div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

function Drawer(props: DrawerProps) {
  const drawerClasses = props.isOpen ? "drawer open" : "drawer closed";
  const linkButtons = ["Dark Mode"];

  return (
    <>
      <div className={drawerClasses}>
        <div className="drawer-container">
          {linkButtons.map((button, index) => {
            return (
              <div className="drawer-button" key={`button${index}`}>
                <div className="button-text">{button}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Drawer;
