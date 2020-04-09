import React from 'react'

export const Experience = (props) => {
    return (
        <div>
            <div key={props.job.company} className="row item">
                <div className="twelve columns">
                    <h3>{props.job.company}</h3>
                    <p className="info">{props.job.title}<span>&bull;</span> <em className="date">{props.job.years}</em></p>

                    <p>
                        {props.job.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
