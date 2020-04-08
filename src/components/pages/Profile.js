import React,{useState,useEffect} from 'react'
import {resume} from './resume/resume-data.json';
import Resume from './resume/Resume.js';


export const Profile = () => {
    const [resumeState,setResumeState] = useState(resume);
    useEffect(() => {
        setResumeState(resume);
    }, []);
    return (
        <div>
            <Resume data={resumeState}/>
        </div>
    )
}


