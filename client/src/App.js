import React from "react";
import "./App.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing/Landing";
import SignUpDealer from "./screens/Dealer/Auth/Signup/SignUpDealer";
import SignUpDriver from "./screens/Driver/Auth/Signup/SighnupDriver";
import LoginDriver from "./screens/Driver/Auth/Login/LoginDriver";
import LoginDealer from "./screens/Dealer/Auth/Login/LoginDealer";
import HomeDealer from "./screens/Dealer/Home/HomeDealer";
import HomeDriver from "./screens/Driver/Home/HomeDriver";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* Landing Route */}
          <Route exact path="/">
            <Landing />
          </Route>
          {/* Dealer Routes */}
          <Route exact path="/dealer/signup">
            <SignUpDealer />
          </Route>
          <Route exact path="/dealer/login">
            <LoginDealer />
          </Route>
          <Route exact path="/dealer/home">
            <HomeDealer />
          </Route>
          {/* Driver Routes */}
          <Route exact path="/driver/signup">
            <SignUpDriver />
          </Route>
          <Route exact path="/driver/login">
            <LoginDriver />
          </Route>
          <Route exact path="/driver/home">
            <HomeDriver />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
