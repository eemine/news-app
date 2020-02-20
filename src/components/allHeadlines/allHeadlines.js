import React from "react";
import * as newsApi from "../../API/news";
import { Link } from "react-router-dom";
import "./allHeadlines.css";

class AllHeadlines extends React.Component {
  componentDidMount() {
    if (this.props.allHeadlines.length === 0) {
      newsApi
        .getAllHeadlines()
        .then(response => this.props.addHeadlines(response.data));
    }
  }

  render() {
    const { allHeadlines } = this.props;

    if (allHeadlines.length > 0) {
      return (
        <div className="allHeadlines">
          <h4 className="allHeadlines_title">Headlines</h4>
          {allHeadlines.map((item, index) => (
            <Link
              to={`articles/${item.link}`}
              className="allHeadlines_item"
              key={index}
            >
              {item.header}
            </Link>
          ))}
        </div>
      );
    }
    return null;
  }
}

export default AllHeadlines;
