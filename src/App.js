import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              About
            </Route>
            <Route path="/users">
              Users
            </Route>
            <Route path="/">
              Home
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
