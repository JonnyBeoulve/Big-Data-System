import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

/*======================================================================
// This is the page where a user can add a new login, which requires
// a fee.
======================================================================*/
class MyProfileAddLogin extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="#/myprofile">My Profile</a></li>
            <li class="breadcrumb-item active" aria-current="page">Add Login</li>
          </ol>
        </nav>
        <Row className="show-grid">
          <Col lg="6">
          <h2 className="blue-background"> <i className="fa fa-edit"></i> Add Login</h2>
            <form>
            <div class="form-group">
                <label for="inputKeyword">Email</label>
                <input type="email" class="form-control" id="inputAddLoginEmail" aria-describedby="emailHelp" placeholder="Email" />
                <small id="emailHelp" class="form-text text-muted">Used as the login name</small>
              </div>
              <div class="form-group">
                <label for="inputKeyword">Password</label>
                <input type="password" class="form-control" id="inputAddLoginNewPassword" aria-describedby="emailHelp" placeholder="New Password" />
              </div>
              <div class="form-group">
                <label for="inputKeyword">Confirm Password</label>
                <input type="password" class="form-control" id="inputAddLoginConfirmPassword" aria-describedby="emailHelp" placeholder="Confirm Password" />
              </div>
              <p>Adding a new login requires a fee.</p>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </Col>
          <Col lg="6">
          </Col>
        </Row>
      </div>
    )
  }
}

export default MyProfileAddLogin;
