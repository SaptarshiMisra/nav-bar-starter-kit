import React from 'react'
import { Redirect } from 'react-router'
import { Skills } from './Skills.js'
import { editResumeEditSkills } from '../../../actions';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form } from 'react-bootstrap';

export const EditSkill = (props) => {

    const dispatch = useDispatch();

    const [level, setLevel] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    
    const [editState, setEditState] = useState({});


    useEffect(() => {
        if (props.location.skill) {
            setId(props.location.skill.id);
            setLevel(props.location.skill.level);
            setName(props.location.skill.name);

            let initstate = {
                id: props.location.skill.id,
                level: props.location.skill.level,
                name: props.location.skill.name
            }
            setEditState(initstate);
        }
    }, []);

    useEffect(() => {
        editState.id = id;
        editState.level = level;
        editState.name = name;
        setEditState(editState);
        dispatch(editResumeEditSkills(editState));
    }, [level, name])

    if(!props.location.skill)
        {
            return <Redirect to="/" />
        }
    return (
        <div style={{height:'100vh',padding:'20px'}}>
            <Form>
                <Form.Group controlId="formGroupSkillName">
                    <Form.Label>Skill name</Form.Label>
                    <Form.Control
                        value={name}
                        readOnly={false}
                        type="text"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        placeholder={name} />
                </Form.Group>
                <Form.Group controlId="formGroupSchoolName">
                    <Form.Label>Expertise in a scale of 10</Form.Label>
                    <Form.Control
                        value={level}
                        type="text"
                        onChange={(e) => { setLevel(e.target.value) }}
                        placeholder={level} />
                </Form.Group>
            </Form>
            <div><Link to={{ pathname: '/Profile' }}>Save</Link></div>
        </div>
                
    )
}
