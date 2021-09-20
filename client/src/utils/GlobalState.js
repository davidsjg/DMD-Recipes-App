import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_RECIPE,
  SET_CURRENT_BOOK,
  SET_CURRENT_INGRED,
  SET_CURRENT_COURSE,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  console.log("in reducer");
  console.log(action);
  switch (action.type) {
    case SET_CURRENT_RECIPE:
      return {
        ...state,
        recipe: action.recipe,
        loading: false,
      };

    case SET_CURRENT_BOOK:
      return {
        ...state,
        book: action.book,
        loading: false,
      };

    case SET_CURRENT_INGRED:
      return {
        ...state,
        ingredients: action.ingredients,
        loading: false,
      };

    case SET_CURRENT_COURSE:
      return {
        ...state,
        course: action.course,
        loading: false,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    recipe: "",
    ingredient: [],
    quantities: "",
    course: [],
    book: [],
    meat: "",
    allBooks: [
      "Catering to Nobody",
      "Dying for Chocolate",
      "The Cereal Murders",
      "The Last Suppers",
      "Killer Pancake",
      "The Main Corpse",
      "The Grilling Season",
      "Prime Cut",
      "Tough Cookie",
      "Sticks and Scones",
      "Chopping Spree",
      "Double Shot",
      "Dark Tort",
      "Sweet Revenge",
      "Fatally Flaky",
      "Crunch Time",
      "The Whole Enchilada",
    ],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
