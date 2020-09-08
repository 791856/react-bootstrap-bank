import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

export const Education = () => {
    return (
        <div>
            <h1>Education Loan</h1>
            <Form>
                <Form.Group controlId="Course fee">
                    <Form.Label><strong>Course Fee</strong></Form.Label>
                    <Form.Control type=" loan amount" placeholder="" />
                </Form.Group>

                <Form.Group controlId="Course">
                    <Form.Label><strong>Course</strong></Form.Label>
                    <Form.Control type="Course" placeholder="" />
                </Form.Group>

                <Form.Group controlId="FatherName">
                    <Form.Label><strong>Father Name</strong></Form.Label>
                    <Form.Control type="RateofIntrest" placeholder="" />
                </Form.Group>

                <Form.Group controlId="formloantype">
                    <Form.Label><strong>Father Occupation</strong></Form.Label>
                    <Form.Control as="select" custom>
                        <option>Select</option>
                        <option>employeed</option>
                        <option>salaried</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="Annualincome">
                    <Form.Label><strong>Annual income</strong></Form.Label>
                    <Form.Control type="Anualincome" placeholder="" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Apply for Education  loan
                            </Button>
            </Form>

        </div>
    )
}
