import React, { useState,useEffect } from "react";
import {APP} from '../config.js';

export const MenuMob = ({open}) => {
    const [menu,setMenu] =  useState(APP.menu);
    
    return (    
    <ul  className={open ? "nav-links open" : "nav-links"}>
    
    {menu.map(menu => 
        <li className={open ? "fade" : ""} >
            <a href={menu.name}><span><i className={menu.icon} aria-hidden="true"></i></span>{menu.name}</a>
        </li>
        )
    }   
    </ul>
    )
}
