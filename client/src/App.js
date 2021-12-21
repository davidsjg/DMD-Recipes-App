import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";

import Header from "./components/Header/Header";
import ChooseRecipe from "./components/ChooseRecipe/ChooseRecipe";
import Recipe from "./components/Recipe/Recipe";

function App() {
  return (
    <Router>
      <Header />
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/chooseRecipe/:book" element={<ChooseRecipe />} />
          <Route path="/recipe/:recipe" element={<Recipe />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
