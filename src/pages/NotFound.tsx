import Grid from "../components/Grid";

function NotFound() {
  return (
    <>
      <div className="dae-container" id="demo">
        404: NOT FOUND
      </div>
      <Grid withSound={false} />
    </>
  );
}

export default NotFound;
