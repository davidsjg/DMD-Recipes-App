import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";

import Header from "./components/Header/Header";
import BookPage from "./components/BookPage/BookPage";

function App() {
  // const [recipeState, setRecipeState] = useState({
  //   bookRecipes: [],
  //   ingredRecipes: [],
  //   courseRecipes: [],
  //   currRecipe: {},
  //   allTitles: allTitles,
  // });

  return (
    <Router>
      <Header />
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bookPage/:book" element={<BookPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
