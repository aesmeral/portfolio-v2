import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./components/pages/HomePage/Home";
import AboutPage from "./components/pages/HomePage/AboutPage";
import Contact from "./components/pages/HomePage/Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}

export default App;
