import React from "react";
import * as newsAPI from "../../API/news";
import "./navBar.css";
import { NavLink } from "react-router-dom";
import Container from "../container";

class NavBar extends React.Component {
  componentDidMount() {
    if (this.props.categories.length === 0) {
      newsAPI
        .getCategories()
        .then(response => this.props.getCategories(response.data.data));
    }
  }

  render() {
    return (
      <div className="navbar">
        <Container>
          <NavLink to="/" exact activeClassName="active" className="navItem">
            Home
          </NavLink>
          {this.props.categories &&
            this.props.categories.map(item => (
              <NavLink
                key={item.name}
                to={`/category/${item.name}`}
                className="navItem"
              >
                {item.description}
              </NavLink>
            ))}
          <NavLink to="/about" className="navItem">
            About
          </NavLink>
          <NavLink to="/contact" className="navItem">
            Contact
          </NavLink>
        </Container>
      </div>
    );
  }
}

export default NavBar;
