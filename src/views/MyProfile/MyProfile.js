import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import axios from 'axios';

import CreditCardLogo from '../../../public/img/credit-card-logo.png';

/*= =====================================================================
// This is the My Profile page where users can rest their password,
// eventually add a login, and add or edit payments.
====================================================================== */
class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordResetFailed: false,
      passwordResetSucceeded: false,
    };
  }

  /*= =====================================================================
  // Upon clicking the edit button next to a login email address, the
  // user will receive an email to reset their password.
  ====================================================================== */  
  handleResetPassword(e) {
    e.preventDefault();
    const userEmailStr = localStorage.getItem('userEmail');
    const formData = new FormData();
    formData.append('email', userEmailStr);
    axios ({
      method: 'post',
      url: '/rest/public/account/reset_password/',
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response);
      if(response.data.Status === 1) {
        this.setState({
          passwordResetFailed: false,
          passwordResetSucceeded: true,
        });
      } else {
        this.setState({
          passwordResetFailed: true,
          passwordResetSucceeded: false,
        }); 
      }
      return;
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
      return;
    }) 
  }

  render() {
    const userEmailString = localStorage.getItem('userEmail');
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#/admin">Dashboard</a></li>
            <li className="breadcrumb-item active" aria-current="page">My Profile</li>
          </ol>
        </nav>
        <Row className="show-grid">
          <Col lg="6">
            <h2 className="blue-background"> <i className="fa fa-keyboard-o" /> Logins</h2>
            { (this.state.passwordResetFailed)
            ? <div className="form-error-div">Pasword reset failed.</div>
            : <div /> }
            { (this.state.passwordResetSucceeded)
            ? <div className="form-success-div">Password reset succeeded. Check your email.</div>
            : <div /> }
            <p>{userEmailString} <i onClick={this.handleResetPassword.bind(this)} className={['fa fa-edit', 'icon-hover'].join(' ')} /></p>
            <p>Click the icon next to an email to reset password.</p>
            <a href="#/admin/myprofile/addlogin"><button type="submit" className="btn btn-primary">Add Login</button></a>
          </Col>
          <Col lg="6">
            <h2 className="blue-background"> <i className="fa fa-link" /> Payment</h2>
            <p>Payment Method</p>
            <img src={CreditCardLogo} className="circular-logo" alt="Credit Card Logo" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MyProfile;
