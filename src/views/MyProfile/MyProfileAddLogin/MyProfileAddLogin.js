import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

/*= =====================================================================
// This is the page where a user can add a new login, which requires
// a fee.
====================================================================== */
class MyProfileAddLogin extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#/admin">Dashboard</a></li>
            <li className="breadcrumb-item"><a href="#/admin/myprofile">My Profile</a></li>
            <li className="breadcrumb-item active" aria-current="page">Add Login</li>
          </ol>
        </nav>
        <Row className="show-grid">
          <Col lg="6">
            <p>Coming soon</p>
          </Col>
          <Col lg="6" />
        </Row>
      </div>
    );
  }
}

export default MyProfileAddLogin;
