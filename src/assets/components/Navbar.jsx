import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavbarDisplay() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img className="navbar-logo" src="./src/assets/img/nativa-panama.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Artesanías</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Vestimenta</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Joyería</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Escultura</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Juegos tradicionales</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Arte Corporal</NavDropdown.Item>
              <NavDropdown.Item href="#action9">Instrumentos Musicales</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Usar mx-auto para centrar el Form */}
          <Form className="d-flex mx-auto" style={{ maxWidth: "400px" }}>
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button className="loginButton" variant="btn btn-dark">
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDisplay;