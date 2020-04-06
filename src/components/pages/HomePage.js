import React from 'react';
import { Card, Nav, Button, } from 'react-bootstrap'


const JobCard = () => {
    return (
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                    <Nav.Link href="#first">Job Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#link">Location</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                        Salary
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>Sample Job Details</Card.Title>
                <Card.Text>
                    Loreum 
                </Card.Text>
                <Button variant="primary">Apply</Button>
            </Card.Body>
      </Card>
    )
  }
  
  export default JobCard;

