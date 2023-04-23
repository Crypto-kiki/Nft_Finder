const Main = ({ onClickAccount }) => {
  return (
    <div className="bubbles relative h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button onClick={onClickAccount}>
          <img
            className="w-32 hover:rotate-12"
            src={`${process.env.PUBLIC_URL}/images/metamask.png`}
          />
        </button>
      </div>
      <span style={{ "--snowing": 11 }}></span>
      <span style={{ "--snowing": 18 }}></span>
      <span style={{ "--snowing": 21 }}></span>
      <span style={{ "--snowing": 24 }}></span>
      <span style={{ "--snowing": 17 }}></span>
      <span style={{ "--snowing": 13 }}></span>
      <span style={{ "--snowing": 19 }}></span>
      <span style={{ "--snowing": 17 }}></span>
      <span style={{ "--snowing": 13 }}></span>
      <span style={{ "--snowing": 12 }}></span>
      <span style={{ "--snowing": 16 }}></span>
      <span style={{ "--snowing": 21 }}></span>
      <span style={{ "--snowing": 28 }}></span>
      <span style={{ "--snowing": 17 }}></span>
      <span style={{ "--snowing": 13 }}></span>
      <span style={{ "--snowing": 18 }}></span>
      <span style={{ "--snowing": 21 }}></span>
      <span style={{ "--snowing": 14 }}></span>
      <span style={{ "--snowing": 22 }}></span>
      <span style={{ "--snowing": 10 }}></span>
      <span style={{ "--snowing": 23 }}></span>
      <span style={{ "--snowing": 21 }}></span>
      <span style={{ "--snowing": 27 }}></span>
      <span style={{ "--snowing": 12 }}></span>
      <span style={{ "--snowing": 14 }}></span>
      <span style={{ "--snowing": 13 }}></span>
      <span style={{ "--snowing": 25 }}></span>
      <span style={{ "--snowing": 15 }}></span>
      <span style={{ "--snowing": 10 }}></span>
      <span style={{ "--snowing": 20 }}></span>
      <span style={{ "--snowing": 12 }}></span>
      <span style={{ "--snowing": 16 }}></span>
      <span style={{ "--snowing": 17 }}></span>
      <span style={{ "--snowing": 21 }}></span>
      <span style={{ "--snowing": 17 }}></span>
      <span style={{ "--snowing": 13 }}></span>
      <span style={{ "--snowing": 19 }}></span>
      <span style={{ "--snowing": 17 }}></span>
      <span style={{ "--snowing": 13 }}></span>
      <span style={{ "--snowing": 12 }}></span>
      <span style={{ "--snowing": 16 }}></span>
      <span style={{ "--snowing": 21 }}></span>
      <span style={{ "--snowing": 28 }}></span>
      <span style={{ "--snowing": 11 }}></span>
      <span style={{ "--snowing": 20 }}></span>
    </div>
  );
};

export default Main;
