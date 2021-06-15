import Square from "../Square";

type GridProps = {
  withSound: boolean;
};

function Grid(props: GridProps) {
  return (
    <div className="grid-container">
      {[...Array(16)].map((e, index) => {
        return (
          <Square key={index} thisIdx={index} withSound={props.withSound} />
        );
      })}
    </div>
  );
}

export default Grid;
