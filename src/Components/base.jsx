import React, { children } from 'react'
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMarker, faTrashCan, faBook, faUserTie, faLocation, faLocationArrow,
  faLocationCrosshairs, faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import { Row, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Base({ children }) {
  return (
    <>
      <Navbar
        collapseOnSelect expand="lg" bg="warning" data-bs-theme="light"
      >
        <Container   >
          <Navbar.Brand href="/" style={{ marginRight: "20px" }}><FontAwesomeIcon icon={faBook} /> LIBRARY</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">


            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>

              <NavDropdown title="Admin" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/addbook">Add book</NavDropdown.Item>
                <NavDropdown.Item href="/user">Users Data</NavDropdown.Item>



              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Row>{children}</Row>
    </>
  );
}

export default Base;