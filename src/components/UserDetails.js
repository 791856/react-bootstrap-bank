import React from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import { FormGroup, FormControl } from "react-bootstrap";

export const UserDetail = () => {
    return (
        <Row className="h-100 justify-content-center align-items-center p-5" >
            <Col md="12">
                <Card>
                    <Card.Header className="bg-primary text-white">
                        <Card.Title className="text-center"><strong>Customer  Details</strong></Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form>

                            <Form.Group controlId="formname">
                                <Form.Label><strong> Customer Name</strong></Form.Label>
                                <Form.Control type="name" placeholder="Enter your First name " />
                            </Form.Group>

                            <Form.Group controlId="formsurname">
                                <Form.Label><strong> Customer Surname</strong></Form.Label>
                                <Form.Control type="name" placeholder=" Enter your surnmae" />
                            </Form.Group>
                        

                            <Form.Group controlId="formaddress">
                                <Form.Label><strong>Address</strong></Form.Label>
                                <Form.Control type="address" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formcountry">
                                <Form.Label><strong>Country</strong></Form.Label>
                                <Form.Control type="country" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formstate">
                                <Form.Label><strong>State</strong></Form.Label>
                                <Form.Control type="state" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formemail">
                                <Form.Label><strong>Email</strong></Form.Label>
                                <Form.Control type="email" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formcontact">
                                <Form.Label><strong>Contact No</strong></Form.Label>
                                <Form.Control type="contact" placeholder="" />
                            </Form.Group>

                            <FormGroup controlId="date" bsSize="large">
                                <Form.Label><strong> Date of Birth</strong></Form.Label>
                                <FormControl
                                    type="date"
                                />
                            </FormGroup>

                            <Form.Group controlId="formaccounttype">
                                <Form.Label><strong>Account Type</strong></Form.Label>
                                <Form.Control type="accounttype" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formbranchname">
                                <Form.Label><strong>Branch Name</strong></Form.Label>
                                <Form.Control type="branchname" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="forminitialdeposit">
                                <Form.Label><strong>Initial Deposit</strong></Form.Label>
                                <Form.Control type="initialdeposit" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formidproof">
                                <Form.Label><strong>ID Proof</strong></Form.Label>
                                <Form.Control type="idproof" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formidproofno">
                                <Form.Label><strong>ID Proof Number</strong></Form.Label>
                                <Form.Control type="idproofno" placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="formloanroi">
                                <Form.Label><strong>Available Balance</strong></Form.Label>
                                <Form.Control type="availablebalance" placeholder="" />
                            </Form.Group>

        <Button type="primary" key="console" shape="round" href="http://localhost:3000/deposit">
                                Next
        </Button>
                        </Form>
                    </Card.Body>
                </Card>

            </Col>

        </Row >
    )
}
