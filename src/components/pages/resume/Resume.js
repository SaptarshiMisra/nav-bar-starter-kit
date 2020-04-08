import React, { Component } from 'react';
import './resume.css';
import { Card, Nav, Button, } from 'react-bootstrap'

import { useSelector, useDispatch } from "react-redux";
import { editResume } from "../../../actions";

const Resume = (props) => {
    let education='';
    let work='';
    let skills='';

    const dispatch = useDispatch();

    if(props.data) {
        education= props.data.education.map(function (edu) {
            return <div key={edu.school} className="row item" >
                <div className="twelve columns">
                    <span>SCHOOL<h3>{edu.school}</h3></span>
                    <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
                    <p>
                        {edu.description}
                    </p>
                </div>
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
                {/* <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#disabled" disabled>
                                    Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>

                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}


                <section id="resume">
                    <div> <Button onClick={()=>dispatch(editResume())}>Edit Resume</Button></div>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
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