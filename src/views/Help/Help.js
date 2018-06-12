import React, { Component } from 'react';

/*======================================================================
// This is the Help page where users can learn more about how to use
// Cobia Systems effectively.
======================================================================*/
class Help extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/admin">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Help</li>
          </ol>
        </nav>
        <p>Coming soon...</p>
        <p>Support: (844)324-4784</p>
      </div>
    )
  }
}

export default Help;
