import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from './components/pages/HomePage.js';
import NotFound from "./components/pages/NotFound.js";
import {Profile} from "./components/pages/Profile.js";
import AppliedRoute from "./components/AppliedRoute";
import {ApplyJob} from "./components/pages/ApplyJob.js";
import {EditSchool} from "./components/pages/resume/EditSchool.js";
import {EditWork} from "./components/pages/resume/EditWork.js";
import {EditSkill} from "./components/pages/resume/EditSkill.js";
import {Login} from './components/pages/users/Login.js';
import PublicRoute from "./components/PublicRoute";

export default function Routes({ appProps }) {
    return (
      <Switch>
        <AppliedRoute path="/" exact component={HomePage} appProps={appProps} />
        <PublicRoute path="/login" exact component={Login} appProps={appProps} />
        <AppliedRoute path="/Home" exact component={HomePage} appProps={appProps} />
        <AppliedRoute path="/apply" exact component={ApplyJob} appProps={appProps} />
        
        <AppliedRoute path="/editschool" exact component={EditSchool} appProps={appProps} />
        <AppliedRoute path="/editwork" exact component={EditWork} appProps={appProps} />
        <AppliedRoute path="/editskills" exact component={EditSkill} appProps={appProps} />

        <AppliedRoute path="/Profile" exact component={Profile} appProps={appProps} />
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
      </Switch>
    );
  }