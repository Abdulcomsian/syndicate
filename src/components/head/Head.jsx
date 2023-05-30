import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../Group 176.png";
import './head.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Head = () => {
  return (
    <>


      <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className='logo-img' src={logo} alt="logo" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#one-1" style={{color: "white" }} >Za nas</Nav.Link>
          <Nav.Link href="#two"  style={{color: "white" }}>Paketi</Nav.Link>
            <Nav.Link href="#three"  style={{color: "white" }}>Prosli tiketi</Nav.Link>
            <Nav.Link href="#four"  style={{color: "white"}}>Kladionice</Nav.Link>
            <Nav.Link href="#five"  style={{color: "white"}}>Metodi Placanja</Nav.Link>
            <Nav.Link href="#newtwo"  style={{color: "white"}}>Kontakt</Nav.Link>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      
    </>
  )
}

export default Head