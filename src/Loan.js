import React, { Component } from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap'
import props from 'prop-types';
import { personal } from './components/PersonalLoan';
import { validation } from './components/Velidation';
import { Formik } from 'formik';
import * as yup from 'yup'
import { Education } from './EducationLoan'
import { PersonalLoan } from './PersonalLoan'


const DurationRegExp =  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

class Loan extends Component {
    state = { value: 'select' }

    TDate() {
        var UserDate = document.getElementById("LoanApplyDate").value;
        console.log("hi", UserDate);

        var ToDate = new Date();
        console.log("hi1", ToDate);

        if (new Date(UserDate).getTime() <= ToDate.getTime()) {
            alert("The Date must be Bigger or Equal to today date");
            return false;
        }
        return true;
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state.value)
    }

    render() {
        let loanschema = yup.object({
            loanamount: yup.string()
                .required("Loan Amount is a required field")
                .min(3, "Loan Aamount must be at least 3 number"),
            rateofintrest: yup.string().required().matches('rate of intrest should not be more then 10%'),
            duration: yup.string().required()
                .matches(DurationRegExp, 'Duration is  valid')
                .min(5, "Duration of loan min 5 yers") 
                .max(20, "Duration of loan should not be max 20 year"),
            AccountHolder: yup.string().required(),
            LoanApplyDate: yup.date().required(),
            LoanEndDate: yup.date().required(),
        })
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
                        AccountHolder: '',
                        LoanApplyDate: '',
                        LoanEndDate: '',

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
                                    <Form.Control as="select" defaultValue={this.state.value} value={this.state.value} onChange={this.handleChange.bind(this)} custom>

                                        <option value="select">select</option>
                                        <option value="personal">personal Loan</option>
                                        <option value="educational">educational Loan</option>

                                    </Form.Control>
                                </Form.Group>
                                {(this.state.value === 'educational') ? <Education /> : ((this.state.value === 'personal') ? <PersonalLoan /> : (<div>
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

                                    <Form.Group controlId="Account Holder Name">
                                        <Form.Label><strong>Account Holde Name</strong></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter account Holder "
                                            name="rateofintrest"
                                            value={values.AccountHolder}
                                            onChange={handleChange}
                                        />
                                        {errors.AccountHolder && touched.AccountHolder ? (
                                            <div>{errors.rateofintrest}</div>
                                        ) : null}
                                    </Form.Group>

                                    <Form.Group controlId="LoanApplyDate">
                                        <Form.Label><strong>Loan Apply Date</strong></Form.Label>
                                        <Form.Control
                                            type="date"
                                            placeholder="Loan Apply Date"
                                            name="LoanApplyDate"
                                            onchange="TDate()"
                                        />

                                        {/* if(values.to.before(values.from) {
                                            errors.from = 'Must be before'
                                        } */}
                                        {errors.LoanApplyDate && touched.LoanApplyDate ? (
                                            <div>{errors.LoanApplyDate}
                                             {errors.from = 'Must be before Current Date'}
                                            </div>
                                        ) : null}


                                    </Form.Group>
                                    <Form.Group controlId="LoanApplyEndDate">
                                        <Form.Label><strong>Loan Apply Date</strong></Form.Label>
                                        <Form.Control
                                            type="date"
                                            placeholder="Loan Apply End Date"
                                            name="LoanApplyDate"
                                        />
                                        {errors.LoanEndDate && touched.LoanEndDate ? (
                                            <div>{errors.LoanEndDate}</div>
                                        ) : null}

                                    </Form.Group>

                                    <Form.Group controlId="RateofIntrest">
                                        <Form.Label><strong>Rate of intrest</strong></Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter rate of Intrest "
                                            name="rateofintrest"
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
                                            type="number"
                                            placeholder=" Please Enter loan amount here "
                                            name="duration"
                                            value={values.duration}
                                            onChange={handleChange}
                                        />
                                        {errors.duration && touched.duration ? (
                                            <div>{errors.duration}</div>
                                        ) : null}

                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        <i class="fa fa-pencil" aria-hidden="true"></i> ApplyForLoan
                            </Button></div>))}
                            </Form>
                        )}
                </Formik>
            </div>
        )
    }


}
export default Loan;