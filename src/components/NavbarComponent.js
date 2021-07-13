import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./style/Navbar.css";
import { Icon, InlineIcon } from '@iconify/react';
import homeIcon from '@iconify-icons/fa-solid/home';
import iconfinderIcon from '@iconify-icons/simple-icons/iconfinder';


const NavbarComponent = () => {
  return (
    <Navbar variant="dark" className="nav-body" expand="lg">
      <LinkContainer to="/home">
        <Navbar.Brand href="#home">VEDIC MATHS🌿</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto d-flex flex-row" style={{fontWeight:"bold"}}>
        
          <LinkContainer to="/home">
         
            <Nav.Link className="ml-3 mr-3"><Icon icon={homeIcon} /> Home</Nav.Link>
           
          </LinkContainer>
         
          <LinkContainer to="/about">
            
            <Nav.Link className="ml-3 mr-3"><Icon icon={iconfinderIcon} /> About Vedic </Nav.Link>
          </LinkContainer>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

