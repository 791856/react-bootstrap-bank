import React from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

import { Formik } from 'formik';
import * as yup from 'yup'

const schema = yup.object({
    Anualincome: yup.string()
        .required(),
    CompanyName: yup.string()
    .required()

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
                            {/* href="http://localhost:3000/sucess */}
                                ApplyForPersonalLoan
                            </Button>
                        </Form>

                    )}

            </Formik>

        </div>
    )
}
