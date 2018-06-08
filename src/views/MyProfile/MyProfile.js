import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

import FacebookLogo from '../../../public/img/facebook-logo.png';
import TwitterLogo from '../../../public/img/twitter-logo.png';
import CreditCardLogo from '../../../public/img/credit-card-logo.png';

/*======================================================================
// This is the help page where users can learn more about how to use
// Cobia Systems effectively.
======================================================================*/
class MyProfile extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row className="show-grid">
          <Col lg="6">
          <h2 className="blue-background"> <i className="fa fa-user"></i> Vitals</h2>
            <form>
              <div class="form-group">
                <label for="inputKeyword">Company Name</label>
                <input type="text" class="form-control" id="inputKeywordField" aria-describedby="emailHelp" placeholder="Company Name" />
              </div>
              <div class="form-group">
                <label for="inputKeyword">Industry</label>
                <input type="text" class="form-control" id="inputKeywordField" aria-describedby="emailHelp" placeholder="Industry" />
                <small id="emailHelp" class="form-text text-muted">i.e. Hospitality</small>
              </div>
              <button type="submit" class="btn btn-primary">Update Vitals</button>
            </form>
            <br />
            <h2 className="blue-background"> <i className="fa fa-keyboard-o"></i> Logins</h2>
            <p>cobia@cobiasystems.com</p>
            <button type="submit" class="btn btn-primary">Add Login</button>
          </Col>
          <Col lg="6">
          <h2 className="blue-background"> <i className="fa fa-link"></i> Link Accounts</h2>
              <p>Social Media</p>
                <img src={ FacebookLogo } className="circular-logo" alt='Facebook Logo' />
                <img src={ TwitterLogo } className="circular-logo" alt='Twitter Logo' />
              <br />
              <p>Payment Method</p>
                <img src={ CreditCardLogo } className="circular-logo" alt='Credit Card Logo' />
          </Col>
        </Row>
      </div>
    )
  }
}

export default MyProfile;
