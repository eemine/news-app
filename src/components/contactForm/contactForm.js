import React from "react";
import "./contactForm.css";

const ContactForm = props => (
  <form className="contact-form">
  <input type="text" placeholder="Name" className="contact-input" />
  <input type="email" placeholder="Email" className="contact-input" />
  <textarea
    placeholder="Message"
    className="contact-input"
    rows="6"
  ></textarea>
  <button type="submit" className="btn-contact">
    Send
  </button>
</form>
);

export default ContactForm;
