import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

export const Login = () => {
    return (
        <Row className="h-100 justify-content-center align-items-center p-5" >
            <Col md="4">
                <Card>
                    <Card.Header className="bg-primary text-white">
                        <Card.Title className="text-center"><strong>Customer Login</strong></Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><strong>Username / Email address</strong></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label><strong>Password</strong></Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Password" />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary" type="submit"  href="http://localhost:3000/customerdetails">
                                    <i class="fa fa-unlock-alt" aria-hidden="true"></i> Login
                            </Button>
                            </Form.Group>
                            <a href="/register">New Customer? Click here to Register</a>
                        </Form>
                    </Card.Body>
                </Card>

            </Col>

        </Row >

    )
}
