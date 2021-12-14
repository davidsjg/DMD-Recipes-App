export default function recipeReducer(state, action) {
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
