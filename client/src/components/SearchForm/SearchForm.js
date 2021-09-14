import React, { useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

export default function SearchForm() {
  const [state, dispatch] = useStoreContext();
  let recipeSearch = useRef();
  let bookSearch = useRef();
  let ingredSearch = useRef();

  console.log(state);

  // function handleOnClick(e) {
  //   e.preventDefault();
  //   console.log(recipeSearch.current.value);
  // }

  useEffect(() => {}, []);

  function loadRecipes() {}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipeSearch.current.value);

    API.findByRecipe(recipeSearch.current.value).then((data) => {
      console.log(data);
    });
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

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Check me out</label>
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
