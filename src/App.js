import React from "react";
import "./App.css";
import { Header, HeaderNavBar } from "./components";
import { Content } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components";
import Home from "./pages/home";
import ArticleView from "./pages/articleView";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <HeaderNavBar />
        <Content>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/articles/:id">
              <ArticleView />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Content>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
