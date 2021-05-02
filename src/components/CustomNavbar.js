import React from "react";
import { Container, Navbar } from "react-bootstrap";


const CustomNavbar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container fluid>
        <div>
          <Navbar.Brand className="pl-5" href="#home">
            Infinite Scroll
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
