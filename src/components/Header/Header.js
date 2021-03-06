import React, { Component } from 'react';
import {
  Nav,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
import HeaderDropdown from './HeaderDropdown';

/*= =====================================================================
// Inline styling for the top right dropdown div.
====================================================================== */
const dropdownDivStyle = {
  marginRight: '15px',
};

/*= =====================================================================
// This is the header for the web app which includes the left sidebar
// for navigation, branding on the top left, a header bar on the
// top, and an account dropdown on the top-right.
====================================================================== */
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
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <NavbarBrand href="#/admin/dashboard" />
        <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <Nav className="ml-auto" style={dropdownDivStyle} navbar>
          <HeaderDropdown accnt />
        </Nav>
      </header>
    );
  }
}

export default Header;
