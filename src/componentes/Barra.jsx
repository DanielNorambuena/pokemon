import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import React from 'react'

const Barra = () => {
    return (
        <Navbar className="navbar-dark bg-dark">
            <Container >
                <Navbar.Brand href="/">Pokemon</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className=''>
                        <NavLink
                            className={({ isActive }) => (isActive ? "viewActive" : "view")}
                            to="/" >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive ? "viewActive" : "view")}
                            to="/personajes" >
                            Pokemones
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Barra