import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div className="navbar">
    <NavLink to="/" exact activeClassName="active" className="navItem">
      Home
    </NavLink>
    <NavLink to="/about" className="navItem">
      About
    </NavLink>
    <NavLink to="/contact" className="navItem">
      Contact
    </NavLink>
  </div>
);

export default NavBar;
