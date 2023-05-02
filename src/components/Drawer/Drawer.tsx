import "./Drawer.scss";

interface DrawerProps {
  isOpen: boolean;
}

function Drawer(props: DrawerProps) {
  const drawerClasses = props.isOpen ? "drawer open" : "drawer closed";
  const buttons = ["One", "Two", "Three", "Four"];

  return (
    <>
      <div className={drawerClasses}>
        <div className="drawerContainer">
          {buttons.map(button => {
            return (
              <div className="drawerButton">
                <div className="buttonText">{button}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Drawer;
