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
            <h2 className="blue-background"> <i className="fa fa-edit" /> Add Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="inputKeyword">Email</label>
                <input type="email" className="form-control" id="inputAddLoginEmail" aria-describedby="emailHelp" placeholder="Email" />
                <small id="emailHelp" className="form-text text-muted">Used as the login name</small>
              </div>
              <div className="form-group">
                <label htmlFor="inputKeyword">Password</label>
                <input type="password" className="form-control" id="inputAddLoginNewPassword" aria-describedby="emailHelp" placeholder="New Password" />
              </div>
              <div className="form-group">
                <label htmlFor="inputKeyword">Confirm Password</label>
                <input type="password" className="form-control" id="inputAddLoginConfirmPassword" aria-describedby="emailHelp" placeholder="Confirm Password" />
              </div>
              <p>Adding a new login requires a fee.</p>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </Col>
          <Col lg="6" />
        </Row>
      </div>
    );
  }
}

export default MyProfileAddLogin;
