import React from 'react';
import { Card, Button, Row, Col, Form,Dropdown } from 'react-bootstrap';
import {Formik} from 'formik';
import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



const schema = yup.object({
    namee:yup.string()
    .required("Name is a required field").matches(/^[a-zA-Z' ']+$/)
    .min(3,"Name must be at least 3 characters"),
    username : yup.string().required(),
    password: yup.string().required(),
    address: yup.string().required(),
    country: yup.string().required(),
  state: yup.string().required(),
  ida:yup.number().required(),
  email: yup.string().email().required(),
  contact: yup.string().required()
  .matches(phoneRegExp, 'Phone number is not valid')
  .min(10, "to short")
  .max(10, "to long"),
  dob: yup.date().max(new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)).required(),
  ac_type: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required(),
});

export const Register = () => {
    return (
        <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
         
          lastName: 'Otto'
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
        <Row className="h-100 justify-content-center align-items-center p-5" >
        <Col md="5">
            <Card>
                <Card.Header className="bg-primary text-white">
                    <Card.Title className="text-center"><strong>User Registration</strong></Card.Title>
                </Card.Header>
                <Card.Body>
                   
        <Form noValidate onSubmit={handleSubmit}>
          
        <Form.Group controlId="validationFormik01">
              <Form.Label><strong>Name</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="namee"
                value={values.namee}
                onChange={handleChange}
                isInvalid={!!errors.namee}
              />

              <Form.Control.Feedback type="invalid">
                {errors.namee}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik02">
            <Form.Label><strong>Username</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
              />

              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik03">
            <Form.Label><strong>Password</strong></Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik04">
            <Form.Label><strong>Address</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik05">
            <Form.Label><strong>Country</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                name="country"
                value={values.country}
                onChange={handleChange}
                isInvalid={!!errors.country}
              />
              <Form.Control.Feedback type="invalid">
                {errors.country}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik05">
            <Form.Label><strong>State</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik06">
            <Form.Label><strong>Email</strong></Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik06">
            <Form.Label><strong>Contact No</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact No"
                name="contact"
                value={values.contact}
                onChange={handleChange}
                isInvalid={!!errors.contact}
              />
              <Form.Control.Feedback type="invalid">
                {errors.contact}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik07">
            <Form.Label><strong>Date of birth</strong></Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of Birth"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                isInvalid={!!errors.dob}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dob}
              </Form.Control.Feedback>
            </Form.Group>

            

           

            <Form.Group controlId="object9">
            <Form.Label><strong>Account type</strong></Form.Label>
                            <Form.Control as="select" custom>
                                <option>Select</option>
                                <option>salary</option>
                                <option>savings</option>
                            </Form.Control>
            </Form.Group>

            <Form.Group controlId="validationFormik09">
            <Form.Label><strong>Initial Deposit Amount</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Initial Deposit Amount"
                name="ida"
                value={values.ida}
                onChange={handleChange}
                isInvalid={!!errors.ida}
              />
              <Form.Control.Feedback type="invalid">
                {errors.ida}
              </Form.Control.Feedback>
            </Form.Group>
                         
        



                            <Button variant="primary" type="submit">
                                <i class="fa fa-pencil" aria-hidden="true"></i> Register
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>

            </Col>

        </Row >

          
           )}
        

                       
        </Formik>
    )
}
