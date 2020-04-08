import {resume} from './resume-data.json';

const resumeReducer = (state={resume}, action)=>{
    switch (action.type) {
        case 'GET_RESUME':
            return resume;
        case 'SAVE_RESUME':
            return {};
        case 'EDIT_RESUME':
            return {
                ...state,
                resumeReducer: state.education.pop(state.education[0])
            };        
        default:
        return resume;
    }
}
export default resumeReducer;