import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";

import Recipe from "./pages/Recipe/Recipe";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path={"/recipe"}>
          <Recipe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
