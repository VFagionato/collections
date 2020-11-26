import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import RickMorty from "./pages/Rick-morty";
import Pokemon from "./pages/Pokemon";
import Favorite from "./pages/Favorite";

import { GlobalStyle } from "./style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rick-morty">
          <RickMorty />
        </Route>
        <Route exact path="/pokemon">
          <Pokemon />
        </Route>
        <Route exact path="/favorites">
          <Favorite />
        </Route>
        <Route exact path="/chart"></Route>
      </Switch>
    </>
  );
};

export default App;
