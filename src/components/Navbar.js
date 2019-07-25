import React, {Component} from 'react';

import Button from "@material-ui/core/Button";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from "react-bootstrap/es/FormControl";
import {Link} from "react-router-dom";



class HeadNavbar extends Component{


    render() {

        return (
            <Navbar className="navbar-form navbar-fixed-top" bg="light" expand="lg">
                <Navbar.Brand><Link to="">Buzzlink</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/venues" className="link">Venues</Link></Nav.Link>
                        <Nav.Link><Link to="/artists" className="link">Artists</Link></Nav.Link>
                        <NavDropdown title="About Us" id="basic-nav-dropdown">
                            <NavDropdown.Item to="">Buzzing feeds</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item to="">Team</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="mr-sm-1">
                        <Nav.Link><Link to="" className="link">Login</Link></Nav.Link>
                        <Nav.Link><Link to="" className="link">Sign Up</Link></Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default HeadNavbar;

