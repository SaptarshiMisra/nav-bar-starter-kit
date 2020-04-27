import React , {useState,useEffect} from 'react';
import { Sidebar } from './components/Sidebar.js';
import {useSelector,useDispatch} from 'react-redux';
import {isLogin} from './actions';

import './scss/main.scss';
import Routes from "./Routes";

import { SidebarMob } from './components/SidebarMob.js';

import {getLoginUser} from './actions/GetLoginUser';

function App() {

  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user,setUser] = useState({});
  const dispatch = useDispatch();
  let userState = useSelector(state=>state.loginReducer);
  useEffect(() => {
      let usr = dispatch(getLoginUser());
      setUser(usr);

      if(usr)
      {
        userHasAuthenticated(true);
      }
  },[]);
  
  
  function handleLogout() {
    userHasAuthenticated(false);
  }
  return (

    <div className=" container-fluid">
      <div id="deskTopView">
        <div class="row">
          <div  id="sideBar" class="col col-sm-1 col-md-6 col-lg-3 ">
            <Sidebar appProps={{ isAuthenticated, userHasAuthenticated,user }} />
          </div>
          <div class="col-sm-11 col-md-6 col-lg-9">
            <Routes appProps={{ isAuthenticated, userHasAuthenticated,user }} />
          </div>
        </div>
      </div>
        <div id="mobView">
            <SidebarMob appProps={{ isAuthenticated, userHasAuthenticated,user }}/>
              <div className="content-area">
                <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
              </div>
      </div>
    </div>
  );
}

export default App;
