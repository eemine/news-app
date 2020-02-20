import React from "react";
import {
  Container,
  AllHeadlines,
  TopNews
} from "../components";

function Home() {
  return (
    <Container spaceBetween>
      <TopNews />
      <AllHeadlines />
    </Container>
  );
}

export default Home;
