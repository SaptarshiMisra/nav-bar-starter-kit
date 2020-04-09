import React, { useState,Component,useEffect } from 'react';
import './resume.css';
import { Card, Nav, Button, } from 'react-bootstrap'

import { useSelector, useDispatch } from "react-redux";
import { editResumeDeleteSchool, editResumeAddSchool, editResumeEditSchool } from "../../../actions";
import { School } from './school.js';
import { Switch } from 'react-router';
import { Link } from 'react-router-dom';

const Resume = (props) => {
    let education = '';
    let work = '';
    let skills = '';
    let educations = props.data.education;
    educations=educations.map((each,index)=> {
        each.index = index;
        return each;
    });
    const [edu, setEdu] = useState(educations);
    useEffect(() => {
        setEdu(educations);
    }, [])
    const dispatch = useDispatch();
    const onChangeTab = (key) =>{
        let eventKey = key.split("-");
        switch (eventKey[0]) {
            case "DELETE":
                dispatch(editResumeDeleteSchool(educations[eventKey[1]]));
                break;
            case "UPDATE":
                dispatch(editResumeEditSchool(edu));
                break;
            default:
                break;
        }
    }
    if (props.data) {
        education = educations.map(function (education,index) {
            let editEventKey = 'EDIT-'+index
            let deleteEventKey = 'DELETE-'+index
            return  <div>
                <Card key={index}>
                        <Card.Header>
                            <Nav variant="tabs" onSelect={onChangeTab}>
                                <Nav.Item>
                                    <Link  
                                        to={{
                                            pathname:'/editschool',
                                            education :education
                                        }}
                                        eventKey={editEventKey} href="/edit"
                                        className="nav-link"
                                    >
                                        Edit
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={deleteEventKey}> Delete </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>

                        <Card.Body>
                            <School edu={education} />
                        </Card.Body>
            </Card>
            <br/>
            </div>

        });

        work = props.data.work.map(function (job) {
            return <div key={job.company} className="row item">
                <div className="twelve columns">
                    <h3>{job.company}</h3>
                    <p className="info">{job.title}<span>&bull;</span> <em className="date">{job.years}</em></p>

                    <p>
                        {job.description}
                    </p>
                </div>
            </div>
        });

        skills = props.data.skills.map(function (skill) {
            var className = 'bar-expand ' + skill.name.toLowerCase();
            return <li key={skill.name}><span style={{ width: skill.level }} className={className}></span><em>{skill.name}</em></li>
        });
    }

    return (
        <div>
            <section id="resume">

                <div className="row education">
                    <div className="three columns header-col" id="education-section">
                        <h1><span>Education</span></h1>
                            <br />
                            <br />
                            <br />
                        <div> <Button onClick={() => dispatch(editResumeAddSchool())} id="add-education">Add another </Button></div>
                        
                    </div>

                    <div className="nine columns main-col">
                        {education}
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>The main skill sets below outline the variety of skills performed within my current role as Senior Photographer at Block Media in Paris, France..
            </p>
                        <div className="bars">
                            <ul className="skills">
                                {skills}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}


export default Resume;