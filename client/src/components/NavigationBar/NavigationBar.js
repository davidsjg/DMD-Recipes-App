import React from "react";
import NavDrop from "..//NavDrop/NavDrop";
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">Diane Mott Davidson Recipes</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/" style={{ color: "black" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#link" style={{ color: "black" }}>
            Link
          </Nav.Link>
          <NavDrop />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
