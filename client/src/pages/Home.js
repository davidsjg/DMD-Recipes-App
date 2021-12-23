import React from "react";
import { useParams } from "react-router-dom";
import HomeHero from "../components/HomeHero/HomeHero";
import BooksLayout from "../components/BooksLayout/BooksLayout";
import { useEffect } from "react";

export default function Home(props) {
  const params = useParams();

  console.log(props);

  return (
    <>
      <HomeHero />
      <BooksLayout />
    </>
  );
}
