import Grid from "../components/Grid";

function Soundboard() {
  return (
    <>
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
