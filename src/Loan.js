import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap'
import { FormGroup, FormControl } from "react-bootstrap";
import props from 'prop-types';
import { personal } from './components/PersonalLoan';
import { validation } from './components/Velidation';



export const Loan = () => {
    return (
        <div>
            <h1>Loan</h1>

            <Form>
                <Form.Group controlId="formloantype">
                    <Form.Label><strong>Loan type</strong></Form.Label>
                    <Form.Control as="select" custom>
                        <option>Select</option>
                        <option>personal Loan</option>
                        <option>educational Loan</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="loanAmount">
                    <Form.Label><strong>Loan Amount</strong></Form.Label>
                    <Form.Control type=" loan amount" placeholder="" />
                </Form.Group>


                <FormGroup controlId="date" bsSize="large">
                    <Form.Label><strong>Loan Apply Date</strong></Form.Label>
                    <FormControl
                        type="date"
                    />
                </FormGroup>

                <Form.Group controlId="RateofIntrest">
                    <Form.Label><strong>Rate of intrest</strong></Form.Label>
                    <Form.Control type="RateofIntrest" placeholder="" />
                </Form.Group>

                <Form.Group controlId="DurationOfTimePeriod">
                    <Form.Label><strong>Duration of Time period</strong></Form.Label>
                    <Form.Control type="DurationOfTimePeriod" placeholder="" />
                </Form.Group>

                <Button variant="primary" type="submit" onclick='validation()'>

                    Apply for loan
                            </Button>
            </Form>
        </div>
    )
}
