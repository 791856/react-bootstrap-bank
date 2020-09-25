
import React from 'react';
import {configure,shallow,mount} from 'enzyme';
import { Formik } from 'formik';
import Adapter from 'enzyme-adapter-react-16'
import  Register  from './Register';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';


configure({ adapter: new Adapter() });

describe('<Register/>',()=>{
  let wrapper;
  const loginView = mount(<Register />);
  beforeEach(()=>{
     wrapper=shallow(<Register />);
  })
  it("contains Address field", () => {
   
    //expect(wrapper.find(Form)).toHaveLength(1);
    loginView.find(Form).find(Form.Group).find(Form.Label).find('Address').debug()

  });

 
})


