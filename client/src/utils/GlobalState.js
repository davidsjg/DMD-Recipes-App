import React, { createContext, useReducer, useContext } from "react";
import { GET_RECIPE, GET_ALL_RECIPES, LOADING } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
      };

    case GET_RECIPE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    recipe: "",
    ingredient: "",
    quantities: "",
    course: "",
    book: "",
    meat: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
