import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import RecipeSelect from "./pages/RecipeSelect";
import BookSelect from "./pages/BookSelect";
import { StoreProvider } from "./utils/GlobalState";
import RecipeContext from "./utils/RecipeContext";

import Recipes from "./pages/Recipes";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Books from "./pages/Books";

function App() {
  return (
    <StoreProvider>
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path={"/recipes"}>
              <Recipes />
            </Route>
            <Route exact path={"/books"}>
              <Books />
            </Route>
            <Route exact path={"/books/:book"}>
              <BookSelect />
            </Route>
            <Route exact path={"/recipes/:recipe"}>
              <RecipeSelect />
            </Route>
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
