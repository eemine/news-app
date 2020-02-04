import React from "react";
import "./header.css";
import Container from "../container";
import NavBar from "../navBar";

const Header = () => (
  <header className="header">
    <Container>
      <NavBar/>
    </Container>
  </header>
);

export default Header;
