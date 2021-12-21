import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import API from "../../utils/API";
import { useDispatch, useSelector } from "react-redux";

function Recipe() {
  const params = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe.recipe);
  const [currRecipe, setCurrRecipe] = useState();
  useEffect(() => {
    API.singleQuery(params.recipe, "recipe").then((data) => {
      console.log(data.data);
      dispatch({ type: "recipe/recipeSelected", payload: data.data });
      setCurrRecipe(data.data[0]);
    });
  }, []);

  const handleClick = () => {
    console.log(currRecipe);
  };

  return (
    <>
      <MainImage></MainImage>
      <button onClick={handleClick}>click me</button>
      <h3>{currRecipe?.name}</h3>
    </>
  );
}

export default Recipe;

const MainImage = styled.div`
  /* background-image: url("https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80"); */
  background-image: url("https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 74px;
  margin-left: 7px;
  margin-right: 7px;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  height: 580px;

  @media (max-width: 768px) {
    height: 1075px;
    margin-top: 535px;
    border-radius: 5px;
  }
`;
