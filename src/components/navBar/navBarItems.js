import React from "react";
import { NavLink } from "react-router-dom";
import * as newsAPI from '../../API/news';

class NavBarItems extends React.Component {
  componentDidMount() {
    if (this.props.categories.length === 0) {
      newsAPI
        .getCategories()
        .then(response => this.props.getCategories(response.data.data));
    }
  }

  render() {
    return (
      <div className="navItems">
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
      </div>
    );
  }
}

export default NavBarItems;
