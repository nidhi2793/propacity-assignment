export const Header = (showSearch) => {
  return (
    <div className="header">
      <img
        src="/images/starwarslogo.png"
        alt="starwars logo"
        className="starwarslogo"
      />
      {showSearch && <div>Search</div>}
    </div>
  );
};
