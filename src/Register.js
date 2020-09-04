import React from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';


export const Register = () => {
    return (
        <Row className="h-100 justify-content-center align-items-center p-5" >
            <Col md="12">
                <Card>
                    <Card.Header className="bg-primary text-white">
                        <Card.Title className="text-center"><strong>User Registration</strong></Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form>

                            <Form.Group controlId="formname">
                                <Form.Label><strong>Name</strong></Form.Label>
                                <Form.Control type="name" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="username">
                                <Form.Label><strong>Username</strong></Form.Label>
                                <Form.Control type="username" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formpassword">
                                <Form.Label><strong>Password</strong></Form.Label>
                                <Form.Control type="password" placeholder="" />
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

                            <Form.Group controlId="formdob">
                                <Form.Label><strong>Date of Birth</strong></Form.Label>
                                <Form.Control type="dob" placeholder="" />
                            </Form.Group>

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


                            <Button variant="primary" type="submit">
                                <i class="fa fa-pencil" aria-hidden="true"></i> Register
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>

            </Col>

        </Row >
    )
}
