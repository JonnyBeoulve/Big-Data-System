import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

import FacebookLogo from '../../../public/img/facebook-logo.png';
import TwitterLogo from '../../../public/img/twitter-logo.png';
import CreditCardLogo from '../../../public/img/credit-card-logo.png';

/*= =====================================================================
// This is the My Profile page where users can link social media accounts,
// add a payment method, as well as edit and add new logins.
====================================================================== */
class MyProfile extends Component {

  render() {
    const loginEmail = localStorage.getItem('cobiaUserEmail');
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
            <h2 className="blue-background"> <i className="fa fa-user" /> Vitals</h2>
            <form>
              <div className="form-group">
                <label htmlFor="inputKeyword">Company Name</label>
                <input type="text" className="form-control" id="inputKeywordField" aria-describedby="emailHelp" placeholder="Company Name" />
              </div>
              <div className="form-group">
                <label htmlFor="inputKeyword">Industry</label>
                <input type="text" className="form-control" id="inputKeywordField" aria-describedby="emailHelp" placeholder="Industry" />
                <small id="emailHelp" className="form-text text-muted">i.e. Hospitality</small>
              </div>
              <button type="submit" className="btn btn-primary">Update Vitals</button>
            </form>
            <br />
            <h2 className="blue-background"> <i className="fa fa-keyboard-o" /> Logins</h2>
            <p>placeholderemail@email.com <a href="#/admin/myprofile/editlogin"><i className={['fa fa-edit', 'icon-hover'].join(' ')} /></a></p>
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
