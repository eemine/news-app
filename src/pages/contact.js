import React from "react";
import {
  PageTitle,
  Container,
  ContactForm,
  ContactDetail
} from "../components";

const Contact = () => {
  return (
    <Container>
      <PageTitle title="CONTACT" />
      <ContactForm />
      <ContactDetail/>
    </Container>
  );
};
export default Contact;
