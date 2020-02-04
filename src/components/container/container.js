import React from "react";
import "./container.css";

const Container = ({ children, spaceBetween }) => (
  <div className={`container${spaceBetween ? " spaceBetween" : ""}`}>
    {children}
  </div>
);

export default Container;
