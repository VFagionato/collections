import { useState } from "react";
import { useHistory } from "react-router-dom";
import ListRoundedIcon from "@material-ui/icons/ListRounded";
import BottomNavegation from "@material-ui/core/BottomNavigation";
import BottomnavegationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Header = () => {
  const rickAndMorty = "rick-and-morty";
  const pokemon = "pokemon";
  const [value, setValue] = useState("rickAndMorty");
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavegation showLabels value={value} onChange={handleChange}>
      <BottomnavegationAction
        label="Rick and Morty's List"
        value="rickAndMorty"
        icon={<ListRoundedIcon />}
        onClick={() => history.push(`/list/${rickAndMorty}`)}
      />
      <BottomnavegationAction
        label="Pokemon's List"
        value="pokemon"
        icon={<ListRoundedIcon />}
        onClick={() => history.push(`/list/${pokemon}`)}
      />
      <BottomnavegationAction
        label="Favorite"
        value="Favorite"
        icon={<FavoriteIcon />}
        onClick={() => history.push(`/list/favorite`)}
      />
    </BottomNavegation>
  );
};

export default Header;
