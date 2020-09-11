import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap'
import { Navbar, Nav } from 'react-bootstrap';

import { Formik } from 'formik';
import * as yup from 'yup'

const schema = yup.object({
    AccountNumber: yup.string()
        .required().max(12,"Account number must be 12 digites"),

        DepositAmount: yup.string().required(),
       

});

export const Deposit = () => {
    return (
        <div>
            <h1>Deposit</h1>
            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{

                    AccountNumber: '',
                    DepositAmount: ''
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
                                <Form.Label><strong>Account type</strong></Form.Label>
                                <Form.Control as="select" custom>
                                    <option>Select</option>
                                    <option>Personal Account</option>
                                    <option>Salary Account</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="accountnumber">
                                <Form.Label><strong>Account Number</strong></Form.Label>
                                <Form.Control
                                 type="number" 
                                 placeholder="Enter Account Number"
                                name="AccountNumber"
                                value={values.AccountNumber}
                                onChange={handleChange}

                            />
                            {errors.AccountNumber && touched.AccountNumber? (
                                <div>{errors.AccountNumber}</div>
                            ) : null}

                            </Form.Group>

                            <Form.Group controlId="formDepositeamount" >
                                <Form.Label><strong>Deposite Amount</strong></Form.Label>
                                <Form.Control  type="number" 
                                 placeholder="Enter Deposite Amount"
                                name="DepositAmount"
                                value={values.DepositAmount}
                                onChange={handleChange}

                            />
                            {errors.DepositAmount && touched.DepositAmount? (
                                <div>{errors.DepositAmount}</div>
                            ) : null}
                    
                            </Form.Group>





                            <Button variant="primary" type="submit">
                                Deposit
                            </Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button type="primary" key="console" shape="round" href="http://localhost:3000/loan">
                                Loan
        </Button>
                        </Form>

                    )}

            </Formik>

        </div>
    )
}
