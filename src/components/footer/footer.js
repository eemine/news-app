import React from "react";
import "./footer.css";
import Container from "../container";
import NavBar from "../navBar";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <Container>
      <div className="footer_row">
        <NavBar />
      </div>
      <div className="footer_row"> 
        <Link to="/about" className="footer_navItem">
          About
        </Link>
        <Link to="/contact" className="footer_navItem">
          Contact
        </Link>
      </div>
      <p className="footer_text footer_row">Copyright &copy; 2020 Fox news</p>
    </Container>
  </footer>
);

export default Footer;
