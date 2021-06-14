import Square from "../components/Square";

function Home() {
  return (
    <>
      <div className="dae-container">DAE</div>
      <div className="grid-container">
        {[...Array(16)].map((e, index) => {
          return <Square key={index} thisIdx={index} />;
        })}
      </div>
    </>
  );
}

export default Home;
