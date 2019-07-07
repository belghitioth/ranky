import React, {Component} from 'react';

import Button from "@material-ui/core/Button";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from "react-bootstrap/es/FormControl";



class HeadNavbar extends Component{


    render() {

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Buzzlink</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/venues">Venues</Nav.Link>
                        <Nav.Link href="/artists">Artists</Nav.Link>
                        <NavDropdown title="About Us" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Buzzing feeds</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">Team</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="mr-sm-1">
                        <Nav.Link href="">Login</Nav.Link>
                        <Nav.Link href="">Sign Up</Nav.Link>
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
