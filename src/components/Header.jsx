import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Header = (showSearch) => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="/images/starwarslogo.png"
          alt="starwars logo"
          className="starwarslogo"
        />
      </Link>
      {showSearch && <SearchBar />}
    </div>
  );
};
