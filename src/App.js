import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import RickMorty from "./pages/Rick-morty";

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
        <Route exact path="/pokemon"></Route>
        <Route exact path="/favorites"></Route>
        <Route exact path="/chart"></Route>
      </Switch>
    </>
  );
};

export default App;
