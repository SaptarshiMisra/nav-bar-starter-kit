import React from 'react';
import '../scss/sidebar.scss';
import {AppTitle} from './AppTitle.js'


export const Sidebar = () => {
    return (
        <div>
            <div id="sideBar">
                <AppTitle />
                <nav>
                    <a href="#" className="active"><span><i className="fa fa-home" aria-hidden="true"></i></span>Home</a>
                    <a href="#"><span><i className="fa fa-user" aria-hidden="true"></i></span>Profile</a>
                    <a href="#"><span><i className="fa fa-cog" aria-hidden="true"></i></span>Settings</a>
                    <a href="#"><span><i className="fa fa-history" aria-hidden="true"></i></span>History</a>
                </nav>
            </div>
            
        </div>
    )
}
