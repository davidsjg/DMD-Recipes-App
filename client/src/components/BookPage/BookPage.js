import React, { useContext, useEffect } from "react";
import styles from "./BookPage.module.css";
import { useParams } from "react-router-dom";
import { allBooks } from "../../AllBooks";
import styled from "styled-components";
import API from "../../utils/API";

function BookPage() {
  let params = useParams();

  const currBook = allBooks.find((book) => book.cName === params.book);

  console.log(currBook);

  useEffect(() => {
    //    historyRecipe = 'Catering to Nobody', searchParam = 'book'
    API.singleQuery(currBook.title, "book").then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <div className={styles["mainContain"]}>
        <div className={styles["imgDisplay"]}>
          <BookImage img={currBook.img} />
          <div className={styles["changeBook"]}>
            <p>change Book</p>
          </div>
        </div>
        <div className={styles["recipesDisplay"]}>
          <p>Recipes</p>
        </div>
      </div>
    </>
  );
}

export default BookPage;

const BookImage = styled.div`
  background-image: ${(props) => `url('${props.img}')`};
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 3px;
  height: 152px;
  width: 100px;
`;
