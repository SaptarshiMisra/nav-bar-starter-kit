import React from 'react';
import '../scss/header.scss';

export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'SEARCH HERE'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    handleClick() {
        this.setState({ value: 'another random text' })
        var event = new Event('input', { bubbles: true });
        this.myinput.dispatchEvent(event);
    }

    render() {

        return (
            <header>
             <div className="row header">
                <div className="search-area col-lg-9">
                    <span><i className="fa fa-search" aria-hidden="true">
                        <input type="text" value={this.state.value} onChange={this.handleChange} /></i>
                    </span>
                </div>
                <div className="user-area col-lg-3">
                    <a href="#" className="add"> +Add</a>
                    <a href="#" className="notification"> 
                        <i className="fa fa-bell" aria-hidden="true"></i>
                        <span className="circle">3</span></a>
                    <a href="#"> 
                    <div className="user-img"></div>
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                </div>
            </div> 
            </header>

        )
    }
}
