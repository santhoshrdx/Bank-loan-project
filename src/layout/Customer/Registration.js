import React from 'react';
import {Row, Col, Card, Form, Button, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class Registration extends React.Component {

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Attendance Details</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Employee Name</Form.Label>
                                                <Form.Control type="text" placeholder="Employee Name" />
                                                <Form.Text className="text-muted">
                                                    
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Employee Role</Form.Label>
                                                <Form.Control type="text" placeholder="Employee Id" />
                                                <Form.Text className="text-muted">
                                                    
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Check-In-Time</Form.Label>
                                                <Form.Control type="time" placeholder="DOB" />
                                            </Form.Group>
                                           

                                           
                                           
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Employee Id</Form.Label>
                                            <Form.Control type="text" placeholder="Customer Id" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Date Of Birth</Form.Label>
                                                <Form.Control type="date" placeholder="DOB" />
                                            </Form.Group>
                                           
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Check-Out-Time</Form.Label>
                                                <Form.Control type="time" placeholder="DOB" />
                                            </Form.Group>
                                           
                                       
                                    </Col>
                                </Row>
                                
                            <center>
                            <Button variant="primary">
                                                Submit
                                            </Button>
                            </center>
                            </Card.Body>
                        </Card>
                                               </Col>
                </Row>

                <Card>
                            <Card.Header>
                                <Card.Title as="h5">Attendance Details</Card.Title>
                                       </Card.Header>
                            <Card.Body>
                                <Table striped responsive>
                                    <thead>
                                    <tr>
                                        <th>All</th>
                                        <th>Employee Name</th>
                                        <th>Employee Name</th>
                                        <th>Employee Name</th>
                                        <th>Date</th>
                                        <th>Check-In-Time</th>
                                        <th>Check-Out-Time</th>
                                      
                                    </tr>
                                    </thead>
                                    <tbody>
                                   
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>


            </Aux>
        );
    }
}

export default Registration;
