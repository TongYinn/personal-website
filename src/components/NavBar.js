import React from 'react'
import "../components/NavBar.css";
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import resume from '../assets/Tong Yin Han - PM Resume S24.pdf'

const NavBar = () => {
  return (
    <Nav className='navBarContainer'>
        <NavItem>
            <Link className='link' to={""}>
                home
            </Link>
        </NavItem>
        <NavItem>
            <Link className='link' to={"/about"}>
                about
            </Link>
        </NavItem>
        <NavItem>
            <Link className='link' to={resume}>
                resume
            </Link>
        </NavItem>
    </Nav>
  );
};

export default NavBar;