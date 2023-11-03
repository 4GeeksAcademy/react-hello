import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import PropTypes from 'prop-types';

const  NavbarComponent = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{props.badge}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {props.buttons.map((btnName, i) =>
              <Nav.Link href={"#"+btnName.toLowerCase()} key={i}>{btnName}</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  )
};

NavbarComponent.propTypes = {
  badge: PropTypes.string,
  buttons: PropTypes.array
};

export default NavbarComponent;