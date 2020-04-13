import React from 'react'
import { Link } from 'react-router-dom';

export const MobileMenuList = (props) => {
    const onLinkClick = () =>{
        props.setOpen(false)
    }
    return (
        <li className={props.open ? "fade" : ""} {...props}>
            <Link to={{
                      pathname:props.menu.name
                    }} onClick={onLinkClick} {...props}
            ><span><i className={props.menu.icon} aria-hidden="true"></i></span>{props.menu.name}</Link>
        </li>
    )
}
