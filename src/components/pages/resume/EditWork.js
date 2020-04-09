import React from 'react'
import { Redirect } from 'react-router'
import { Work } from './Work.js'

export const EditWork = (props) => {
    if(!props.location.job)
        {
            return <Redirect to="/" />
        }
    return (
            <form style={{height:'100vh'}}>
                Form will be here for you to edit the below Education
                <Work job={props.location.job} />
            </form>
                
    )
}
