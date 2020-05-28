import React, { useContext } from "react";
import {  BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Home from './Home';
import Store from '../Data/Store';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" render={ (props)=> <Store> <Home {...props} /> </Store> }></Route>
        {/* <Route path="/intro">
          <Intro />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/skils">
          <Skill />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/certification">
          <Certification />
        </Route> */}
      </Switch>
  </Router>
  );
}

export default App;