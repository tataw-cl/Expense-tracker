import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signIn from "./components/auth/register";
import mainSite from "./components/auth/mainSite";
import SignUp from "./components/auth/signUp";
import { redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/register">
        {" "}
        {authCheck ? <Redirect to="/mainSite" /> : <SignUp />}{" "}
      </Route>{" "}
      <Route exact path="/mainSite">
        <mainSite />
      </Route>{" "}
      <Route exact path="/signIn">
        <signIn />
      </Route>{" "}
    </Router>
  );
}

export default App;
