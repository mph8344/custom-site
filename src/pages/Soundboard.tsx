import Grid from "../components/Grid";

function Soundboard() {
  return (
    <>
      <div className="dae-container" id="soundboard">
        Soundboard
      </div>
      <Grid withSound={true} />
    </>
  );
}

export default Soundboard;
