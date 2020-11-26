import { Link, useLocation } from "react-router-dom";

import { HeaderDiv } from "./styles";

const Header = () => {
  const location = useLocation();
  return (
    <HeaderDiv pathname={location.pathname}>
      <Link to="/rick-morty">Rick And Morty List</Link>
      <Link to="/pokemon">Pokemon's List</Link>
      <Link to="/favorites">Favorites</Link>
    </HeaderDiv>
  );
};

export default Header;
