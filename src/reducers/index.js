import resumeReducer from './resume';
import jobsReducer from './jobs';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    resumeReducer:resumeReducer,
    jobsReducer: jobsReducer
});

export default allReducers;
