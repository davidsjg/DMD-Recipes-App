import React from "react";
import autofill from "react-autofill";
import ReactDOM from "react-dom";

export default function Autofill(props) {
  let recipeTitles = props.recipeTitles;

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    const nextState = {};

    nextState[name] = value;
  }

  function constructor() {
    super();
    this.state = {};
  }

  {
    return (
      <form>
        <input
          onChange={handleChange}
          name="field"
          value={recipeTitles.map((recipe) => {
            return recipe;
          })}
        />
      </form>
    );
  }
}
