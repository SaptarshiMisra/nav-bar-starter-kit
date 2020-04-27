import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

import { Amplify } from 'aws-amplify';
import {AWS} from './config';


const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: AWS.cognito.REGION,
    userPoolId: AWS.cognito.USER_POOL_ID,
    identityPoolId: AWS.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: AWS.cognito.APP_CLIENT_ID,
    oauth: {
      domain: 'retailjobs.auth.ap-south-1.amazoncognito.com',
      scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: 'https://84525b01.ngrok.io',
      redirectSignOut: 'https://84525b01.ngrok.io',
      responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
  }
  },
  Storage: {
    region: AWS.s3.REGION,
    bucket: AWS.s3.BUCKET,
    identityPoolId: AWS.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "retailjobs",
        endpoint: AWS.apiGateway.URL,
        region: AWS.apiGateway.REGION
      },
    ]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
