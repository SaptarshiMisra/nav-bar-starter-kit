import React from "react";
import { Route,Redirect } from "react-router-dom";
import { getLoginUser } from './../actions/GetLoginUser'
// import { isLogin } from '../actions';
import {useDispatch} from 'react-redux';

import {useSelector} from 'react-redux';

export default function AppliedRoute({ component: C, appProps, ...rest }) {
  let { isAuthenticated } = appProps;  
  let dispatch = useDispatch();
  if(!isAuthenticated){

    isAuthenticated = dispatch(getLoginUser());
  }
  return (
    <Route {...rest} render={props => (
      isAuthenticated ? <C {...props} {...appProps} /> : <Redirect to="/login" />
    )} />
  );
}