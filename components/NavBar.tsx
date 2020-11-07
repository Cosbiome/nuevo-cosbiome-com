import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Navbar.Brand href="#home">
        <img
          alt="logo-cosbiome"
          src="https://firebasestorage.googleapis.com/v0/b/portafolio-c8c78.appspot.com/o/COSBIOME%20PNG_altaresoluci%C3%B3n.png?alt=media&token=79bf0fc7-8af9-4f70-af62-32b188b2bbf8"
          width="200px"
          height="25vh"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features">Cursos</Nav.Link>
          <Nav.Link href="#pricing">Productos</Nav.Link>
          <NavDropdown title="Equipos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features">Escuela</Nav.Link>
          <Nav.Link href="#features">Contacto</Nav.Link>
          <Nav.Link href="#features">Aviso de Privacidad</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
