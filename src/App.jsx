import React from "react";
import Home from "./Home";
import About from "./About";

import {Route, Switch} from "react-router-dom";
function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
 >
      <Route component={Home}/> 
    </Switch>
    </>
  );
}

export default App;
