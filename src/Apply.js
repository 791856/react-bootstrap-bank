import React from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';


export const Apply = () => {
    return (
        <Row className="h-100 justify-content-center align-items-center p-5" >
            <Col md="12">
                <Card>
                    <Card.Header className="bg-primary text-white">
                        <Card.Title className="text-center"><strong>Apply Loan</strong></Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formloantype">
                                <Form.Label><strong>Loan Type</strong></Form.Label>
                                <Form.Control as="select" custom>
                                    <option>Select</option>
                                    <option>Home</option>
                                    <option>Vehicle</option>
                                    <option>Personal</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formloanamount">
                                <Form.Label><strong>Loan Amount</strong></Form.Label>
                                <Form.Control type="loanamount" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formloanapplydate">
                                <Form.Label><strong>Apply Date</strong></Form.Label>
                                <Form.Control type="loanapplydate" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formloanroi">
                                <Form.Label><strong>Rate of Interest</strong></Form.Label>
                                <Form.Control type="loanroi" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formloanduration">
                                <Form.Label><strong>Loan Duration</strong></Form.Label>
                                <Form.Control type="loanduration" placeholder="" />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Apply
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>

            </Col>

        </Row >
    )
}
