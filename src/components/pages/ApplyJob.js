import React from 'react'

export const ApplyJob = (props) => {
    return (
        <div>
            <h1> Applying for Job </h1>
            <div>
                Job Detail: {props.location.job.titleDesc}
            </div>
        </div>
    )
}
