import React from 'react';
<<<<<<< HEAD
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup'
=======
import { Card, Button, Row, Col, Form,Dropdown } from 'react-bootstrap';
import {Formik} from 'formik';
import * as yup from 'yup'
import styles from './Register.module.css'
>>>>>>> ddf273688d8689ed9c625c684db932d732ccd262

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



const schema = yup.object({
<<<<<<< HEAD
    namee: yup.string()
        .required("Name is a required field").matches(/^[a-zA-Z' ']+$/)
        .min(3, "Name must be at least 3 characters"),
    username: yup.string().required(),
    password: yup.string().required(),
    address: yup.string().required(),
    country: yup.string().required(),
    state: yup.string().required(),
    ida: yup.number().required(),
    email: yup.string().email().required(),
    contact: yup.string().required()
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "to short")
        .max(10, "to long"),
    dob: yup.date().max(new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)).required(),
    ac_type: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required(),
=======
    namee:yup.string()
    .required("Name is a required field").matches(/^[a-zA-Z' ']+$/,'Name should contain only characters and spaces')
    .min(3,"Name must be at least 3 characters"),
    username : yup.string().required("UserName is a required field"),
    password: yup.string().required("Password is a required field"),
    address: yup.string().required("Address is a required field"),
    country: yup.string().required("Country is a required field"),
  state: yup.string().required("State is a required field"),
  ida:yup.number()
  .positive("Must include positive numbers").required("Initial Deposit Amount is a required field"),
  email: yup.string().email().required("Email is a required field"),
  contact: yup.string().required("Contact is a required field")
  .matches(phoneRegExp, 'Phone number is not valid')
  .min(10, "too short")
  .max(10, "too long"),
  dob: yup.date().max(new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),"DOB cannot exceed yesterday's date")
  .required("DOB is a required field"),
  ac_type: yup.string().required("Account type must be selected"),
  zip: yup.string().required("Zip is a required field"),
  branch: yup.string().required("Branch name is a required field"),
  ipt: yup.string().required("Identification Proof Type is a required field"),
  idn: yup.string().required("Identification Document No. is a required field"),
  terms: yup.bool().required(),
>>>>>>> ddf273688d8689ed9c625c684db932d732ccd262
});

export const Register = () => {
    return (
        <Formik
<<<<<<< HEAD
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

                                            />
                                            {errors.namee && touched.namee ? (
                                                <div>{errors.namee}</div>
                                            ) : null}
                                            {/* <Form.Control.Feedback type="invalid">
                {errors.namee}
              </Form.Control.Feedback> */}
                                        </Form.Group>

                                        <Form.Group controlId="validationFormik02">
                                            <Form.Label><strong>Username</strong></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                name="username"
                                                value={values.username}
                                                onChange={handleChange}

                                            />
                                            {errors.username && touched.username ? (
                                                <div>{errors.username}</div>
                                            ) : null}

                                            {/* <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback> */}
                                        </Form.Group>

                                        <Form.Group controlId="validationFormik03">
                                            <Form.Label><strong>Password</strong></Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}

                                            />
                                            {errors.password && touched.password ? (
                                                <div>{errors.password}</div>
                                            ) : null}
                                        </Form.Group>

                                        <Form.Group controlId="validationFormik04">
                                            <Form.Label><strong>Address</strong></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Address"
                                                name="address"
                                                value={values.address}
                                                onChange={handleChange}

                                            />
                                            {errors.address && touched.address ? (
                                                <div>{errors.address}</div>
                                            ) : null}
                                        </Form.Group>

                                        <Form.Group controlId="validationFormik05">
                                            <Form.Label><strong>Country</strong></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Country"
                                                name="country"
                                                value={values.country}
                                                onChange={handleChange}

                                            />
                                            {/* <Form.Control.Feedback type="invalid">
                {errors.country}
              </Form.Control.Feedback> */}
                                            {errors.country && touched.country ? (
                                                <div>{errors.country}</div>
                                            ) : null}
                                        </Form.Group>

                                        <Form.Group controlId="validationFormik05">
                                            <Form.Label><strong>State</strong></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="State"
                                                name="state"
                                                value={values.state}
                                                onChange={handleChange}

                                            />
                                            {/* <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback> */}
                                            {errors.state && touched.state ? (
                                                <div>{errors.state}</div>
                                            ) : null}

                                        </Form.Group>

                                        <Form.Group controlId="validationFormik06">
                                            <Form.Label><strong>Email</strong></Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}

                                            />
                                            {errors.email && touched.email ? (
                                                <div>{errors.email}</div>
                                            ) : null}
                                        </Form.Group>

                                        <Form.Group controlId="validationFormik06">
                                            <Form.Label><strong>Contact No</strong></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Contact No"
                                                name="contact"
                                                value={values.contact}
                                                onChange={handleChange}

                                            />
                                            {errors.contact && touched.contact ? (
                                                <div>{errors.contact}</div>
                                            ) : null}
                                        </Form.Group>

                                        <Form.Group controlId="validationFormik07">
                                            <Form.Label><strong>Date of birth</strong></Form.Label>
                                            <Form.Control
                                                type="date"
                                                placeholder="Date of Birth"
                                                name="dob"
                                                value={values.dob}
                                                onChange={handleChange}

                                            />
                                            {errors.dob && touched.dob ? (
                                                <div>{errors.dob}</div>
                                            ) : null}
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

                                            />
                                            {errors.ida && touched.ida ? (
                                                <div>{errors.ida}</div>
                                            ) : null}
                                        </Form.Group>

                                        <Button variant="primary" type="submit"  href="http://localhost:3000/registerSucess">Register
                                            <i class="fa fa-pencil" aria-hidden="true"></i> 
=======
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
             //    isInvalid={!!errors.namee && touched.namee}
                
              />
 {errors.namee  && touched.namee? (
                                <div  className={styles.errorDiv}>{errors.namee}</div>
                            ) : null}
            
            </Form.Group>

            <Form.Group controlId="validationFormik02">
            <Form.Label><strong>Username</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
               //  isInvalid={!!errors.username  && touched.username}
              />
               {errors.username  && touched.username ? (
                                <div  className={styles.errorDiv}>{errors.username}</div>
                            ) : null}

            
            </Form.Group>

            <Form.Group controlId="validationFormik03">
            <Form.Label><strong>Password</strong></Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
              //   isInvalid={!!errors.password}
               
              />
              {errors.password  && touched.password? (
                                <div  className={styles.errorDiv}>{errors.password}</div>
                            ) : null}
            </Form.Group>

            <Form.Group controlId="validationFormik04">
            <Form.Label><strong>Address</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
                                // isInvalid={!!errors.address}

               
              />
              {errors.address  && touched.address ? (
                                <div  className={styles.errorDiv}>{errors.address}</div>
                            ) : null}
            </Form.Group>

            <Form.Group controlId="validationFormik05">
            <Form.Label><strong>Country</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                name="country"
                value={values.country}
                onChange={handleChange}
                                              // isInvalid={!!errors.country}

              />
            
                  {errors.country  && touched.country ? (
                                <div  className={styles.errorDiv}>{errors.country}</div>
                            ) : null}
            </Form.Group>

            <Form.Group controlId="validationFormik05">
            <Form.Label><strong>State</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                                                             // isInvalid={!!errors.state}

              />
              {/* <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback> */}
                  {errors.state  && touched.state  ? (
                                <div  className={styles.errorDiv}>{errors.state}</div>
                            ) : null}
              
            </Form.Group>

            <Form.Group controlId="validationFormik06">
            <Form.Label><strong>Email</strong></Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                                                // isInvalid={!!errors.email}

              />
              {errors.email  && touched.email ? (
                                <div  className={styles.errorDiv}>{errors.email}</div>
                            ) : null}
            </Form.Group>

            <Form.Group controlId="validationFormik06">
            <Form.Label><strong>Contact No</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact No"
                name="contact"
                value={values.contact}
                onChange={handleChange}
                                                // isInvalid={!!errors.contact}
              
              />
                {errors.contact   && touched.contact? (
                                <div  className={styles.errorDiv}>{errors.contact}</div>
                            ) : null}
            </Form.Group>

            <Form.Group controlId="validationFormik07">
            <Form.Label><strong>Date of birth</strong></Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of Birth"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                                                              // isInvalid={!!errors.dob}

              />
                     {errors.dob  && touched.dob  ? (
                                <div  className={styles.errorDiv}>{errors.dob}</div>
                            ) : null}
            </Form.Group>

            

           

            <Form.Group controlId="object9">
            <Form.Label><strong>Account type</strong></Form.Label>
                            <Form.Control as="select" name="ac_type"  value={values.ac_type}
                onChange={handleChange}>
                                
                                <option >salary</option>
                                <option selected>savings</option>
                            </Form.Control>
            </Form.Group>

            <Form.Group controlId="validationFormik091">
            <Form.Label><strong>Branch name</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Branch name"
                name="branch"
                value={values.branch}
                onChange={handleChange}
               // isInvalid={!!errors.ida}
             />
                {errors.branch  && touched.branch ? (
                                <div  className={styles.errorDiv}>{errors.branch}</div>
                            ) : null}
            </Form.Group>

            <Form.Group controlId="validationFormik09">
            <Form.Label><strong>Initial Deposit Amount</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Initial Deposit Amount"
                name="ida"
                value={values.ida}
                onChange={handleChange}
               // isInvalid={!!errors.ida}
             />
                {errors.ida  && touched.ida ? (
                                <div  className={styles.errorDiv}>{errors.ida}</div>
                            ) : null}
            </Form.Group>

            <Form.Group controlId="validationFormik092">
            <Form.Label><strong>Identification Proof Type</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Identification Proof Type"
                name="ipt"
                value={values.ipt}
                onChange={handleChange}
               // isInvalid={!!errors.ida}
             />
                {errors.ipt  && touched.ipt ? (
                                <div  className={styles.errorDiv}>{errors.ipt}</div>
                            ) : null}
            </Form.Group>

            
            <Form.Group controlId="validationFormik093">
            <Form.Label><strong>Identification Document No.</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Identification Document No."
                name="idn"
                value={values.idn}
                onChange={handleChange}
               // isInvalid={!!errors.ida}
             />
                {errors.idn  && touched.idn ? (
                                <div  className={styles.errorDiv}>{errors.idn}</div>
                            ) : null}
            </Form.Group>
                         
        



                            <Button variant="primary" type="submit">
                                <i class="fa fa-pencil" aria-hidden="true"></i> Register
>>>>>>> ddf273688d8689ed9c625c684db932d732ccd262
                            </Button>
                                    </Form>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row >


                )}



<<<<<<< HEAD
=======
        </Row >

          
           )}
        

                       
>>>>>>> ddf273688d8689ed9c625c684db932d732ccd262
        </Formik>
    )
}