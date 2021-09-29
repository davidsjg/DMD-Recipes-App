import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import MappedRecipes from "./pages/MappedRecipes";
import Recipe from "./pages/Recipe";
import RecipeContext from "./utils/RecipeContext";
import NavigationBar from "./components/NavigationBar/NavigationBar";

let allBooks = [
  "Catering to Nobody",
  "Dying for Chocolate",
  "The Cereal Murders",
  "The Last Suppers",
  "Killer Pancake",
  "The Main Corpse",
  "The Grilling Season",
  "Prime Cut",
  "Tough Cookie",
  "Sticks & Scones",
  "Chopping Spree",
  "Double Shot",
  "Dark Tort",
  "Sweet Revenge",
  "Fatally Flaky",
  "Crunch Time",
  "The Whole Enchilada",
];

function App() {
  const [recipeState, setRecipeState] = useState({
    bookRecipes: [],
    ingredRecipes: [],
    courseRecipes: [],
    currRecipe: {},
    allBooks: [allBooks],
  });

  function updateCurrRecipe(currRecipe) {
    setRecipeState({ ...recipeState, currRecipe });
  }
  // function updateCourse(courseRecipes) {
  //   setRecipeState({ ...recipeState, courseRecipes });
  // }
  function updateIngred(ingredRecipes) {
    setRecipeState({ ...recipeState, ingredRecipes });
  }
  // function updateBook(bookRecipes) {
  //   setRecipeState({ ...recipeState, bookRecipes });
  // }

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
                <MappedRecipes
                  {...props}
                  updateCurrRecipe={updateCurrRecipe}
                  updateIngred={updateIngred}
                />
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
