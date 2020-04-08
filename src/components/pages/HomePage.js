import React , {useState} from 'react';
import { Card, Nav, Button, } from 'react-bootstrap'
import Map from '../Map.js';
import { Header } from '../Header.js';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';


const HomePage = (props) => {
    const jobsReducer = useSelector(state => state.jobsReducer);
    const navs = jobsReducer[0].nav;

    // const [navs,setNavs] = useState(data.nav);
    const [selectedNav, setSelectedNav] = useState(navs[0]);
    const onChangeTab = (index) =>{
        setSelectedNav(navs[index]);
    }

    return (
        <div style={{height:'100vh'}}>
            <Header />

            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first" onSelect={onChangeTab}>
                        {
                            navs.map((nav,index) =>
                                <Nav.Item>
                                    <Nav.Link eventKey={index} disabled={nav.disabled} href={nav.linkId} >
                                        {nav.navName}
                                    </Nav.Link>
                                </Nav.Item>
                            )
                        }
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {(selectedNav.item === 'Location'?
                        <Map />
                    :
                        <div className="text">
                            <Card.Title>{selectedNav.navName}</Card.Title>
                            <Card.Text>
                                {selectedNav.titleDesc} 
                            </Card.Text>
                            <Link to={{
                                        pathname:'/apply',
                                        job :navs
                                    }} className="btn btn-primary">
                                        {selectedNav.actionName}
                            </Link>
                            {/* <Button onClick ={handleSubmit} variant="primary">{selectedNav.actionName}</Button> */}
                        </div>
                    )}
                </Card.Body>
            </Card>
            
        </div>
        
    )
  }
  
  export default HomePage;

