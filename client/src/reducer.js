import { combineReducers } from "redux";

import recipeReducer from "./features/recipe/recipeSlice";
import bookReducer from "./features/book/bookSlice";

const rootReducer = combineReducers({
  recipe: recipeReducer,
  book: bookReducer,
});

export default rootReducer;
