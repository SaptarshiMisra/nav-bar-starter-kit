export const editResumeDeleteSchool = (payload) =>{
    return {
        type:"EDIT_RESUME_DELETE_SCHOOL",
        payload: payload
    }
}
export const editResumeAddSchool = (payload) =>{
    return {
        type:"EDIT_RESUME_ADD_SCHOOL",
        payload: payload
    }
}
export const editResumeEditSchool = (payload) =>{
    return {
        type:"EDIT_RESUME_EDIT_SCHOOL",
        payload: payload
    }
}

// section for work starts here
export const editResumeDeleteWork = (payload) =>{
    return {
        type:"EDIT_RESUME_DELETE_WORK",
        payload: payload
    }
}
// section for work ends

// section for skills starts
export const editResumeDeleteSkills = (payload) =>{
    return {
        type:"EDIT_RESUME_DELETE_SKILLS",
        payload: payload
    }
}