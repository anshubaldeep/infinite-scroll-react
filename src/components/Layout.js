import React from "react";
import { Container } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";

const Layout = (props) => {
  return (
    <>
      <CustomNavbar />
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;
