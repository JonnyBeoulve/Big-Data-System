import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Signup from './Signup/Signup';
import CobiaLogo from '../../../public/img/logo.png';

/*= =====================================================================
// This is the Login container for Cobia Systems where users first
// arrive. Here a user can login to the system to gain access to the
// Admin Panel or register a new account.
====================================================================== */
class Login extends Component {
  /*= =====================================================================
  // This will house state of the user's email and password as they
  // are input.
  ====================================================================== */
  constructor(props) {
    super(props);
    this.handleCloseSignupModal = this.handleCloseSignupModal.bind(this);
    this.state = {
      showSignUp: false,
      loggedIn: false,
      loginEmail: '',
      loginPassword: '',
      loginError: false,
      loginErrorMessage: '',
    };
  }

  /*= =====================================================================
  // This will handle login submission and authentication. First, formData
  // will be created. Once submitted to the server, the user will be
  // logged into the admin panel if successful. If not, an error will be
  // displayed from the server.
  ====================================================================== */
  handleLoginSubmit(e) {
    e.preventDefault();
    if(this.state.loginEmail === 'cobia@cobiasystems.com' && this.state.loginPassword === 'Cobia2018') {
      this.setState({ loggedIn: true });
    }
  }

  /*= =====================================================================
  // This will display the sign up page when the user clicks sign up
  // under the log in form.
  ====================================================================== */
  handleSignUp() {
    this.setState({
      showSignUp: true,
    });
  }

  /*= =====================================================================
  // This will close the sign up modal upon clicking the X on the top
  // right;
  ====================================================================== */
  handleCloseSignupModal() {
    this.setState({
      showSignUp: false,
    });
  }

  /*= =====================================================================
  // This will render the Cobia Systems logo, email and password inputs,
  // as well as a submit button for login. Upon login, the program will
  // redirect to the dashboard.
  ====================================================================== */
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    }

    return (
      <div className={['login', 'animated fadeIn'].join(' ')}>
        <img src={CobiaLogo} className="login-cobia-logo" alt="Cobia Systems Logo" />
        <h2 className="login-header-text">LOG IN</h2>
        { (this.state.loginError)
            ? <div className="login-error-div">{this.state.loginErrorMessage}</div>
            : <div /> }
        <div className="login-form">
          <form onSubmit={this.handleLoginSubmit.bind(this)}>
            <input className="login-email-input" type="email" name="email" placeholder="Email" onChange={e => this.setState({ loginEmail: e.target.value })} />
            <input className="login-password-input" type="password" name="password" placeholder="Password" onChange={e => this.setState({ loginPassword: e.target.value })} />
            <button className="login-button" type="submit" value="Submit">Submit</button>
          </form>
          <p className="login-signup-link" onClick={this.handleSignUp.bind(this)}>Sign Up</p>
          { (this.state.showSignUp)
            ? <Signup closeSignupModal={this.handleCloseSignupModal} />
            : <div /> }
        </div>
      </div>
    );
  }
}

export default Login;
