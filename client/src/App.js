import React from "react";
import "./App.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing/Landing";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
