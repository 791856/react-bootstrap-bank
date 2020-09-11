 import React from 'react';
 import { Card, Button, Row, Col, Form } from 'react-bootstrap';

 export const RegisterSucess = () => {
    return (
      <div className="row justify-content-center">
        <div className="col-10 col-sm-7 col-md-5 col-lg-4">
          <p>
           Registration Sucessfully Done
          </p>
          <p>
            Thanks for register, please login now
          </p>
        <Button type="primary" key="console" shape="round" href="http://localhost:3000">
            Login
        </Button>
        </div>
      </div>
    );
  }