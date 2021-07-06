import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './style/Navbar.css'
const NavbarComponent = () => {

    return (
          
            <Navbar variant="dark" className="nav-body" expand="lg">
                <LinkContainer to="/home">
                    <Navbar.Brand href="#home">VEDIC MATHS🌿</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <LinkContainer to="/home">
                            <Nav.Link className="ml-3 mr-3">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link className="ml-3 mr-3">About Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
     
    );
}

export default NavbarComponent;