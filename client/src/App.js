import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import MappedRecipes from "./pages/MappedRecipes";
import Recipe from "./pages/Recipe";

import RecipeContext from "./utils/RecipeContext";

import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  const [recipeState, setRecipeState] = useState({
    bookRecipes: [],
    ingredRecipes: [],
    courseRecipes: [],
    currRecipe: {},
  });

  function updateCurrRecipe(currRecipe) {
    console.log("inside updateCurrRecipe");
    console.log(currRecipe);
    setRecipeState({ ...recipeState, currRecipe });
  }

  return (
    <RecipeContext.Provider value={recipeState}>
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home {...props} updateCurrRecipe={updateCurrRecipe} />
              )}
            />
            <Route
              exact
              path={"/recipeSelect/:recipe"}
              render={(props) => (
                <MappedRecipes {...props} updateCurrRecipe={updateCurrRecipe} />
              )}
            />
            <Route
              exact
              path={"/recipe/:recipe"}
              render={(props) => (
                <Recipe {...props} updateCurrRecipe={updateCurrRecipe} />
              )}
            />
          </Switch>
        </div>
      </Router>
    </RecipeContext.Provider>
  );
}

export default App;
