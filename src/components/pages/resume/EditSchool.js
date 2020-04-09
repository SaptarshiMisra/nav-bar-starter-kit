import React from 'react'
import { Redirect } from 'react-router'
import { School } from './school'

export const EditSchool = (props) => {
    if(!props.location.education)
        {
            return <Redirect to="/" />
        }
    return (
            <form style={{height:'100vh'}}>
                Form will be here for you to edit the below education
                <School edu={props.location.education} />
            </form>
                
    )
}
