import React , {useState,useEffect} from 'react';
import { Sidebar } from './components/Sidebar.js';
import {useSelector,useDispatch} from 'react-redux';
import {isLogin} from './actions';

import './scss/main.scss';
import Routes from "./Routes";

import { SidebarMob } from './components/SidebarMob.js';

function App() {
  let loginState = useSelector(state=> state.loginReducer);
  if(loginState)
  {
    loginState = loginState.isAuthenticated;
  }
  let dispatch = useDispatch();
  const [isAuthenticated, userHasAuthenticated] = useState(loginState);
  
  useEffect(() => {
    userHasAuthenticated(loginState);
  });


  function handleLogout() {
    userHasAuthenticated(false);
  }
  return (

    <div className=" container-fluid">
      <div id="deskTopView">
        <div class="row">
          <div  id="sideBar" class="col col-sm-1 col-md-6 col-lg-3 ">
            <Sidebar />
          </div>
          <div class="col-sm-11 col-md-6 col-lg-9">
            <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
          </div>
        </div>
      </div>
        <div id="mobView">
            <SidebarMob />
              <div className="content-area">
                <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
              </div>
      </div>
    </div>
  );
}

export default App;
