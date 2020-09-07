 import React from 'react';
 import { Card, Button, Row, Col, Form } from 'react-bootstrap';

 export const Sucess = () => {
    return (
      <div className="row justify-content-center">
        <div className="col-10 col-sm-7 col-md-5 col-lg-4">
          <p>
            Registration successful. You are now Approved loan.
          </p>
          <p>
            Thanks for signing up!
          </p>

          <Button type="primary" key="console" shape="round" href="http://localhost:3000/">
          Return Home
        </Button>
        </div>
      </div>
    );
  }