import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import MappedRecipes from "./pages/MappedRecipes";
import Recipe from "./pages/Recipe";

import RecipeContext from "./utils/RecipeContext";

import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  const [bookRecipes, setBookRecipes] = useState([]);
  const [ingredRecipes, setIngredRecipes] = useState([]);
  const [courseRecipes, setCourseRecipes] = useState([]);
  const [currRecipe, setCurrRecipe] = useState({});

  function setBookState(bookRecipes) {
    setBookRecipes(bookRecipes);
  }

  function setIngredState(ingredRecipes) {
    setIngredRecipes(ingredRecipes);
  }

  function setCourseState(courseRecipes) {
    setCourseRecipes(courseRecipes);
  }

  function setCurrState(currRecipe) {
    setCurrRecipe(currRecipe);
  }

  return (
    <RecipeContext.Provider
      value={(bookRecipes, ingredRecipes, courseRecipes, currRecipe)}
    >
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home {...props} setCurrState={setCurrState} />
              )}
            />
            <Route
              exact
              path={"/recipeSelect/:recipe"}
              render={(props) => <MappedRecipes {...props} />}
            />
            <Route
              exact
              path={"/recipe/:recipe"}
              render={(props) => <Recipe {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </RecipeContext.Provider>
  );
}

export default App;
