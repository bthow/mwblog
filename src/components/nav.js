import React from "react"
import { Link, graphql } from "gatsby"
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
  DropdownItem } from 'reactstrap';

class SiteNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const siteTitle = "Meanwhile" 

    return (
    <div>
  {/*     <nav class="navbar navbar-light bg-light static-top">
        <div class="container ">
          <Link 
            class="navbar-brand nav-link" 
            href="#">Meanwhile</Link>

        </div>
        <div class="navbar-nav ml-auto">
          <Link 
            class="nav-item nav-line ml-auto" 
            activeClaseNameName="nav-item nav-line ml-auto" 
            href="#" 
            to="/church/">About Us</Link>

          <Link 
            class="nav-item nav-link ml-1" 
            activeClaseNameName="nav-item nav-line ml-1" 
            href="#" 
            to="/appProject/">App Project</Link>

          <Link 
            class="nav-item nav-link ml-1" 
            activeClaseNameName="nav-item nav-line ml-1" 
            href="#" 
            to="/contact/">Contact</Link>
        </div>
      </nav> 
  */}

          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">{siteTitle}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                 <Link 
                    class="nav-link"
                    className="nav-link"
                    activeClaseName="nav-link selected"
                    to="/church/">
                      About Us
                  </Link>
 
                </NavItem>
                <NavItem>
                  <Link 
                    class="nav-link"
                    className="nav-link"
                    activeClaseName="nav-link selected"
                    to="/appProject/">App Project</Link>
                </NavItem>
                <NavItem>
                  <Link 
                    class="nav-link"
                    className="nav-link"
                    activeClaseName="nav-link selected"
                    to="/contact/">Contact</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

    )
  }
}

export default SiteNav

