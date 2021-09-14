import React from "react";
import BookForm from "../../components/BookForm/BookForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import GlobalState from "../../utils/GlobalState";

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col lg={8}>
            <BookForm />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
