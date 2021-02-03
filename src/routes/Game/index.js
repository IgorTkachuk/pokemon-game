const GamePage = ({ onChangePage }) => {
  return (
    <>
      <div>this is Game Page!!</div>
      <button onClick={() => onChangePage("app")}>Back to Home page</button>
    </>
  );
};

export default GamePage;
