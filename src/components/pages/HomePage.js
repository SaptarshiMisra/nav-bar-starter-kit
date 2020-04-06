import React , {useState} from 'react';
import { Card, Nav, Button, } from 'react-bootstrap'


const HomePage = () => {
    const data = [{
        nav:[
             {
                item:'Job Details',
                linkId:'',
                disabled: false,
                title:' Job Details',
                titleDesc:'You have to work as your supervisor says. 8 hours a day ',
                actionName:'Apply'
             },
             {
                item:'Location',
                linkId:'',
                disabled: false,
                title:'Sample Job Details',
                titleDesc:'Loreum ',
                actionName:'Apply'
            },
            {
                item:'Salary',
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
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first" onSelect={onChangeTab}>
                    {
                        navs.map((nav,index) =>
                            <Nav.Item>
                                <Nav.Link eventKey={index} disabled={nav.disabled} href={nav.linkId} >
                                    {nav.item}
                                </Nav.Link>
                            </Nav.Item>
                        )
                    }
                </Nav>
            </Card.Header>
            <Card.Body>
                {(selectedNav.item === 'Location'?
                    <div className="text">
                        <Card.Title>Welcome to Location</Card.Title>
                        <Card.Text>
                            {selectedNav.titleDesc} 
                        </Card.Text>
                        <Button variant="primary">{selectedNav.actionName}</Button>
                    </div>
                :
                    <div className="text">
                        <Card.Title>{selectedNav.title}</Card.Title>
                        <Card.Text>
                            {selectedNav.titleDesc} 
                        </Card.Text>
                        <Button variant="primary">{selectedNav.actionName}</Button>
                    </div>
                )}
            </Card.Body>
      </Card>
    )
  }
  
  export default HomePage;

