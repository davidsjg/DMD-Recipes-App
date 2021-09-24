import React, { useContext } from "react";
import SearchForm from "../components/SearchForm/SearchForm";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home(props) {
  console.log();

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col lg={6}>
            <SearchForm props={props} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
