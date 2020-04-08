import {resume} from './resume-data.json';

const resumeReducer = (state={resume}, action)=>{
    switch (action.type) {
        case 'GET_RESUME':
            return resume;
        case 'SAVE_RESUME':
            return {};
        default:
            return resume;
    }
}
export default resumeReducer;