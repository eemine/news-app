import React from "react";
import "./newsBox.css";
import { NavLink } from "react-router-dom";
import moment from 'moment';

const NewsBox = ({ image, header, description, date, link }) => (
  <NavLink className="newsBox_link" to={`/articles/${link}`}>
    <ul className="newsBox">
      <li className="newsBox_image">
        <img src={image} alt="" />
      </li>
      <li className="newsBox_title">{header}</li>
      <li className="newsBox_description">{description}</li>
      <li className="newsBox_date">{moment(date).format("DD MM YYYY")}</li>
    </ul>
  </NavLink>
);

export default NewsBox;
