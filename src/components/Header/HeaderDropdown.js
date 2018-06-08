import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  Progress,
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

/*======================================================================
// This handles the dropdown menus found on the top right of the header
// where users can access account links and notifications.
======================================================================*/
class HeaderDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  /*======================================================================
  // This will display notifications via a dropdown. The number of
  // notifications is previewed on the icon within the header div.
  ======================================================================*/
  dropNotif() {
    const itemsCount = 1;
    return (
      <Dropdown nav className="d-md-down-none" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <i className="icon-bell"></i><Badge pill color="danger">{itemsCount}</Badge>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>You have {itemsCount} notifications</strong></DropdownItem>
          <DropdownItem><i className="icon-user-follow text-success"></i> New registration</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  /*======================================================================
  // This will display the user's avatar and include links to profile
  // based features.
  ======================================================================*/
  dropAccnt() {
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={'img/avatars/user-default.jpg'} className="img-avatar" alt="Default user avatar"/>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
          <DropdownItem><a href="#/myprofile"><i className="fa fa-user"></i> Profile</a></DropdownItem>
          <DropdownItem><a href="#/myprofile"><i className="fa fa-usd"></i> Payments<Badge color="secondary">0</Badge></a></DropdownItem>
          <DropdownItem><a href="https://cobiasystems.com/"><i className="fa fa-lock"></i> Logout</a></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    const {notif, accnt, tasks, mssgs, ...attributes} = this.props;
    return (
      notif ? this.dropNotif() :
      accnt ? this.dropAccnt() : null
    );
  }
}

HeaderDropdown.propTypes = propTypes;
HeaderDropdown.defaultProps = defaultProps;

export default HeaderDropdown;
