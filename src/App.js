import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import List from "./pages/List";

import { GlobalStyle } from "./style";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact to="/">
          <Home />
        </Route>
        <Route exact to="/list/:typeOfList">
          <List />
        </Route>
      </Switch>
    </>
  );
};

export default App;
