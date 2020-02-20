import React from "react";
import "./newsHeadlines.css";
import { NavLink } from "react-router-dom";

const NewsHeadlines = ({ articles }) => {
  return (
    <div className="newsHeadlines">
      {articles &&
        articles.map(({ title, description }, index) => (
          <NavLink to={`/articles/${index}`} className="newsHeadlines_container" key={`nhc_i${index}`}>
            <div className="newsHeadlines_title">{title}</div>
            <div className="newsHeadlines_description">{description}</div>
          </NavLink>
        ))}
    </div>
  );
};

export default NewsHeadlines;
