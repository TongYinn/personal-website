import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import resume from '../assets/Tong Yin Han - PM Resume S24.pdf'

const NavBar = () => {
  return (
    <Nav>
        <NavItem>
            <Link to={""}>
                home
            </Link>
        </NavItem>
        <NavItem>
            <Link to={"/about"}>
                about
            </Link>
        </NavItem>
        <NavItem>
            <Link to={resume}>
                resume
            </Link>
        </NavItem>
    </Nav>
  );
};

export default NavBar;