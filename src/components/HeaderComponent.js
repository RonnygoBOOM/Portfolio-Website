import React from 'react';
import {Navbar, Collapse, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

function Header() {

    const [navCollapse, setNavCollapse] = React.useState(false)

    function toggleNavbarCollapse() {
        setNavCollapse(prev => !prev)
    }
    return (
        <>
        <Navbar color="faded" light expand="md">
            {/* <img className="logo" src="/images/cardano-ada-logo.png"></img>
            <h1>cnftTOP</h1> */}
            <NavbarBrand>Portfolio Header</NavbarBrand>
            <NavbarToggler onClick={toggleNavbarCollapse} />
            <Collapse navCollapse={navCollapse} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contact">Contact</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Projects
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem>
                                Option 3
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                </Nav>
            </Collapse>
        </Navbar> 
        </>
    );
}

export default Header;


  

