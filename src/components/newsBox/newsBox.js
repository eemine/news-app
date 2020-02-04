import React from "react";
import "./newsBox.css";

const NewsBox = ({ imgUrl, title, description, date }) => (
  <ul className="newsBox">
    <li className="newsBox_image">
      <img src={imgUrl} alt="" />
    </li>
    <li className="newsBox_title">{title}</li>
    <li className="newsBox_description">{description}</li>
    <li className="newsBox_date">{date}</li>
  </ul>
);

export default NewsBox;
