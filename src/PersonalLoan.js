import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

import { Formik, yupToFormErrors } from 'formik';
import * as yup from 'yup'

const schema = yup.object({
    Anualincome: yup.string()
        .required(),
    CompanyName: yup.string()
    .required(),
    Designation: yup.string()
    .required(),
    TotalExp:  yup.string()
    .required(),
    ExpwithCurrentCompany : yup.string()
    .required(),

});

export const PersonalLoan = () => {
    return (
        <div>
            <h1>Personal Loan</h1>

            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{

                    Anualincome: '',
                    CompanyName: '',
                    Designation: '',
                    TotalExp:    '',
                    ExpwithCurrentCompany: '',
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

                            <Form.Group controlId="Anualincome">
                                <Form.Label><strong>Anual income</strong></Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Annul income "
                                    name="Anualincome"
                                    value={values.Anualincome}
                                    onChange={handleChange}

                                />
                                {errors.Anualincome && touched.Anualincome ? (
                                    <div>{errors.Anualincome}</div>
                                ) : null}

                            </Form.Group>

                            <Form.Group controlId="CompanyName">
                                <Form.Label><strong>Company Name </strong></Form.Label>
                                <Form.Control 
                               type="number"
                               placeholder="Enter Company Name"
                               name="CompanyName"
                               value={values.CompanyName}
                               onChange={handleChange}

                           />
                           {errors.CompanyName && touched.CompanyName ? (
                               <div>{errors.CompanyName}</div>
                           ) : null}

                            </Form.Group>

                            <Form.Group controlId="Designation">
                                <Form.Label><strong>Designation </strong></Form.Label>
                                <Form.Control 
                                
                                type="number" 
                                placeholder="Enter Account Designation"
                               name="AccountNumber"
                               value={values.Designation}
                               onChange={handleChange}

                           />
                           {errors.Designation && touched.Designation? (
                               <div>{errors.Designation}</div>
                           ) : null}
                            </Form.Group>

                            <Form.Group controlId="TotalExp">
                                <Form.Label><strong>Total exp</strong></Form.Label>
                                <Form.Control 
                                type="number" 
                                placeholder="Enter Total Exp"
                               name="AccountNumber"
                               value={values.TotalExp}
                               onChange={handleChange}

                           />
                           {errors.TotalExp && touched.TotalExp? (
                               <div>{errors.TotalExp}</div>
                           ) : null}
                           
                        
                            </Form.Group>

                            <Form.Group controlId="ExpwithCurrentCompany">
                                <Form.Label><strong>ExpWithCurrentCompany </strong></Form.Label>
                                <Form.Control 
                                
                                type="number" 
                                placeholder="Enter Total Exp in Current Company"
                               name="AccountNumber"
                               value={values.ExpwithCurrentCompany}
                               onChange={handleChange}

                           />
                           {errors.ExpwithCurrentCompany && touched.ExpwithCurrentCompany? (
                               <div>{errors.ExpwithCurrentCompany}</div>
                           ) : null}
                            </Form.Group>
                            
                            <Button variant="primary" type="submit">
                            {/* href="http://localhost:3000/sucess */}
                                ApplyForPersonalLoan
                            </Button>
                        </Form>

                    )}

            </Formik>

        </div>
    )
}
