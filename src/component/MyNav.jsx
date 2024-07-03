import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const MyNav = props => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={() => props.handleCategories("fantasy")}>
                Fantasy
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => props.handleCategories("history")}>
                History
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => props.handleCategories("horror")}>
                Horror
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => props.handleCategories("romance")}>
                Romance
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => props.handleCategories("scifi")}>
                SciFi
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
