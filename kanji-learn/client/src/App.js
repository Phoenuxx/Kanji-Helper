import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Easy from './Pages/Easy';
import Int from './Pages/Intermediate';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/beginner' component={Easy} />
          <Route path='/intermediate' component={Int} />
        </Switch>
    </Router>
  );
}

export default App;
