import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./style/Navbar.css";
import { Icon, InlineIcon } from '@iconify/react';
import homeIcon from '@iconify-icons/fa-solid/home';
import iconfinderIcon from '@iconify-icons/simple-icons/iconfinder';
import { Menu,MenuItem } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import React from "react";
import AccountCircle from '@material-ui/icons/AccountCircle';
import firebase from "firebase";
import fire from './firebase'
import { useState } from "react";



const NavbarComponent = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [login,setLogin]=useState(0)
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    if(login==0)
    {
      OnSubmit()
    }
    else
    {
      onLogout()
    }
  };


  const OnSubmit = () => {
    
    // isLogin=true
    setLogin(1)
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        componentDidMount()
      })
      .catch((error) => {
       console.log(error)
       setLogin(0)
      });
  };



 const componentDidMount = () =>{
  firebase.auth().onAuthStateChanged(function(user){
      if(user){
         console.log('user login')
         console.log(user.displayName)
      }
      else{
         console.log('user logout')
      }
  }
  )
}



const onLogout = () =>{
  firebase.auth().signOut().then(() => {
      // Sign-out successful.
      componentDidMount()
      setLogin(0)
      // isLogin=false
    }).catch((error) => {
      // An error happened.
    });
    
}

  

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
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                {login==0 ? 
                  <MenuItem onClick={handleClose}>Sign-in</MenuItem>
                  : 
                  <MenuItem onClick={handleClose}>Sign-out</MenuItem>
                }
                
              </Menu>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

