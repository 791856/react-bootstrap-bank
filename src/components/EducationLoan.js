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

                            <Form.Group controlId="Father Name">
                                <Form.Label><strong>Father Name</strong></Form.Label>
                                <Form.Control type="RateofIntrest" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="father Occupation">
                                <Form.Label><strong>Father Occupation</strong></Form.Label>
                                <Form.Control type="Father Occupation" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="Annual income">
                                <Form.Label><strong>Father Occupation</strong></Form.Label>
                                <Form.Control type="Anual income" placeholder="" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Apply for Education  loan
                            </Button>
        </Form>

        </div>
    )
}
