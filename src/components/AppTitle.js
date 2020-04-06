import React from 'react'
import {APP} from '../config.js';


export const AppTitle = () => {
    return (
        <div className="appName">{APP.name}</div>
    )
}
