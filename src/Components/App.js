import React, { useContext } from "react";
import {  HashRouter, Route , Switch} from "react-router-dom";
import Home from './Home';
import Intro from './Intro';
import Contact from './Contact';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Certification from './Certification';
import Resume from './Resume';


function App() {

  return (
    <HashRouter>
      <Switch>
        <Route exact  path="/" component={Home} /> 
        <Route exact  path="/intro" component={Intro} />
        <Route exact  path="/contact" component={Contact} />
        <Route exact  path="/skills" component={Skills} />
        <Route exact  path="/experience" component={Experience} />
        <Route exact  path="/education" component={Education} />
        <Route exact  path="/certification" component={Certification} />
        <Route exact  path="/generate" component={Resume} />
      </Switch>
  </HashRouter>
  );
}

export default App;