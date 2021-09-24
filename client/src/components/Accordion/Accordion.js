import React, { useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { useAccordionButton } from "react-bootstrap/esm/AccordionButton";
import Card from "react-bootstrap/Card";

import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import {
  SET_CURRENT_RECIPE,
  SET_CURRENT_BOOK,
  SET_CURRENT_INGRED,
  SET_CURRENT_COURSE,
} from "../../utils/actions";

// var Accordion = require("react-bootstrap").Accordion;

export default function AccordionExample() {
  const [state, dispatch] = useStoreContext();
  const recipeSearch = useRef(null);
  const bookSearch = useRef();
  const ingredSearch = useRef();

  const [bookRecipes, setBookRecipes] = useState([]);
  const [ingredRecipes, setIngredRecipes] = useState([]);
  const [courseRecipes, setCourseRecipes] = useState([]);
  const [currRecipe, setCurrRecipe] = useState({});

  console.log("all states below, ingred, book, course, curr");
  console.log(ingredRecipes);
  console.log(bookRecipes);
  console.log(courseRecipes);
  console.log(currRecipe);

  let courseSelect = "";

  // useEffect(() => {}, []);
  console.log("state is below");
  console.log(state);

  const onChangeValue = (e) => {
    courseSelect = e.target.value;
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <Button
        type="button"
        style={{ backgroundColor: "lightSkyBlue ", color: "black" }}
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    );
  }

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

    let currTemp;

    // if (rOnly)
    // API.getRecipes().then((data) => {
    //   console.log(data);
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

    if (iOnly) {
      API.singleQuery(ingredSearch.current.value, "ingred").then((data) => {
        dispatch({
          type: SET_CURRENT_INGRED,
          ingredients: data.data,
        });
        setIngredRecipes([data.data]);
      });
    } else if (bOnly) {
      API.singleQuery(bookSearch.current.value, "book").then((data) => {
        dispatch({
          type: SET_CURRENT_BOOK,
          book: data.data,
        });
        setBookRecipes([data.data]);
      });
    } else if (rOnly) {
      API.singleQuery(recipeSearch.current.value, "recipe").then((data) => {
        dispatch({
          type: SET_CURRENT_RECIPE,
          recipe: data.data[0],
        });
        currTemp = data.data[0];
        setCurrRecipe(currTemp);
      });
    } else if (courseSelect !== "") {
      API.singleQuery(courseSelect, "course").then((data) => {
        dispatch({
          type: SET_CURRENT_COURSE,
          course: data.data,
        });
        setCourseRecipes(data.data);
      });
    }
  };

  return (
    <>
      <form style={{ textAlign: "center" }}>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header className="homeAccord">
              <CustomToggle eventKey="1">Search by Recipe</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
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
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header className="homeAccord">
              <CustomToggle eventKey="2">Search by Ingredient</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
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
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header className="homeAccord bookAccord">
              <CustomToggle eventKey="3">Search by Book</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
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
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header className="homeAccord">
              <CustomToggle eventKey="4">Search by Course</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <div onChange={onChangeValue}>
                  <input type="radio" value="Appetizer" name="course" />{" "}
                  Appetizer{" "}
                  <input type="radio" value="Breakfast" name="course" />{" "}
                  Breakfast <input type="radio" value="Main" name="course" />{" "}
                  Main <input type="radio" value="Dessert" name="course" />{" "}
                  Dessert{" "}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: "lightSkyBlue ",
            color: "black",
            marginTop: 10,
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
