import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
} from 'reactstrap';

const propTypes = {
  notif: PropTypes.bool,
  accnt: PropTypes.bool,
  tasks: PropTypes.bool,
  mssgs: PropTypes.bool,
};
const defaultProps = {
  notif: false,
  accnt: false,
  tasks: false,
  mssgs: false,
};

/*= =====================================================================
// This handles the dropdown menus found on the top right of the header
// where users can access account links and notifications.
====================================================================== */
class HeaderDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      dropdownOpen: false,
      logout: false,
    };
  }

  /*= =====================================================================
  // This handles display of the dropdown menu.
  ====================================================================== */
  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  /*= =====================================================================
  // ATTENTION: This function is currently not working.
  ====================================================================== */
  logout() {
    this.setState({
      logout: true,
    });
  }

  /*= =====================================================================
  // This will display the user's avatar and include links to profile
  // based features. If a user clicks logout, their localStorage key
  // will be deleted and they'll be redirected to the login page.
  ====================================================================== */
  dropAccnt() {
    if (this.state.logout) {
      return <Redirect to="/" />;
    }

    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
        <DropdownToggle nav>
          <img src="img/avatars/user-default.jpg" className="img-avatar" alt="Default user avatar" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
          <DropdownItem><a href="#/admin/myprofile"><i className="fa fa-user" /> Profile</a></DropdownItem>
          <DropdownItem><a href="#/admin/myprofile"><i className="fa fa-usd" /> Payments<Badge color="secondary">0</Badge></a></DropdownItem>
          <DropdownItem onClick={e => this.logout()}><i className="fa fa-lock" /> Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    const {
      notif, accnt, tasks, mssgs, ...attributes
    } = this.props;
    return (
      accnt
        ? this.dropAccnt()
        : null
    );
  }
}

HeaderDropdown.propTypes = propTypes;
HeaderDropdown.defaultProps = defaultProps;

export default HeaderDropdown;
