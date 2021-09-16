import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_RECIPE,
  GET_ALL_RECIPES,
  LOADING,
  SET_CURRENT_BOOK,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
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
