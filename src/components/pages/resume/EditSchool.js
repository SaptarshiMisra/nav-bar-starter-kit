import React from 'react'
import { Redirect } from 'react-router'
import {Form} from 'react-bootstrap';
import {editResumeEditSchool} from '../../../actions';
import {useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

export const EditSchool = (props) => {
    const dispatch = useDispatch();
    // if(!props.location.education)
    // {
    //     return <Redirect to="/" />
    // }
    const [school,setSchool] = useState('');
    const [id,setId] = useState('');
    const [degree,setDegree] = useState('');
    const [graduated,setGraduated] = useState('');
    const [description,setDescription] = useState('');
    const[editState,setEditState] = useState({});

    useEffect(() => {
        if(props.location.education)
        {
            setId(props.location.education.id)
            setSchool(props.location.education.school)
            setDegree(props.location.education.degree)
            setGraduated(props.location.education.graduated)
            setDescription(props.location.education.description)

            let initstate = {
                id:props.location.education.school.id,
                school:props.location.education.school,
                degree:props.location.education.degree,
                graduated:props.location.education.graduated,
                description:props.location.education.description,
            
            }
            setEditState(initstate);
        }
    },[]);
    
    useEffect(() => {
        editState.id=id
        editState.school = school
        editState.degree = degree
        editState.graduated = graduated
        editState.description = description
        setEditState(editState);
        dispatch(editResumeEditSchool(editState))
    }, [school,degree,graduated,description])


    if(!props.location.education)
        {
            return <Redirect to="/" />
        }
    const updateSchool =()=>{
        dispatch(editResumeEditSchool(editState))
    } 
    return (
            <div style={{height:'100vh',padding:'20px'}}>
                {/* <School edu={props.location.education} /> */}

                <hr/>

                <Form>
                    <Form.Group controlId="formGroupSchoolNames">
                        <Form.Label>Qualification</Form.Label>
                        <Form.Control 
                                        value={degree}
                                        readOnly = {false}
                                        type="text"
                                        onChange = {(e)=>{
                                            setDegree(e.target.value);
                                            // updateSchool();
                                        }}
                                        placeholder={degree} />
                    </Form.Group>
                    <Form.Group controlId="formGroupSchoolName">
                        <Form.Label>School or College or University name</Form.Label>
                        <Form.Control 
                                    value={school}
                                    type="text"
                                    onChange = {(e)=>{setSchool(e.target.value)}}
                                    placeholder={school} />
                    </Form.Group>
                    <Form.Group controlId="formGroupYear">
                        <Form.Label>Year and month for completion</Form.Label>
                        <Form.Control 
                                    value={graduated} 
                                    onChange = {(e)=>{setGraduated(e.target.value)}}
                                    placeholder={graduated} 
                                    
                                     />
                    </Form.Group>
                    <Form.Group controlId="formGroupSchoolDesc">
                        <Form.Label>Small description of your degree</Form.Label>
                        <Form.Control 
                                    value={description}
                                    onChange = {(e)=>{setDescription(e.target.value)}} 
                                    placeholder={description} />
                    </Form.Group>
                    
                </Form>
                <div><Link to={{pathname:'/Profile'}}>Save</Link></div>                        
            </div>
                
    )
}
