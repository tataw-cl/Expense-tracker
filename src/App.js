import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signIn from "./components/auth/register";
import mainSite from "./components/auth/mainSite";
import SignUp from "./components/auth/signUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="./components/auth/register">
          <SignUp />
        </Route>{" "}
        <Route path="./components/auth/mainSite">
          <mainSite />
        </Route>{" "}
      </Switch>{" "}
    </Router>
  );
}

export default App;
