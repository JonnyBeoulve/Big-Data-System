import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
import HeaderDropdown from './HeaderDropdown';

/*======================================================================
// Inline styling for the top right dropdown div.
======================================================================*/
var dropdownDivStyle = {
  marginRight: '15px',
};

/*======================================================================
// This is the header for the web app which includes the left sidebar
// for navigation, branding on the top left, a header bar on the
// top, and an account dropdown on the top-right.
======================================================================*/
class Header extends Component {

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={ this.mobileSidebarToggle }>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <NavbarBrand href="#"></NavbarBrand>
        <NavbarToggler className="d-md-down-none mr-auto" onClick={ this.sidebarToggle }>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Nav className="ml-auto" style={ dropdownDivStyle } navbar>
          <HeaderDropdown accnt />
        </Nav>
      </header>
    );
  }
}

export default Header;
