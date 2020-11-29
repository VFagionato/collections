import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import List from "./pages/List";

import { GlobalStyle } from "./style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/list/:typeOfList">
          <List />
        </Route>
      </Switch>
    </>
  );
};

export default App;
