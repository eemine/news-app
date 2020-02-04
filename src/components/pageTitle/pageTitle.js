import React from "react";
import "./pageTitle.css";

const PageTitle = props => {
  return (
    <div className="pageTitle">
      <h3>{props.title}</h3>
    </div>
  );
};

export default PageTitle;
