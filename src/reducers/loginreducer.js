import Amplify, { Auth, Hub } from 'aws-amplify';

let isAuthenticated = false;
const loginReducer = (state={isAuthenticated}, action)=>{

    switch (action.type) {
        case 'IS_LOGIN':
            return {
                ...state,
                isAuthenticated: localStorage.getItem('isAuthenticated')
            };
        case 'DO_LOGIN':
            isAuthenticated = true;
            return {
                ...state,
                isAuthenticated: isAuthenticated,
            };
        case 'DO_LOGIN_GET_USER':
            return {
                ...state,
                user:action.payload
            };
        case 'DO_LOGIN_ERROR':
            
            return {
                ...state,
                isAuthenticated: false,
                error: action.payload
            };
        case 'DO_LOGOUT':
        isAuthenticated = false;
        return {
            ...state,
            isAuthenticated: isAuthenticated
            };
        default:
            let user = null;
            const localStorageUser = localStorage.getItem('user');
            if(null !== localStorageUser && "undefined" !== localStorageUser){
                user =  JSON.parse(localStorageUser);
            }
            isAuthenticated = localStorage.getItem('isAuthenticated');
            return {
                ...state,
                isAuthenticated: isAuthenticated,
                user:user
            };

    }
}

export default loginReducer;