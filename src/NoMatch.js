import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

export const NoMatch = () => {
    return (
        <div>
            <h1>Loan</h1>

            {/* <Formik
                initialValues={{
                    loanamount: '',
                    LoanApplyDate: '',
                
                    RateofIntrest: '',
                    Duration: ''
                }}
                validationSchema={Yup.object().shape({
                    loanamount: Yup.string()
                        .required('Loan amount is required'),
                        LoanApplyDate: Yup.string()
                        .required(' is required'),
                        RateofIntrest: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                        Duration: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),

                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            /> */}





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
