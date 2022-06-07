import Square from "../Square";
import soundProfiles from "../Sounds";

type GridProps = {
  withSound: boolean;
};

function Grid(props: GridProps) {
  return (
    <div className="grid-container">
      {[...soundProfiles].map((profile, index) => {
        if (props.withSound) {
          return (
            <Square
              key={`square${index}`}
              sound={profile.sound}
              title={profile.title}
            />
          );
        } else {
          return <Square key={`square${index}`} />;
        }
      })}
    </div>
  );
}

export default Grid;
