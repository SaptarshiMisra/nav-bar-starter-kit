import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {AppTitle} from './AppTitle.js'
import {MenuMob} from './MenuMob.js';


export const SidebarMob = () => {
    const [open, setOpen] = useState(false);
    const [animStyle, setAnimStyle] = useState({});
    useEffect(() => {
        setTimeout(() => {
            setAnimStyle(hamburgerStyle()); // count is 0 here
        }, 2000);
      }, []);

    const [menuWidth, setMenuWidth] = useState({});
    
    useEffect(() => {
        setTimeout(() => {
            setMenuWidth(menuWidthstyle()); // count is 0 here
        }, 2000);
      }, []);

      const menuWidthstyle =()=> {
        if(open){
            return {
                 width:'100%'
            }
        }else{
            return {
                width:'100%'
            } 
        }
    };
    

    const hamburgerStyle =()=> {
        if(open){
            return {
                 zIndex:4
            }
        }else{
            return {
                zIndex:4
           } 
        }
    };
    return (
        
        <nav>    
            {/* for mobile view */}
            <AppTitle />
            <div onClick={() => setOpen(!open)} className="hamburger" style={animStyle}>

                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <MenuMob open={open}/>
        </nav>
    )
}
