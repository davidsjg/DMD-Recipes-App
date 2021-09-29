import React from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDisplayBooks from "../components/CardDisplayBooks/CardDisplayBooks";

export default function Home(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CardDisplayBooks />
          </Col>
          <Col lg={6}>
            <SearchForm props={props} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
