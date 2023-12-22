import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaHome } from 'react-icons/fa'
import { BsPen } from 'react-icons/bs'
import { RxActivityLog } from 'react-icons/rx'


import { FcDownload } from 'react-icons/fc'
import { Link } from 'react-router-dom';
import './ProdNavBar.css'





const ProdNavBar = () => {

  const userdata=localStorage.getItem('firstname')
  return (
    <div>
<>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" >
          <Container fluid>
            <Navbar.Brand href="/productionhome" style={{marginLeft:50}}><img alt='logo' style={{marginRight:50}} width={'150px'} src='https://upload.wikimedia.org/wikipedia/commons/9/98/Ador_Welding_logo.png'/>Welcome to <span style={{color:'red',fontWeight:'600'}}>Ador Traffic</span> ( Project Management Portal ) </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Hii, {userdata}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className='links' to={"/productionhome"}><FaHome/> Home</Link>

                
                
                  <Link to= {"/productionhome/oaentry"} className='links' ><BsPen/> Add New Order Acceptance Entry</Link>
                  <Link className='links' to={"/productionhome/wppplan"}><RxActivityLog/> Plan WPP</Link>
                  <NavDropdown 
                   title="Download" 
                    id={`offcanvasNavbarDropdown-expand-${expand} `}
                  >
                    <Link className='links' to={'/'} ><NavDropdown.Item ><FcDownload/>QR Code</NavDropdown.Item></Link>
                    <NavDropdown.Item ><Link className='links' to={'/productionhome/warrantycard'} ><FcDownload/>
                      Warranty Card</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    <FcDownload/> Product Manuals
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      
    </>




    </div>
  )
}

export default ProdNavBar