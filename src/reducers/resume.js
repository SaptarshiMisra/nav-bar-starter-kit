import {resume} from './resume-data.json';

const resumeReducer = (state={resume}, action)=>{
    switch (action.type) {
        case 'GET_RESUME':
            return resume;
        case 'SAVE_RESUME':
            return {};
        case 'EDIT_RESUME_DELETE_SCHOOL':
            let filteredSchool = state.education.filter(each => {
                return each.school !== action.payload.school
            })
            state.education= filteredSchool
            return {
                ...state,
                resumeReducer: state.education
            };
        case 'EDIT_RESUME_ADD_SCHOOL':
            return {
                ...state,
                resumeReducer:  state.education.push(action.payload)
            }; 
        case 'EDIT_RESUME_EDIT_SCHOOL':
            let filteredSchoolEdit = state.education.filter(each => {
                return each.school !== action.payload.school
            })
            state.education= filteredSchoolEdit
            state.education.push(action.payload)
            return {
                ...state,
                resumeReducer: state.education
            };            
        default:
        return resume;
    }
}
export default resumeReducer;