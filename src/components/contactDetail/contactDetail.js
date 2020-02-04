import React from "react";
import "./contactDetail.css";
import { FaPhone, FaRegClock, FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactDetail = () => (
  <div className="contact-detail-wrap">
    <div className="contact-detail">
      <div className="detail-icon">
        <FaMapMarkerAlt />
      </div>
      <div>
        <h4 className="detail-title">ADDRESS</h4>
        <p className="detail-paragraph">
          San Francisco, CA 94120-7775
          <br />
          United States of America
        </p>
      </div>
    </div>
    <div className="contact-detail">
      <div className="detail-icon">
        <FaPhone />
      </div>
      <div>
        <h4 className="detail-title">PHONE</h4>
        <p className="detail-paragraph">
          Local:1-800-123-444
          <br />
          Mobile:1-800-123-444
        </p>
      </div>
    </div>
    <div className="contact-detail">
      <div className="detail-icon">
        <FaRegEnvelope />
      </div>
      <div>
        <h4 className="detail-title">EMAIL</h4>
        <p className="detail-paragraph">
          info@studion.com
          <br />
          wwww.studio.com
        </p>
      </div>
    </div>
    <div className="contact-detail">
      <div className="detail-icon">
        <FaRegClock />
      </div>
      <div>
        <h4 className="detail-title">TIMING</h4>
        <p className="detail-paragraph">
          Tuesday-Friday
          <br />
          10:00 - 18:00
        </p>
      </div>
    </div>
  </div>
);

export default ContactDetail;
