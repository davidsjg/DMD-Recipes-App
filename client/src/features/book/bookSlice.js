export default function bookReducer(state, action) {
  switch (action.type) {
    case "book/bookSelected": {
      return {
        book: action.payload,
      };
    }
    default:
      return state;
  }
}
