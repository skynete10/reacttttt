import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class NavBAR extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href=""></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="Nav_link" to="/">Home </Link>
                            <Link className="Nav_link" to="/List">List </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBAR ;