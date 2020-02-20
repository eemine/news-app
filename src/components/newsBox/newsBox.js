import React from "react";
import "./newsBox.css";
import { NavLink } from 'react-router-dom';

const NewsBox = ({ image, header, description, date, link }) => (
  <NavLink className="newsBox_link" to={`/articles/${link}`}>
    <ul className="newsBox">
    <li className="newsBox_image">
      <img src={image} alt="" />
    </li>
    <li className="newsBox_title">{header}</li>
    <li className="newsBox_description">{description}</li>
    <li className="newsBox_date">{date}</li>
  </ul>
  </NavLink>
  
);

export default NewsBox;