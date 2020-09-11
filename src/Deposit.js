import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap'
import { Navbar, Nav } from 'react-bootstrap';

export const Deposit = () => {
    return (
        <div>
            <h1>Deposit</h1>

            <Form>
                            <Form.Group controlId="formloantype">
                                <Form.Label><strong>Account type</strong></Form.Label>
                                <Form.Control as="select" custom>
                                    <option>Select</option>
                                    <option>Personal Account</option>
                                    <option>Salary Account</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formloanamount">
                                <Form.Label><strong>Deposite Amount</strong></Form.Label>
                                <Form.Control type="depositeamount" placeholder="" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Deposit
                            </Button>
                            &nbsp;&nbsp;&nbsp;
        <Button type="primary" key="console" shape="round" href="http://localhost:3000/loan">
                           Loan
        </Button>
                        </Form>
        </div>
    )
}
