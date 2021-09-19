import React, { useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { SET_CURRENT_RECIPE, SET_CURRENT_BOOK } from "../../utils/actions";

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
    console.log(bookSearch.current.value);

    API.findByBook(bookSearch.current.value).then((data) => {
      console.log("API data below");
      console.log(data);
      dispatch({
        type: SET_CURRENT_BOOK,
        book: data.data,
      });
    });

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

    if (iOnly) {
      console.log("iOnly");
    } else if (bOnly) {
      console.log("bOnly");
    } else if (rOnly) {
      API.singleQuery(recipeSearch.current.value).then((data) => {
        dispatch({
          type: SET_CURRENT_RECIPE,
          recipe: data.data[0],
        });
      });
    } else if (RnB) {
      console.log("RnB");
    } else if (BnI) {
      console.log("BnI");
    } else if (RnI) {
      console.log("RnI");
    } else if (RnBnI) {
      console.log("RnBnI");
    } else {
      alert("Please fill in at least one search field!");
    }

    const selectedQuery = queryArray.find((query) => (query = true));
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
