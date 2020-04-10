import React from 'react'
import { Work } from './Work.js'
import { editResumeEditWork } from '../../../actions';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Redirect } from 'react-router'
import { Form } from 'react-bootstrap';


export const EditWork = (props) => {
    const dispatch = useDispatch();

    const [company, setCompany] = useState('');
    const [years, setYears] = useState('');
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editState, setEditState] = useState({});

    useEffect(() => {
        if (props.location.job) {
            setId(props.location.job.id);
            setCompany(props.location.job.company);
            setTitle(props.location.job.title);
            setYears(props.location.job.years);
            setDescription(props.location.job.description);

            let initstate = {
                id: props.location.job.id,
                company: props.location.job.company,
                title: props.location.job.title,
                years:props.location.job.years,
                description: props.location.job.description,

            }
            setEditState(initstate);
        }
    }, []);


    useEffect(() => {
        editState.id = id;
        editState.company = company;
        editState.title = title;
        editState.years = years;
        editState.description = description;
        setEditState(editState);
        dispatch(editResumeEditWork(editState));
    }, [company, title,years, description])

    if (!props.location.job) {
        return <Redirect to="/" />
    }
    return (
        <div style={{height:'100vh',padding:'20px'}}>
            <Form>
                <Form.Group controlId="formGroupWorkName">
                    <Form.Label>Company name</Form.Label>
                    <Form.Control
                        value={company}
                        readOnly={false}
                        type="text"
                        onChange={(e) => {
                            setCompany(e.target.value);
                            // updateSchool();
                        }}
                        placeholder={company} />
                </Form.Group>
                <Form.Group controlId="formGroupSchoolName">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                        value={title}
                        type="text"
                        onChange={(e) => { setTitle(e.target.value) }}
                        placeholder={title} />
                </Form.Group>
                <Form.Group controlId="formGroupSchoolDesc">
                    <Form.Label>Duration of your work</Form.Label>
                    <Form.Control
                        value={years}
                        onChange={(e) => { setYears(e.target.value) }}
                        placeholder={years} />
                </Form.Group>
                <Form.Group controlId="formGroupSchoolDesc">
                    <Form.Label>Small description of your job</Form.Label>
                    <Form.Control
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        placeholder={description} />
                </Form.Group>

            </Form>
            <div><Link to={{ pathname: '/Profile' }}>Save</Link></div>
        </div>

    )
}
