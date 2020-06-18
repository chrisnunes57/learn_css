import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Navigation />

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
