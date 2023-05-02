import "./Backdrop.scss";

interface BackdropProps {
  isOpen: boolean;
  onClick: () => void;
}

function Backdrop(props: BackdropProps) {
  const overlayClass = props.isOpen ? "overlay show" : "overlay hide";

  return <div onClick={props.onClick} className={overlayClass}></div>;
}

export default Backdrop;
