import React from 'react';
import { Container } from 'react-bootstrap';


export const Layout = (props) => (
    <Container className="h-100">
        {props.children}
    </Container>
)
