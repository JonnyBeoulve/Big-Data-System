import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Signup from './children/Signup/Signup';
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
      showLoginFailed: false,
      showLoginFormError: false,
      showSignUp: false,
      loggedIn: false,
      loginEmail: '',
      loginPassword: '',
    };
  }

  /*= =====================================================================
  // Upon arriving at the login page this function will be run to see if
  // the user is already logged in. If so, it will redirect them to
  // the admin panel.
  ====================================================================== */
  checkAuthentication() {
    const token = localStorage.getItem('cobiaUserEmail');
    if (token) {
      this.setState({
        loggedIn: true,
      });
    }
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  /*= =====================================================================
  // This will handle login submission and authentication. First it will
  // ensure that an email and password have been entered before attempting
  // a login via the server. If successful, a token in localStorage will
  // be created.
  ====================================================================== */
  handleLoginSubmit() {
    if (this.state.loginEmail.length < 1 || this.state.loginPassword.length < 1) {
      this.setState({
        showLoginFormError: true,
      });
      return;
    }
     axios ({
      method: 'post',
      url: 'https://cobiasystems.com/rest/public/account/login_basic',
      data: { 
        email: this.state.loginEmail,
        password: this.state.loginPassword,
      }
    })
    .then(response => {
      localStorage.setItem('cobiaUserEmail', this.state.loginEmail);
      this.setState({
        loggedIn: true,
      });
      return;
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
      this.setState({
        showLoginFailed: true,
      }); 
      return;
    })
    // Temporary client testing solution below
    localStorage.setItem('cobiaUserEmail', this.state.loginEmail);
    this.setState({
      loggedIn: true,
    });
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
        { (this.state.showLoginFormError)
            ? <div className="login-error-div">Email and password are required.</div>
            : <div /> }
        { (this.state.showLoginFailed)
            ? <div className="login-error-div">Login failed.</div>
            : <div /> }
        <div className="login-form">
          <input className="login-email-input" type="email" name="user-email" placeholder="Email" onChange={e => this.setState({ loginEmail: e.target.value })} />
          <input className="login-password-input" type="password" name="user-password" placeholder="Password" onChange={e => this.setState({ loginPassword: e.target.value })} />
          <button className="login-button" onClick={this.handleLoginSubmit.bind(this)}>Submit</button>
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
