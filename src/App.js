import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Nav from "./components/Nav";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
