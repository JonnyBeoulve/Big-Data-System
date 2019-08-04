import React, { Component } from "react";

/*= =====================================================================
// This is the Help page where users can learn more about how to use
// Cthe system effectively.
====================================================================== */
class Help extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#/admin">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Help
            </li>
          </ol>
        </nav>
        <p>Coming soon...</p>
        <p>Support: (123)456-7890</p>
      </div>
    );
  }
}

export default Help;
