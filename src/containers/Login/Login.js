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
  // a login via the server. Then, it will create a formData object with
  // the user's credentials. If the post is successful, a token in 
  // localStorage will be created authorizing the user. If not, an error
  // will be displayed.
  ====================================================================== */
  handleLoginSubmit(e) {
    e.preventDefault();
    if (this.state.loginEmail.length < 1 || this.state.loginPassword.length < 1) {
      this.setState({
        showLoginFormError: true,
      });
      return;
    }
    const formData = new FormData();
    formData.append('email', `${this.state.loginEmail}`);
    formData.append('password', `${this.state.loginPassword}`);
    axios ({
      method: 'post',
      url: 'http://cobiasystems.lc/rest/public/account/login_basic',
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      if(response.data.Status === 1) {
        localStorage.setItem('cobiaUserEmail', this.state.loginEmail);
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          showLoginFailed: true,
        }); 
      }
      return;
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
      return;
    })
    // Temporary client testing solution below
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
