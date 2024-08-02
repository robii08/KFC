import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircleUser,faArrowRightLong,faXmark } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import line from "../images/line.png"
import bucket from "../images/bucket.png"
import b1 from "../images/b1.png"
import b2 from "../images/b2.png"
import kfc from "../images/kfcLogo.svg"

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar fixed="top" expand="lg" className="p-md-3 sticky-top" style={{backgroundColor:"white"}}>
          
          <Container>
            <Nav.Item>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow}/>
              <Navbar.Collapse id="basic-navbar-nav" >
                <Offcanvas show={show} onHide={handleClose} style={{ width:"100%", backgroundColor:"white"}}>
                  <div className="container-fluid d-flex justify-content-between border">
                    <FontAwesomeIcon icon={faXmark} className='text-light fs-4 ms-2 mt-3'onClick={handleClose}/>
                    <img src={line} alt="" width={'85px'} height={'65px'}/>
                    <img src={bucket} alt="" className='me-md-4' height={'50px'}/>
                  </div>
                  <Offcanvas.Body>
                    <h2 className='text-light'>LET'S GET</h2>
                    <h2 className='text-light mb-3'>COOKIN'</h2>
                    <Link to={''} className='text-decoration-none text-light'><p><FontAwesomeIcon icon={faCircleUser} className='me-2'/>Sign in / Sign up <FontAwesomeIcon icon={faArrowRightLong} className='ms-1' /></p></Link>
                    <div className='d-flex justify-content-between align-items-center px-4 py-2 my-4' style={{backgroundColor:"whitesmoke"}}>
                      <p className='text-light fw-bold' style={{fontSize:"14px"}}>MENU</p>
                      <img src={b1} alt="" width={'120px'} height={'100px'} />
                    </div>
                    <div className='d-flex justify-content-between align-items-center px-4 py-2 my-4' style={{backgroundColor:"whitesmoke"}}>
                      <p className='text-light fw-bold' style={{fontSize:"14px"}}>DEALS</p>
                      <img src={b2} alt="" width={'120px'} height={'100px'} />
                    </div>
                    <div className='px-4 py-4 my-4' style={{backgroundColor:"whitesmoke"}}>
                      <p className='text-light pb-4' style={{fontSize:"14px"}}>Get Help</p>
                      <p className='text-light pb-4' style={{fontSize:"14px"}}>Contact Us</p>
                      <p className='text-light pb-4' style={{fontSize:"14px"}}>KFC Feedback</p>
                      <p className='text-light pb-4' style={{fontSize:"14px"}}>Privacy Policy</p>
                    </div>

                  </Offcanvas.Body>
                </Offcanvas>
              </Navbar.Collapse>
            </Nav.Item>
            <Nav.Item className='me-auto ms-auto ms-md-0'>
                <Navbar.Brand className='ms-4'><img src={kfc} alt="" className='mx-4 text-light'/></Navbar.Brand>
                <Link to={'/'} className='text-decoration-none'><Navbar.Brand className='fw-medium display' style={{fontSize:"15px"}}>Menu</Navbar.Brand></Link>
                <Link to={'/'} className='text-decoration-none'><Navbar.Brand className='fw-medium ms-4 display' style={{fontSize:"15px"}}>Deals</Navbar.Brand></Link>
            </Nav.Item>
          
          
            <Nav.Item className='d-flex ms-auto'>
              <Navbar.Brand className='mt-md-3 fw-bolder display border-end pe-3'  style={{fontSize:"15px"}} >
                  <Link to={'/'} className='text-decoration-none text-light'><FontAwesomeIcon icon={faCircleUser} className='me-2'/>Sign in</Link>
              </Navbar.Brand>
              <Navbar.Brand href="/" className='me-md-4 d-flex'>
                  
                    <p className='me-2 mt-3'  style={{fontSize:"15px"}}>₹0</p> 
                    <Link to={'/'}><img src={bucket} alt="" className='me-md-4' height={'50px'}/> </Link>
                  
              </Navbar.Brand>  
            </Nav.Item>             
          </Container>
          
        
      </Navbar>
    </>
  )
}

export default Header