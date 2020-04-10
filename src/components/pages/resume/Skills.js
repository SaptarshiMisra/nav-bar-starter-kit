import React from 'react'

export const Skills = (props) => {
    let className = 'bar-expand ' + props.skill.name.toLowerCase();
    return (
             <li key={props.skill.name}>
                 <span style={{ width: props.skill.level }} className={className}>
                </span>
                <em>
                    <br/><br/><br/><br/>
                    {props.skill.name}
                </em>
            </li>
    )
}
