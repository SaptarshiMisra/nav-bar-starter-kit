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
export const editResumeEditWork = (payload) =>{
    return {
        type:"EDIT_RESUME_EDIT_WORK",
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

export const editResumeEditSkills = (payload) =>{
    return {
        type:"EDIT_RESUME_EDIT_SKILLS",
        payload: payload
    }
}

//login and logout section
export const isLogin = () =>{
    return {
        type:"IS_LOGIN"
    }
}
export const doLogin = () =>{
    return {
        type:"DO_LOGIN"
    }
}
export const doLoginGetUser = (payload) =>{
    return {
        type:"DO_LOGIN_GET_USER",
        payload: payload
    }
}
export const doLoginError = (payload) =>{
    return {
        type:"DO_LOGIN_ERROR",
        payload: payload
    }
}