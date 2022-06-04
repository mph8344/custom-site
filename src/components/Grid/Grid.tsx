import Square from "../Square";

type GridProps = {
  withSound: boolean;
};

function Grid(props: GridProps) {
  return (
    <div className="grid-container">
      {[...Array(16)].map((e, index) => {
        if (props.withSound) {
          return (
            <Square key={`square${index}`} thisIdx={index} withSound={true} />
          );
        } else {
          return (
            <Square key={`square${index}`} thisIdx={index} withSound={false} />
          );
        }
      })}
    </div>
  );
}

export default Grid;
