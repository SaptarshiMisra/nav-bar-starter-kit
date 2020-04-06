import React from 'react';
import '../scss/sidebar.scss';
import {AppTitle} from './AppTitle.js'
import {MenuDeskTop} from './MenuDeskTop.js';

export const Sidebar = () => {
    return (
        <div>
            <div id="sideBar">
                <AppTitle />
                <nav>
                    <MenuDeskTop />
                </nav>
            </div>
            
        </div>
    )
}
