import React from 'react';
import { Jumbotron, Container, CardGroup, Card, Row, Col } from 'react-bootstrap';

function RenderingPersons(resultMap){

    return(
        <>
        {
            resultMap.map((result,index) =>(
                
                <Col key={index} sm>
                    
                        <Card >
                            <Card.Img variant="top" src={result.picture}/>
                            <Card.Body>
                                <Card.Title>{result.name.first} {result.name.last}</Card.Title>
                                <Card.Text>
                                    {result.address} <br/>
                                    {result.email} <br/>
                                    {result.phone}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">{result.age} years old</small>
                            </Card.Footer>
                        </Card>
                    
                </Col>
                
            ))
        }
        </>
    );


}

export default function Persons(props){

    let listpersons = props.persons;

    return(
        <>
            <Jumbotron fluid>
                <Container fluid className="d-flex justify-content-center">
                    <h1 >Listing of Persons</h1>
                </Container>
            </Jumbotron>
            <Container fluid className="d-flex justify-content-center">
                <CardGroup>
                    <Row md={4}>
                    
                        {
                            RenderingPersons(listpersons)
                        }
                        
                    </Row>
                </CardGroup>
            </Container>
        </>
    )
}