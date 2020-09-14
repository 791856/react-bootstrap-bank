import React,{Component} from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup'

class Register extends Component{
    state={value:'',
age:''}
  
 
   handleChange(event) {
       let dt=event.target.value;
       let split_dob = dt.split("-");
let month = split_dob[1];
let day = split_dob[2];
let year = split_dob[0];
let dob_asdate = new Date(year, month, day);
let today = new Date();
let mili_dif = Math.abs(today.getTime() - dob_asdate.getTime());
let age = (mili_dif / (1000 * 3600 * 24 * 365.25));
       console.log('dob');
       console.log(dt);
       console.log('age');
       console.log(age);
     this.setState({value:event.target.value});
     (age<18)?this.setState({age:'Minor'}):((age>18 && age <=60)?this.setState({age:'Normal'})
     :this.setState({age:'Senior'}))
    
   }
  
     render(){

        console.log(this.state.value)
        console.log(this.state.age)
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



const schema = yup.object({
    namee: yup.string()
        .required("Name is a required field").matches(/^[a-zA-Z' ']+$/)
        .min(3, "Name must be at least 3 characters"),
    username: yup.string().required(),
    password: yup.string().required(),
    address: yup.string().required(),
    country: yup.string().required(),
    state: yup.string().required(),
    ida: yup.number().required().positive('Only positive numbers allowed'),
    email: yup.string().email().required(),
    contact: yup.string().required()
        .matches(/^[0-9]+$/, 'Phone number is not valid')
        .min(10, "too short")
        .max(10, "too long"),
    dob: yup.date().max(new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)).required(),
    ac_type: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required(),
});


    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                namee:'',
                username:'',
                password:'',
                address:'',
                country:'',
                state:'',
                ida:'',
                email:'',
                contact:'',
                dob:'',
                ac_type:'',
                zip:''



                
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
                                               // value={values.dob}
                                                onChange={handleChange}
                                                 value={this.state.value}
                                                 onChange={this.handleChange.bind(this)}
                                            />
                                            {errors.dob && touched.dob ? (
                                                <div>{errors.dob}</div>
                                            ) : null}
                                        </Form.Group>
  {(this.state.value!=='')?<div style={{color:'green'}}>{this.state.age}</div>:null}





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

                                        <Button variant="primary" type="submit"  >Register
                                            <i class="fa fa-pencil" aria-hidden="true"></i> 
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
}

export default Register;
