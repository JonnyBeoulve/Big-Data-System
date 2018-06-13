import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CobiaLogo from '../../../public/img/logo.png';

/*======================================================================
// This is the Login container for Cobia Systems where users first
// arrive. Here a user can login to the system to gain access to the
// Admin Panel or register a new account.
======================================================================*/
class Login extends Component {

  /*======================================================================
  // This will house state of the user's email and password as they
  // are input.
  ======================================================================*/
  constructor() {
    super();
    this.state = {
      showSignUp: false,
      login: false,
      loginEmail: '',
      loginPassword: '',
    };
  }

  /*======================================================================
  // Upon arriving at the login page this function will be run to see if
  // the user is already logged in. If so, it will redirect them to
  // the admin panel.
  ======================================================================*/
  checkAuthentication() {
    const token = localStorage.getItem('cobiaUserID');
    if(!token) {
      return false;
    } else {
      this.setState({
        login: true,
      })
      return;
    }
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  /*======================================================================
  // This will handle login submission and authentication. Currently,
  // it saves a localstorage item to simulate login for the sake of early
  // front-end production.
  ======================================================================*/
  handleLoginSubmit() {
    if ((this.state.loginEmail === '') && (this.state.loginPassword === '')) {
      localStorage.setItem('cobiaUserID', 'temp123');
      this.setState({
        login: true,
      })
    } else {
      return;
    }
  }

  /*======================================================================
  // This will display the sign up page when the user clicks sign up
  // under the log in form.
  ======================================================================*/
  handleSignUp() {
    this.setState({
      showSignUp: true,
    })
    return;
  }

  /*======================================================================
  // This will close the sign up modal upon clicking the X on the top
  // right;
  ======================================================================*/
  handleCloseSignUpModal() {
    this.setState({
      showSignUp: false,
    })
    return;
  }

  /*======================================================================
  // This will render the Cobia Systems logo, email and password inputs,
  // as well as a submit button for login. Upon login, the program will
  // redirect to the dashboard.
  ======================================================================*/
  render() {

    if (this.state.login) {
      return <Redirect to='/admin'/>;
    }

    return (
      <div className={["login", "animated fadeIn"].join(' ')}>
        <img src={ CobiaLogo } className="login-cobia-logo" alt='Cobia Systems Logo' />
        <h2 className="login-header-text">LOG IN</h2>
        <div className="login-form">
          <input className="login-email-input" type="email" name="user-email" placeholder="Email" onChange={e => this.setState({ loginEmail: e.target.value })} />
          <input className="login-password-input" type="password" name="user-password" placeholder="Password" onChange={e => this.setState({ loginPassword: e.target.value })} />
          <button className="login-button" onClick={ this.handleLoginSubmit.bind(this) }>Submit</button>
          <p className="login-signup-link" onClick={ this.handleSignUp.bind(this)}>Sign Up</p>
          { (this.state.showSignUp)
            ? <div className={["login-signup-modal", "animated fadeIn"].join(' ')}>
                <div className="login-signup-close" onClick={ this.handleCloseSignUpModal.bind(this) }>X</div>
                <div className="login-signup-form"><h2 className="login-header-text">SIGN UP</h2>
                <input className="login-input" type="text" name="sign-up-email" placeholder="Email" />
                <input className="login-input" type="text" name="loginSignupFname" placeholder="First Name" />
                <input className="login-input" type="text" name="loginSignupLname" placeholder="Last Name" />
                <input className="login-input" type="password" name="loginSignupPassword" placeholder="Password" />
                <input className="login-input" type="text" name="loginSignupPasswordConfirm" placeholder="Confirm Password" />
                <button className="login-button" onClick={ this.handleCloseSignUpModal.bind(this) }>Register</button></div></div>
            : <div></div> }
        </div>
      </div>
    );
  }
}

export default Login;