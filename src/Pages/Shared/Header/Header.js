import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

import logo from '../../../images/logo.png';

const Header = () => {

    return (
        <Navbar bg="light" variant="light" fixed="top">
            <Container className="navbar-container">
                <img style={{ width: '48px', padding: '4px' }} src={logo} alt="" />
                <Nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/doctors">Doctors</NavLink>
                    <NavLink to="/about">About</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;