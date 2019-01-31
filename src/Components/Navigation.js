import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import {Link, Route, Switch} from 'react-router-dom';

export default function Navigation () {
    return (
       <div>
     <Navbar color="dark" light expand="md">
        <NavbarBrand href="/"><Link to="/Home">Star Wars</Link></NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="g-auto" navbar>
            <NavItem>
              <NavLink><Link to="/Home"></Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/Films">Films</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/Characters">Characters</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/Planets">Planets</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/Vehicles">Vehicles</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/Naves">Spaceships</Link></NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
       </div>
    )
}

