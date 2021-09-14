import React, { useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function BookForm() {
  let book = useRef();

  return (
    <Container>
      <Form className="bookForm">
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="bookSearch"
          style={{ paddingTop: 2 }}
        >
          <Form.Label column sm={3}>
            Search by Book
          </Form.Label>
          <Col sm={5}>
            <Form.Control placeholder="Book" />
          </Col>
          <Col sm={4} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="recipeSearch">
          <Form.Label column sm={3}>
            Search by Recipe Name
          </Form.Label>
          <Col sm={5}>
            <Form.Control placeholder="Recipe Name" />
          </Col>
          <Col sm={4} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="ingredientSearch">
          <Form.Label column sm={3}>
            Search by Ingredient
          </Form.Label>
          <Col sm={5}>
            <Form.Control placeholder="Ingredient" />
          </Col>
          <Col sm={4} />
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={3}>
              Search by Course
            </Form.Label>
            <Col sm={2}>
              <Form.Check
                type="radio"
                label="Beef"
                name="beefRadio"
                id="beefRadio"
              />
            </Col>
            <Col sm={2} style={{ float: "right" }}>
              <Form.Check
                type="radio"
                label="Chicken"
                name="chickenRadio"
                id="chickenRadio"
              />
            </Col>
            <Col sm={2} style={{ float: "right" }}>
              <Form.Check
                type="radio"
                label="Fish"
                name="fishRadio"
                id="fishRadio"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={3}>
              Gluten Free/Low Carb
            </Form.Label>
            <Col sm={2}>
              <Form.Check
                type="checkbox"
                label="Gluten Free"
                name="beefRadio"
                id="beefRadio"
              />
            </Col>
            <Col sm={2} style={{ float: "right" }}>
              <Form.Check
                type="checkbox"
                label="Low Carb"
                name="chickenRadio"
                id="chickenRadio"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 12, offset: 7 }}>
            <Button type="submit">Search!</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}
