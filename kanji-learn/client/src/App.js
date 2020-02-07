import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Easy from './Pages/Easy';
import Int from './Pages/Intermediate';
import Diff from './Pages/Difficult';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beginner' component={Easy} />
          <Route exact path='/intermediate' component={Int} />
          <Route exact path='/difficult' component={Diff} />
        </Switch>
    </Router>
  );
}

export default App;
