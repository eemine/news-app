import React from "react";
import "./navBar.css";
import Container from "../container";
import NavBarItems from "./navBar.container";

const NavBar = () => (
  <div className="navBar">
    <Container>
      <NavBarItems />
    </Container>
  </div>
);

export default NavBar;
