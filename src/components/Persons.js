import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export default function Persons(props){

    console.log(props);

    return(
        <>
            <Jumbotron fluid>
                <Container className="d-flex justify-content-center">
                    <h1 >Listing of Persons</h1>
                </Container>
            </Jumbotron>
        </>
    )
}