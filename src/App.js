import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import RickMorty from "./pages/Rick-morty";
import Pokemon from "./pages/Pokemon";

import { GlobalStyle } from "./style";

const App = () => {
  useEffect(() => {
    if (!window.localStorage.getItem("collection")) {
      window.localStorage.setItem("collection", []);
    }
  }, []);

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
        <Route exact path="/favorites"></Route>
        <Route exact path="/chart"></Route>
      </Switch>
    </>
  );
};

export default App;
