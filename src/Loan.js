import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap'

export const Loan = () => { 
    return (
    <div>
        <h1>Loan</h1> 
        <Form>
                            <Form.Group controlId="formloantype">
                                <Form.Label><strong>Account type</strong></Form.Label>
                                <Form.Control as="select" custom>
                                    <option>Select</option>
                                    <option>Personal Account</option>
                                    <option>Salary Account</option>
                                </Form.Control>
                            </Form.Group>
        </Form>


    </div>
)
};
    