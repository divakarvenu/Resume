import React, { useContext } from "react";
import {  BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Home from './Home';
import Intro from './Intro';
import Contact from './Contact';
import Skills from './Skills';
import Education from './Education';
import Certification from './Certification';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" render={ (props)=> <Home {...props} /> }></Route>
        <Route path="/intro">
          <Intro />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/skils">
          <Skills />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/certification">
          <Certification />
        </Route>
        <Route path="/generate">
          <Resume />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;