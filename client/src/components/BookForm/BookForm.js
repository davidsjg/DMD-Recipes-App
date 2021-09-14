import React, { useRef } from "react";

export default function BookForm() {
  let recipeSearch = useRef();
  let bookSearch = useRef();
  let ingredSearch = useRef();

  function handleOnClick(e) {
    e.preventDefault();
    console.log(recipeSearch.current.value);
  }

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

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Check me out</label>
        </div>
        <button
          onClick={handleOnClick}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}
