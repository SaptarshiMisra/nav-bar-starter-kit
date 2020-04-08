import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';

// import {resume} from './resume/resume-data.json';
import Resume from './resume/Resume.js';


export const Profile = () => {
    // const [resumeState,setResumeState] = useState(resume);
    // useEffect(() => {
    //     setResumeState(resume);
    // }, []);

    const resumeState = useSelector(state=>state.resumeReducer);
    return (
        <div>
            <Resume data={resumeState}/>
        </div>
    )
}


