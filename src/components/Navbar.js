import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

function NavbarDesign(props){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const linkStyle = {
        textDecoration : "none",
        color : "white"
    }

    return(
        <div>
            <Navbar color="dark" dark expand="md">
        <NavbarBrand style = {{color : "white"}} ><strong>SUPER</strong>Bolter</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink ><Link style = {linkStyle} to = "/images-without-data" >Images Without Data</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link style = {linkStyle} to = "/images-with-data"  >Images With Data</Link> </NavLink>
            </NavItem>     
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    )
}

export default NavbarDesign