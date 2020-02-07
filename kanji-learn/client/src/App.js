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
          <Route exact path='/Kanji-Helper/#/beginner' component={Easy} />
          <Route exact path='/Kanji-Helper/#/intermediate' component={Int} />
        </Switch>
    </Router>
  );
}

export default App;
