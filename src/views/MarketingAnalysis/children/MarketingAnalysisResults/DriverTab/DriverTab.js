import React, { Component } from 'react';
import {
  NavLink,
  NavItem,
} from 'reactstrap';
import classnames from 'classnames';

/*= =====================================================================
// This will display the tab for each input driver along with the name
// and a handler for toggling between the display of data underneath
// each tab.
====================================================================== */
class DriverTab extends Component {
  render() {
    return (
      <NavItem>
        <NavLink className={classnames({ active: this.props.activeDriver === `${this.props.tabNum}` })} onClick={() => { this.props.toggleDriverTab(`${this.props.tabNum}`); }}>
          { this.props.tabName }
        </NavLink>
      </NavItem>
    );
  }
}

export default DriverTab;
