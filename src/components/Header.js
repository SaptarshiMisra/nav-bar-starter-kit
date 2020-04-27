import React,{useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'react-bootstrap';
import {getLoginUser} from './../actions/GetLoginUser';
import '../scss/header.scss';

export const Header = () => {
    
    const[value, setValue] = useState('');
    const dispatch = useDispatch();
    let userState = useSelector(state=>state.loginReducer.user);
    useEffect(() => {
        dispatch(getLoginUser());
    },[]);

    const handleChange = (e) => {
        setValue( e.target.value );
    }
    const handleClick = () => {
        setValue('another random text' );
        var event = new Event('input', { bubbles: true });
        this.myinput.dispatchEvent(event);
    }

    
    console.log(userState)
    // render() {

        return (
            <header>
             <div className="row header">
                <div className="search-area col-lg-8">
                    <span><i className="fa fa-search" aria-hidden="true">
                        <input type="text" value={value} onChange={handleChange} /></i>
                    </span>
                </div>
                <div className="user-area col-lg-4">
                    <a href="#" className="add"> +Add</a>
                    <a href="#" className="notification"> 
                        <i className="fa fa-bell" aria-hidden="true"></i>
                        <span className="circle">3</span></a>
                    <a href="#"> 
                        {/* <div className="user-img "></div> */}
                        <div className="dropdown">
                        <Button className="dropbtn">{userState ? userState.attributes.email.split('@')[0] : ''}
                            <i className="fa fa-caret-down"></i>
                        </Button>
                        <div className="dropdown-content">
                            <a href="/logout">Logout</a>
                        </div>  
                        </div>
                        
                    </a>
                </div>
                <br/>
                <br/>
                <br/>
            </div> 
            </header>

        )
    // }
}
