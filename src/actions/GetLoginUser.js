import {doLogin,doLoginGetUser,doLoginError} from './index';
import { Auth } from "aws-amplify";

export function getLoginUser() {
    return dispatch => {
        // dispatch(doLogin());
        Auth.currentAuthenticatedUser({
            bypassCache:false
          })
        .then((res) => {
            console.log(res);
            return res;
        })
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(doLoginGetUser(res));
            return res;
        })
        .catch(error => {
            dispatch(doLoginError(error));
        })
    }
}

