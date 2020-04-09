import React from 'react'
import { Redirect } from 'react-router'
import { Skills } from './Skills.js'

export const EditSkill = (props) => {
    if(!props.location.skill)
        {
            return <Redirect to="/" />
        }
    return (
            <form style={{height:'100vh'}}>
                Form will be here for you to edit the below skill
                <Skills skill={props.location.skill} />
            </form>
                
    )
}
