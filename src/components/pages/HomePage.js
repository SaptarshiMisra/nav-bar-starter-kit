import React , {useState} from 'react';
import { Card, Nav, Button, } from 'react-bootstrap'
import Map from '../Map.js';
import { Header } from '../Header.js';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked- submit');
        let path = `/Profile`;
        // let history = useHistory();
        // history.push(path);
    }

    return (
        <div>
            <Header />

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
                        <Map />
                    :
                        <form>
                            <div className="text">
                                <Card.Title>{selectedNav.title}</Card.Title>
                                <Card.Text>
                                    {selectedNav.titleDesc} 
                                </Card.Text>
                                <Link to={{
                                            pathname:'/apply',
                                            job :selectedNav
                                        }} className="btn btn-primary">
                                            {selectedNav.actionName}
                                </Link>
                                {/* <Button onClick ={handleSubmit} variant="primary">{selectedNav.actionName}</Button> */}
                            </div>
                        </form>
                    )}
                </Card.Body>
            </Card>
        </div>
        
    )
  }
  
  export default HomePage;

