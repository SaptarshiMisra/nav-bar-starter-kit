import React, {useState,useRef,useEffect} from 'react'
import Editable from '../../Editable.js';
import { useSelector, useDispatch } from "react-redux";
import { editResumeEditSchool } from "../../../actions";




export const School = (props) => {

    return (

        <div key={props.edu.school} className="row item">
                <div className="twelve columns">
                    <h3>{props.edu.school}</h3>
                    <p className="info">{props.edu.degree}<span>&bull;</span> <em className="date">{props.edu.graduated}</em></p>

                    <p>
                        {props.edu.description}
                    </p>
                </div>
            </div>


        
        )
}
