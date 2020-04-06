import React, { useState } from "react";
import {APP} from '../config.js';


export const MenuDeskTop = () => {
    const [menus] =  useState(APP.menu);
    return (
        <div>
            { 
                menus.map(menu => <a href={menu.name}><span><i className={menu.icon} aria-hidden="true"></i></span>{menu.name}</a>)
            }
            }
        </div>
    )
}
