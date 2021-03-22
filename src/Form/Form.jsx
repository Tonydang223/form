import React, { useState } from "react";
import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./Menu";
import LoginSuccessfully from "./LoginSuccessfully";
import { AuthProvider } from "./AuthContexts";
import HomePage from "./HomePage";
import Accounts from "./Accounts";
function Form() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <FormSignIn />
          </Route>
          <Route exact path="/dash">
            <HomePage/>
          </Route>
          <Route exact path="/signUp">
            <FormSignUp />
          </Route>
          <Route exact path="/success">
            <LoginSuccessfully />
          </Route>
          <Route exact path="/accounts">
          <Accounts/>
          </Route>
        </Switch>
      </Router>
      
      </AuthProvider>
    </>
  );
}

export default Form;
