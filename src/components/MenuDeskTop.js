import React, { useState } from "react";
import {APP} from '../config.js';
import { Link } from 'react-router-dom';


export const MenuDeskTop = (props) => {
    const [menus] =  useState(APP.menu);
    return (
        <div>
            { 
                menus.map(menu => <Link to={{
                                                pathname:menu.name
                                            }} {...props}
                ><span><i className={menu.icon} aria-hidden="true"></i></span>{menu.name}</Link>)
            }
            }
        </div>
    )
}
