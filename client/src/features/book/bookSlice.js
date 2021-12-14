const initialState = {
  // book: "Catering to Nobody",
};

export default function bookReducer(state = initialState, action) {
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
