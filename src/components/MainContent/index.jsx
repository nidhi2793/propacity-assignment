export const MainContent = () => {
  const selected = "default";

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {selected === "default" ? (
        <div className="main-content-default-view">
          <div style={{ width: 647, height: 218, overflow: "hidden" }}>
            <img
              src="/images/defaultContentPoster.png"
              alt="default poster"
              style={{ width: "100%", translate: "0 -70px" }}
            ></img>
          </div>
          <div className="welcome-to-star-wars">
            Welcome to Star Wars Dashboard
          </div>
          <div className="welcome-to-star-wars-description">
            Star Wars is an American epic space opera multimedia franchise
            created by George Lucas, which began with the eponymous 1977 film
            and quickly became a worldwide pop culture phenomenon.
          </div>
        </div>
      ) : (
        <span>Not Implemented Yet</span>
      )}
    </div>
  );
};
