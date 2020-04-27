import React, { useState,useEffect } from "react";
import {APP} from '../config.js';
import { MobileMenuList } from './MobileMenuList';

export const MenuMob = (props) => {
    const [menus] =  useState(APP.menu);
    
    return (    
    <ul  className={props.open ? "nav-links open" : "nav-links"}>
    
    {
        menus.map(menu => 
            <MobileMenuList menu={menu} {...props} />
            )
        }   
    </ul>
    )
}
