import {jobs} from './job-data.json';


const jobsReducer = (state={jobs}, action) =>{
    switch (action.type) {
        case 'DISPLAY_JOBS':
            return {};
   
    
        default:
            return jobs;
    }
}

export default jobsReducer;