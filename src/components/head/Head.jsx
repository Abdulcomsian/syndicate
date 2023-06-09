import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
          <Nav className="ms-auto gap-3">
          <Nav.Link href="#Za-nas" style={{color: "white", fontFamily: 'rubik' }} >  Za nas  </Nav.Link>
          <Nav.Link href="#Paketi"  style={{color: "white" , fontFamily:'rubik' }}>Paketi</Nav.Link>
            <Nav.Link href="#Prosli-tiketi"  style={{color: "white", fontFamily:'rubik' }}>Prosli tiketi</Nav.Link>
            <Nav.Link href="#Kladionice"  style={{color: "white" , fontFamily:'rubik'}}>Kladionice</Nav.Link>
            <Nav.Link href="#Metodi-Placanja"  style={{color: "white" , fontFamily:'rubik'}}>Metodi Placanja</Nav.Link>
            <Nav.Link href="#Kontakt"  style={{color: "white" , fontFamily:'rubik'}}>Kontakt</Nav.Link>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      
    </>
  )
}

export default Head