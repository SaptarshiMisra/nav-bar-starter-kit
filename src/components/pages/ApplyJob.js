import React from 'react'
import { Redirect } from 'react-router'

export const ApplyJob = (props) => {
    if(!props.location.job)
    {
        return <Redirect to="/" />
    }else{
        let data  = props.location.job;
        let jobDetail = '';
        let salary = '';
        let location = '';
        if(data){
            jobDetail = data[0].titleDesc;
            salary = data[2].titleDesc;
            location = data[1].titleDesc;
        }
        return (
            <div style={{height:'100vh'}}>
            <h1> Going to Apply for the below job</h1>
                <hr/>
                <div>
                    <div>Job Detail: {jobDetail}</div>
                    <div>{salary}</div>
                    <div>Location: {location}</div>
                </div>
            </div>
        )
    }
}
