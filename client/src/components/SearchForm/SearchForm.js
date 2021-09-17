import React, { useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { SET_CURRENT_RECIPE } from "../../utils/actions";

export default function SearchForm() {
  const [state, dispatch] = useStoreContext();
  const recipeSearch = useRef();
  const bookSearch = useRef();
  const ingredSearch = useRef();

  // useEffect(() => {}, []);
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookSearch.current.value);

    // API.getRecipes().then((data) => {
    //   console.log(data);
    // });

    API.findByRecipe(recipeSearch.current.value).then((data) => {
      dispatch({
        type: SET_CURRENT_RECIPE,
        recipe: data.data[0],
      });
    });

    // API.findByBook(bookSearch.current.value).then((data) => {
    //   console.log(data);
    //   dispatch({
    //     type: SET_CURRENT_BOOK,
    //     book: data.data[0],
    //   });
    //   console.log(data.data);
    //   console.log(state);
    // });
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label>Recipe Name</label>
          <input
            className="form-control"
            id="recipeSearch"
            aria-describedby="recipeSearch"
            placeholder="Recipe"
            ref={recipeSearch}
          />
        </div>
        <div className="form-group">
          <label>Ingredient</label>
          <input
            className="form-control"
            id="ingredientSearch"
            aria-describedby="IngredientSearch"
            placeholder="Ingredient"
            ref={ingredSearch}
          />
        </div>
        <div className="form-group">
          <label>Book</label>
          <input
            className="form-control"
            id="bookSearch"
            aria-describedby="bookSearch"
            placeholder="Book"
            ref={bookSearch}
          />
        </div>
        Options:
        <div className="form-check">
          <input
            inline="true"
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />

          <label className="form-check-label">Gluten-Free &nbsp</label>

          <input
            inline="true"
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />

          <label className="form-check-label">Low-Carb</label>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}
