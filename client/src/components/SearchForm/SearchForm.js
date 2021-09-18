import React, { useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { SET_CURRENT_RECIPE } from "../../utils/actions";

export default function SearchForm() {
  const [state, dispatch] = useStoreContext();
  const recipeSearch = useRef(null);
  const bookSearch = useRef();
  const ingredSearch = useRef();

  // useEffect(() => {}, []);
  console.log("state is below");
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    let recipeInput = recipeSearch.current.value;
    let bookInput = bookSearch.current.value;
    let ingredInput = ingredSearch.current.value;
    let rOnly = false;
    let bOnly = false;
    let iOnly = false;
    let RnB = false;
    let RnI = false;
    let BnI = false;
    let RnBnI = false;

    // API.getRecipes().then((data) => {
    //   console.log(data);
    // });

    // API.findByBook(bookSearch.current.value).then((data) => {
    //   console.log(data);
    //   dispatch({
    //     type: SET_CURRENT_BOOK,
    //     book: data.data[0],
    //   });
    //   console.log(data.data);
    //   console.log(state);
    // });

    // API.findByRecipe(recipeSearch.current.value).then((data) => {
    //   dispatch({
    //     type: SET_CURRENT_RECIPE,
    //     recipe: data.data[0],
    //   });
    // });

    recipeInput === ""
      ? console.log("recipeInput is empty")
      : bookInput === ""
      ? ingredInput === ""
        ? (rOnly = true)
        : (RnI = true)
      : ingredInput === ""
      ? (RnB = true)
      : (RnBnI = true);

    bookInput === ""
      ? console.log("bookInput is empty")
      : ingredInput === ""
      ? recipeInput === ""
        ? (bOnly = true)
        : (RnB = true)
      : recipeInput === ""
      ? (BnI = true)
      : (RnBnI = true);

    ingredInput === ""
      ? console.log("ingredInput is empty")
      : recipeInput === ""
      ? bookInput === ""
        ? (iOnly = true)
        : (BnI = true)
      : bookInput === ""
      ? (RnI = true)
      : (RnBnI = true);

    let queryArray = [iOnly, bOnly, rOnly, RnB, BnI, RnI, RnBnI];

    console.log(queryArray);

    console.log("iONly " + iOnly);
    console.log("bOnly " + bOnly);
    console.log("rOnly " + rOnly);
    console.log("RnB " + RnB);
    console.log("Bni " + BnI);
    console.log("RnI " + RnI);
    console.log("RnBnI " + RnBnI);
    //push them all into an array, return the one thats true, send that to setQuery()
    // setQuery();
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

// recipeInput === ""
// ? console.log("recipeInput is empty")
// : bookInput === ""
// ? ingredInput === ""
//   ? console.log("this is R only")
//   : console.log("this is R + I")
// : ingredInput === ""
// ? console.log("THIS IS R + B")
// : console.log("THIS IS R + B + I");

// bookInput === ""
// ? console.log("bookInput is empty")
// : ingredInput === ""
// ? recipeInput === ""
//   ? console.log("this is B only")
//   : console.log("this is B + R")
// : recipeInput === ""
// ? console.log("THIS IS B + I")
// : console.log("THIS IS R + B + I");

// ingredInput === ""
// ? console.log("ingredInput is empty")
// : recipeInput === ""
// ? bookInput === ""
//   ? console.log("this is I only")
//   : console.log("this is I + B")
// : bookInput === ""
// ? console.log("THIS IS I + R")
// : console.log("THIS IS R + B + I");
