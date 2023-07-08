import React from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';






class Approval extends React.Component {
  
 render() {
    
        return (
            
                <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <Col md={12}>
                        <div style={{ marginTop: '-3in' }}>
                            <Card style={{ height: '3in' }}>
                                <Card.Header>
                                    <Row>
                                        <Col xs={8} className="d-flex align-items-center">
                                            <Form.Label style={{ color: 'black', marginRight: '15px' }}>Loan</Form.Label>
                                            <InputGroup className="mr-3">
                                                <FormControl
                                                    type="search"
                                                    placeholder="Search for Customers..."
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col xs={4} className="d-flex align-items-end justify-content-start">

                                             <Button variant="primary" style={{ fontSize: '14px' }}>
                                                <span className="text-nowrap">Add Loan</span>
                                            </Button>
                                            
                                        
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body>
                                    {/* Your card content */}
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            
        );
    }
}

export default Approval;
