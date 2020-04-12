import React from 'react';
import getDatas from "./components/Datas";
import Persons from "./components/Persons";
import MappingPersons from "./components/MappingPersons";
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export default function App(){

    return(
        <>
            <Router>

            <Navbar expand="lg" className="justify-content-center">
                <Navbar.Brand><Link to="/">Chasing</Link></Navbar.Brand>
                <Navbar>
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/personlists">Listing Persons</Nav.Link>
                    <Nav.Link as={Link} to="/mappingpersons">Mapping Persons</Nav.Link>
                    </Nav>
                </Navbar>
            </Navbar>
                
                <Switch>
                    <Route exact path="/personlists">
                        <Persons persons={getDatas()}/>
                    </Route>
                    <Route path="/mappingpersons">
                        <MappingPersons persons={getDatas()}/>
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            
            </Router>
        </>
    );

}