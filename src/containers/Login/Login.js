import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import Signup from "./Signup/Signup";
import BDSLogo from "../../../public/img/logo.png";

/*= =====================================================================
// This is the Login container for Big Data System where users first
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
      loginEmail: "",
      loginPassword: "",
      loginError: false,
      loginErrorMessage: ""
    };
  }

  /*= =====================================================================
  // Upon arriving at the login page execute check session to see if
  // the user is already logged in.
  ====================================================================== */
  componentDidMount() {
    this.checkSession();
  }

  /*= =====================================================================
  // Upon arriving at the login page this function will be run to see if
  // the user is already logged in. If so, it will redirect them to
  // the admin panel.
  ====================================================================== */
  checkSession() {
    axios({
      method: "post",
      url: "/rest/admin/account/me"
    })
      .then(response => {
        if (response.data.Status === 1) {
          this.setState({
            loggedIn: true
          });
        } else {
          this.setState({
            loggedIn: false
          });
        }
      })
      .catch(error => {
        this.setState({
          loggedIn: false
        });
        console.log("Error fetching and parsing data", error);
        return;
      });
  }

  /*= =====================================================================
  // This will handle login submission and authentication. First, formData
  // will be created. Once submitted to the server, the user will be
  // logged into the admin panel if successful. If not, an error will be
  // displayed from the server.
  ====================================================================== */
  handleLoginSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", `${this.state.loginEmail}`);
    formData.append("password", `${this.state.loginPassword}`);
    axios({
      method: "post",
      url: "/",
      data: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => {
        if (response.data.Status === 1) {
          localStorage.setItem("userEmail", `${this.state.loginEmail}`);
          this.setState({
            loggedIn: true
          });
        } else {
          console.log(response.data);
          this.setState({
            loginError: true,
            loginErrorMessage: response.data.Message
          });
        }
        return;
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
        return;
      });
  }

  /*= =====================================================================
  // This will display the sign up page when the user clicks sign up
  // under the log in form.
  ====================================================================== */
  handleSignUp() {
    this.setState({
      showSignUp: true
    });
  }

  /*= =====================================================================
  // This will close the sign up modal upon clicking the X on the top
  // right;
  ====================================================================== */
  handleCloseSignupModal() {
    this.setState({
      showSignUp: false
    });
  }

  /*= =====================================================================
  // This will render the Big Data System logo, email and password inputs,
  // as well as a submit button for login. Upon login, the program will
  // redirect to the dashboard.
  ====================================================================== */
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    }

    return (
      <div className={["login", "animated fadeIn"].join(" ")}>
        <img
          src={BDSLogo}
          className="login-bds-logo"
          alt="Big Data System logo"
        />
        <h2 className="login-header-text">LOG IN</h2>
        {this.state.loginError ? (
          <div className="login-error-div">{this.state.loginErrorMessage}</div>
        ) : (
          <div />
        )}
        <div className="login-form">
          <form onSubmit={this.handleLoginSubmit.bind(this)}>
            <input
              className="login-email-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={e => this.setState({ loginEmail: e.target.value })}
            />
            <input
              className="login-password-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => this.setState({ loginPassword: e.target.value })}
            />
            <button className="login-button" type="submit" value="Submit">
              Submit
            </button>
          </form>
          <p
            className="login-signup-link"
            onClick={this.handleSignUp.bind(this)}
          >
            Sign Up
          </p>
          {this.state.showSignUp ? (
            <Signup closeSignupModal={this.handleCloseSignupModal} />
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default Login;
