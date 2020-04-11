import React from "react";
import { Route,Redirect } from "react-router-dom";

// import { isLogin } from '../actions';

import {useSelector} from 'react-redux';

export default function AppliedRoute({ component: C, appProps, ...rest }) {
  let loginState = useSelector(state=>state.loginReducer.isAuthenticated);
  return (
    <Route {...rest} render={props => (
      loginState ? <C {...props} {...appProps} /> : <Redirect to="/login" />
    )} />
  );
}