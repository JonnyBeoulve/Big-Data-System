import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

/*======================================================================
// This is the page where a user can edit their credentials for login
// after clicking a button to the right of the associated email
// on the My Profile page.
======================================================================*/
class MyProfileEditLogin extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/admin">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="#/admin/myprofile">My Profile</a></li>
            <li class="breadcrumb-item active" aria-current="page">Edit Login</li>
          </ol>
        </nav>
        <Row className="show-grid">
          <Col lg="6">
          <h2 className="blue-background"> <i className="fa fa-edit"></i> Edit Login</h2>
            <form>
              <div class="form-group">
                <label for="inputKeyword">Current Password</label>
                <input type="password" class="form-control" id="inputEditLoginCurrentPassword" aria-describedby="emailHelp" placeholder="Current Password" />
              </div>
              <div class="form-group">
                <label for="inputKeyword">New Password</label>
                <input type="password" class="form-control" id="inputEditLoginNewPassword" aria-describedby="emailHelp" placeholder="New Password" />
              </div>
              <div class="form-group">
                <label for="inputKeyword">Confirm Password</label>
                <input type="password" class="form-control" id="inputEditLoginConfirmPassword" aria-describedby="emailHelp" placeholder="Confirm Password" />
              </div>
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

export default MyProfileEditLogin;
