import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home" style={{color: "White"}}>VEDIC MATH 🌿</Navbar.Brand>
                    {/* <LinkContainer to="/home"> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            {/* <LinkContainer to="/home">
                               
                            </LinkContainer> */} 
                            <Nav.Link className="ml-3 mr-3" style={{color: "White"}}>Home</Nav.Link>
                            <Nav.Link className="ml-3 mr-3" style={{color: "White"}}>About </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                {/* </LinkContainer> */}
            </Navbar>
        </div>
    )
}

export default NavbarComponent
