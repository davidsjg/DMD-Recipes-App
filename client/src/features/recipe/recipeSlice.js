const initialState = {};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case "recipe/recipeSelected": {
      return {
        recipe: action.payload,
      };
    }
    default:
      return state;
  }
}
