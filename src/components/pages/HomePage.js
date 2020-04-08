import React , {useState} from 'react';
import { Card, Nav, Button, } from 'react-bootstrap'
import Map from '../Map.js';
import { Header } from '../Header.js';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
    const data = [{
        nav:[
             {
                navName:'Job Details',
                linkId:'',
                disabled: false,
                title:' Job Details',
                titleDesc:'You have to work as your supervisor says. 8 hours a day ',
                actionName:'Apply'
             },
             {
                navName:'Location',
                linkId:'',
                disabled: true,
                title:'Sample Job Details',
                titleDesc:'5 kms from your place ',
                actionName:'Apply'
            },
            {
                navName:'Salary',
                linkId:'',
                disabled: false,
                title:' Salary Details',
                titleDesc:'Salary : 8000 ',
                actionName:'Apply'
            }   
        ],
        
    }][0];
    const [navs,setNavs] = useState(data.nav);
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

