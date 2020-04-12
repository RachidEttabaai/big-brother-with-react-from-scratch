import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export default function Home(){

    return(
        <>
            <Jumbotron fluid>
                <Container className="d-flex justify-content-center">
                    <h1>Welcome to the chasing database</h1>
                </Container>
            </Jumbotron>
        </>
    )
}