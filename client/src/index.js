import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

import store from "./store";

// console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  // console.log("State after dispatch: ", store.getState());
});

store.dispatch({
  type: "book/bookSelected",
  payload: "Dying for Chocolate",
});

store.dispatch({
  type: "recipe/recipeSelected",
  payload: {
    name: "Almond Poppy Seed Muffins",
    book: "The Last Suppers",
    ingredients: [
      "eggs",
      "sugar",
      "evaporated milk",
      "milk",
      "vegetable oil",
      "baking powder",
      "salt",
      "flour",
      "vanilla extract",
      "almond extract",
      "poppy seeds",
    ],
    quantities: [
      "4 large",
      "2 cups",
      "1.25 cups (13 ounce can)",
      "0.25 cups",
      "2 cups",
      "3.5 teaspoons",
      "0.5 teaspoon",
      "4 cups",
      "1 teaspoon",
      "1 teaspoon",
      "0.5 cup",
    ],
    course: "breakfast",
    glutenFree: false,
    lowCarb: false,
    instructions1: `Preheat the oven to 325 degrees. Line 30 muffin cups with paper liners. In a large mixing bowl, beat together the eggs, sugar, evaporated milk, milk, and vegetable oil. Sift together the baking powder, salt and flour. Gradually add the flour mixture to the egg mixture, beating until well combined. Add the extracts and poppy seeds, stirring only until well combined. Using a 1/3-cup measure, pour the batter into the muffin cups. Bake for 25 to 30 minutes or until a toothpick inserted into the center of a muffin comes out clean.
  Makes 30 muffins`,
  },
});

store.dispatch({
  type: "book/bookSelected",
  payload: "Cereal Murders",
});

unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
