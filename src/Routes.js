import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from './components/pages/HomePage.js';
import NotFound from "./components/pages/NotFound.js";
import {Profile} from "./components/pages/Profile.js";
import AppliedRoute from "./components/AppliedRoute";
import {ApplyJob} from "./components/pages/ApplyJob.js";

export default function Routes({ appProps }) {
    return (
      <Switch>
        <AppliedRoute path="/" exact component={HomePage} appProps={appProps} />
        <AppliedRoute path="/Home" exact component={HomePage} appProps={appProps} />
        <AppliedRoute path="/apply" exact component={ApplyJob} appProps={appProps} />

        <AppliedRoute path="/Profile" exact component={Profile} appProps={appProps} />
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
      </Switch>
    );
  }