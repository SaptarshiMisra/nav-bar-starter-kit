import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import {Button} from 'react-bootstrap';

import '../scss/header.scss';

export const Header = () => {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         value: 'SEARCH HERE'
    //     }
    //     this.handleChange = this.handleChange.bind(this),
    //     this.profilePic = '' 
    // }
    const[value, setValue] = useState('');

    const handleChange = (e) => {
        setValue( e.target.value );
    }
    const handleClick = () => {
        setValue('another random text' );
        var event = new Event('input', { bubbles: true });
        this.myinput.dispatchEvent(event);
    }

    let userState = useSelector(state=>state.loginReducer.user);
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
                        <Button className="dropbtn">{userState.name.split(' ')[0]} 
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
