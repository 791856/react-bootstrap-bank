import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

export const NoMatch = () => {
    return (
        <div>
            <h1>Loan</h1>

            <Form>
                            <Form.Group controlId="formloantype">
                                <Form.Label><strong>Loan type</strong></Form.Label>
                                <Form.Control as="select" custom>
                                    <option>Select</option>
                                    <option>personal Loan</option>
                                    <option>Education Loan</option>
                                </Form.Control>
                            </Form.Group>



                            <Form.Group controlId="loan amount">
                                <Form.Label><strong>Loan Amount</strong></Form.Label>
                                <Form.Control type=" loan amount" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="LoanApplyDate">
                                <Form.Label><strong>Loan Apply Date</strong></Form.Label>
                                <Form.Control type="LoanApplyDate" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="RateofIntrest">
                                <Form.Label><strong>Rate of intrest</strong></Form.Label>
                                <Form.Control type="RateofIntrest" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="Duration of time period">
                                <Form.Label><strong>Duration of Time period</strong></Form.Label>
                                <Form.Control type="Duration of time period" placeholder="" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Apply for loan
                            </Button>
        </Form>

        </div>
    )
}
