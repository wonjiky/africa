import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this); //this toggleNav will become 'this.toggleNav'
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="lg">
					<div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand id="maintitle" className="mr-auto">
                            <img src="assets/images/logo.png" height="38"
                              alt="Africapolis Visualise Urbanisation in Africa"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink className="nav-link" to="/home">Home</NavLink></NavItem>
                                <NavItem><NavLink className="nav-link" to="/explore">Explore</NavLink></NavItem>
                                <NavItem><NavLink className="nav-link" to="/research">Research</NavLink></NavItem>
                                <NavItem><NavLink className="nav-link" to="/aboutus">About Us</NavLink></NavItem>
                            </Nav>
                        </Collapse>
					</div>
				</Navbar>
            </React.Fragment>
        );
    }

}

export default Header;