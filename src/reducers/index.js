import resumeReducer from './resume';
import jobsReducer from './jobs';
import loginReducer from './loginreducer';


import {combineReducers} from 'redux';

const allReducers = combineReducers({
    resumeReducer:resumeReducer,
    jobsReducer: jobsReducer,
    loginReducer:loginReducer
});

export default allReducers;
