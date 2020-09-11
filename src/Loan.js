import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap'
import props from 'prop-types';
import { personal } from './components/PersonalLoan';
import { validation } from './components/Velidation';
import { Formik } from 'formik';
import * as yup from 'yup'

const loanschema = yup.object({
    loanamount: yup.string()
        .required("Loan Amount is a required field")
        .min(3, "Loan Aamount must be at least 3 number"),
    rateofintrest: yup.string().required().matches('rate of intrest should not be more then 10%'),
    duration: yup.string().required().matches("duration date should not be  start from the current date")
})

export const Loan = () => {
    return (
        <div>
            <h1>Loan</h1>
            <Formik
                validationSchema={loanschema}
                onSubmit={console.log}
                initialValues={{
                    loanamount: '',
                    rateofintrest: '',
                    duration: '',
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                        <Form noValidate onSubmit={handleSubmit}>
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
                                <Form.Control placeholder=" Please Enter loan amount here "
                                    type="number"
                                    name="loanamount"
                                    value={values.loanamount}
                                    onChange={handleChange}
                                />
                                {errors.loanamount && touched.loanamount ? (
                                    <div>{errors.loanamount}</div>
                                ) : null}
                            </Form.Group>

                            <Form.Group controlId="LoanApplyDate">
                                <Form.Label><strong>Loan Apply Date</strong></Form.Label>
                                <Form.Control type="LoanApplyDate" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="RateofIntrest">
                                <Form.Label><strong>Rate of intrest</strong></Form.Label>
                                <Form.Control placeholder="Enter the rate of intrest "
                                    type="number"
                                    name="RateofIntrest"
                                    value={values.rateofintrest}
                                    onChange={handleChange}
                                />
                                {errors.rateofintrest && touched.rateofintrest ? (
                                    <div>{errors.rateofintrest}</div>
                                ) : null}
                            </Form.Group>

                            <Form.Group controlId="DurationOfTimePeriod">
                                <Form.Label><strong>Duration of Time period</strong></Form.Label>
                                <Form.Control
                                    placeholder=" Please Enter loan amount here "
                                    type="number"
                                    name="DurationOfTimePeriod"
                                    value={values.duration}
                                    onChange={handleChange}
                                />
                                {errors.duration && touched.duration ? (
                                    <div>{errors.duration}</div>
                                ) : null}

                            </Form.Group>
                            <Button variant="primary" type="submit">
                                <i class="fa fa-pencil" aria-hidden="true"></i> ApplyForLoan
                            </Button>
                        </Form>
                    )}
            </Formik>
        </div>
    )
}
