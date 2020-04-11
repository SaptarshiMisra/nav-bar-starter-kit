import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PublicRoute({ component: C, appProps, ...rest }) {
    return (
        <Route {...rest} render={props => (<C {...props} {...appProps} />
        )} />
    );
};

