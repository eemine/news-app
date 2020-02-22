import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Container from "../container";
import fox from "./fox.png";

const Header = () => (
  <header className="header">
    <Container>
      <img className="header_logo" src={fox} alt='logo'></img>
      <Link to="/" className="header_link">
        Fox news
      </Link>
    </Container>
  </header>
);

export default Header;
