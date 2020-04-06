import React from 'react';
import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar.js';
import './scss/main.scss';
import JobCard from './components/pages/HomePage.js';
import { SidebarMob } from './components/SidebarMob.js';

function App() {
  return (

    <div className=" container-fluid">
      <div id="deskTopView">
        <div class="row">
          <div  id="sideBar" class="col col-sm-1 col-md-6 col-lg-3 " style={{height:'100%' }}>
            <Sidebar />
          </div>
          <div class="col-sm-11 col-md-6 col-lg-9">
            <Header />
            <JobCard />
          </div>
        </div>
      </div>
        <div id="mobView">
            <SidebarMob />
        
           {/* <div class="col-sm-12 col-md-12 col-lg-12 "> */} 
            <div className="content-area">
              <Header />
              <JobCard />
            </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
