import React, { useRef, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { useAccordionButton } from "react-bootstrap/esm/AccordionButton";
import Card from "react-bootstrap/Card";
import RecipeContext from "../../utils/RecipeContext";
import API from "../../utils/API";
import Autocomplete from "../Autocomplete";

// var Accordion = require("react-bootstrap").Accordion;

export default function AccordionExample(props) {
  const recipeSearch = useRef(null);
  const bookSearch = useRef();
  const ingredSearch = useRef();
  let newArray = [];

  const { bookRecipes, ingredRecipes, courseRecipes, currRecipe } =
    useContext(RecipeContext);

  const history = useHistory();
  let setCurrRecipeState = props.props.props.updateCurrRecipe;
  let courseSelect = "";
  let setCurrIngred;
  let tempData;
  let recipeTitles = [];

  useEffect(() => {
    API.getRecipes().then((data) => {
      tempData = data.data;

      tempData.map((name) => {
        recipeTitles.push(name.name);
      });
      recipeTitles.map((title, index) => {
        newArray.push({ id: title, label: title });
      });
    });
  }, []);

  function handleClick() {
    console.log(recipeTitles);

    console.log(newArray);
  }

  const routeChange = (action) => {
    //ingred, book, recipe, course

    if (action === "ingred") {
      let path = "/recipeSelect/" + ingredSearch.current.value;
      history.push(path, "ingred");
    } else if (action === "book") {
      let path = "/recipeSelect/" + bookSearch.current.value;
      history.push(path, "book");
    } else if (action === "recipe") {
      let path = "/recipe/" + recipeSearch.current.value;
      history.push(path, "recipe");
    } else if (action === "course") {
      let path = "/recipeSelect/" + courseSelect;
      history.push(path, "course");
    }
  };

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
    let recipeInput = recipeSearch.current.value;
    let bookInput = bookSearch.current.value;
    let ingredInput = ingredSearch.current.value;
    e.preventDefault();

    if (ingredInput) {
      API.singleQuery(ingredSearch.current.value, "ingred").then((data) => {
        // setIngredRecipes([data.data]);

        routeChange("ingred");
      });
    } else if (bookInput) {
      API.singleQuery(bookSearch.current.value, "book").then((data) => {
        // setBookRecipes([data.data]);

        routeChange("book");
      });
    } else if (recipeInput) {
      API.singleQuery(recipeSearch.current.value, "recipe").then((data) => {
        // currTemp = data.data[0];
        // setCurrRecipe(currTemp);
        setCurrRecipeState(data.data[0]);
        routeChange("recipe");
      });
    } else if (courseSelect !== "") {
      API.singleQuery(courseSelect, "course").then((data) => {
        // setCourseRecipes(data.data);

        routeChange("course");
      });
    }
  };

  return (
    <>
      <form style={{ textAlign: "center" }} action="/recipes/MexicanPizza">
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
                    options={recipeTitles}
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
          onClick="/recipes/MexicanPizza"
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: "lightSkyBlue ",
            color: "black",
            marginTop: 10,
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <Button onClick={handleClick}>SUP YALL</Button>
      <Autocomplete recipeTitles={newArray} />
    </>
  );
}
