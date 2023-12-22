import React from 'react'


import Container from 'react-bootstrap/Container';


import Navbar from 'react-bootstrap/Navbar';
import './Company.css'

import { Link } from 'react-router-dom';



const CompanyNavBar = () => {
  return (
    <div>
<>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" >
          <Container fluid>
            <Navbar.Brand href="/" style={{marginLeft:50}}><img alt='logo' style={{marginRight:50}} width={'150px'} src='https://upload.wikimedia.org/wikipedia/commons/9/98/Ador_Welding_logo.png'/>Welcome to <span style={{color:'red',fontWeight:'600'}}>Ador Traffic</span> ( Project Management Portal ) </Navbar.Brand>
        
          </Container>
        </Navbar>
        
      ))}
      
    </>




    </div>
  )
}

export default CompanyNavBar