import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap'
import { FormGroup, FormControl } from "react-bootstrap";
import props from 'prop-types';
import { personal } from './components/PersonalLoan';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const LoanSchema = Yup.object().shape({
    loanAmount: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    RateofIntrest: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    DurationOfTimePeriod: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
});

export const Loan = () => {
    return (
        <div>
            <h1>Loan</h1>
            <Formik
                initialValues={{
                    loanAmount: '',
                    RateofIntrest: '',
                    DurationOfTimePeriod: '',

                }}
                validationSchema={LoanSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Form.Group controlId="formloantype">
                            <Form.Label><strong>Loan type</strong></Form.Label>
                            <Form.Control as="select" custom>
                                <option>Select</option>
                                <option>personal Loan</option>
                                <option>educational Loan</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="loanAmount" Field="loanAmount" >
                            {errors.loanAmount && touched.loanAmount ? (
                                <div>{errors.loanAmount}</div>
                            ) : null}
                            <Form.Label><strong>Loan Amount</strong></Form.Label>
                            <Form.Control type=" loan amount" placeholder="" />
                        </Form.Group>


                        <FormGroup controlId="date" bsSize="large">
                            <Form.Label><strong>Loan Apply Date</strong></Form.Label>
                            <FormControl
                                type="date"
                            />
                        </FormGroup>

                        <Form.Group controlId="RateofIntrest" Field="RateofIntrest">
                        {errors.RateofIntrest && touched.RateofIntrest ? (
                                <div>{errors.RateofIntrest}</div>
                            ) : null}
                            <Form.Label><strong>Rate of intrest</strong></Form.Label>
                            <Form.Control type="RateofIntrest" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="DurationOfTimePeriod"  Field="DurationOfTimePeriod">
                        {errors.DurationOfTimePeriod && touched.DurationOfTimePeriod ? (
                                <div>{errors.DurationOfTimePeriod}</div>
                            ) : null}
                            <Form.Label><strong>Duration of Time period</strong></Form.Label>
                            <Form.Control type="DurationOfTimePeriod" placeholder="" />
                        </Form.Group>

                        <button type="submit">Submit</button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}
