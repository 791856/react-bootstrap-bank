import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

export const Education = () => {
    return (
        <div>
            <h1>Personal loan</h1>
                    <Form>
                            <Form.Group controlId="Anual income">
                                <Form.Label><strong>Anual income</strong></Form.Label>
                                <Form.Control type=" loan amount" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="Company Name">
                                <Form.Label><strong>Company name </strong></Form.Label>
                                <Form.Control type="Course" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="Father Name">
                                <Form.Label><strong>Designation </strong></Form.Label>
                                <Form.Control type="RateofIntrest" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="Total Exp">
                                <Form.Label><strong>Total exp</strong></Form.Label>
                                <Form.Control type="Total Exp" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="Exp with Current company">
                                <Form.Label><strong>Exp with Current Company </strong></Form.Label>
                                <Form.Control type="Anual income" placeholder="" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Apply for Education  loan
                            </Button>
        </Form>

        </div>
    )
}
