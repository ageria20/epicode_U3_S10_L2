import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import {useState, useEffect} from 'react'


const MyNav = props => {

  


return (
  <Navbar
    expand="lg"
    className="bg-body-tertiary mb-3"
    bg="dark"
    data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
          
          <NavDropdown.Item href="#">{category}</NavDropdown.Item>
        </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MyNav
