import React from "react";

import HomeHero from "../components/HomeHero/HomeHero";
import BooksLayout from "../components/BooksLayout/BooksLayout";

export default function Home(props) {
  return (
    <>
      <HomeHero />
      <BooksLayout />
    </>
  );
}
