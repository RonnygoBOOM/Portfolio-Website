import React from 'react';
import {Navbar, Collapse, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';

function Header() {

    const [navCollapse, setNavCollapse] = React.useState(false)

    function toggleNavbarCollapse() {
        setNavCollapse(prev => !prev)
    }

    return (
        <>
        <Navbar dark sticky="top" expand="md">
            <NavbarBrand>Portfolio</NavbarBrand>
            <NavbarToggler onClick={toggleNavbarCollapse} />
            <Collapse isOpen={navCollapse} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar> 
        </>
    );
}

export default Header;


  

