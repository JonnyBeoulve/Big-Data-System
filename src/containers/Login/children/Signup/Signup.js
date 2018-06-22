import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    /*= =====================================================================
    // This will house state of registration information along with whether
    // or not to display error messages upon submit for the signup page.
    ====================================================================== */
    constructor(props) {
      super(props);
      this.state = {
        formLengthError: false,
        formPasswordLengthError: false,
        formPasswordMatchError: false,
        signupEmail: '',
        signupCompanyName: '',
        signupPassword: '',
        signupConfirmPassword: '',
      };
    }

    /*= =====================================================================
    // Handle registration submission by first validating then posting to
    // the Mongo database.
    ====================================================================== */
    handleSignup() {
        if (this.state.signupEmail.length < 4 || this.state.signupCompanyName.length < 2) {
            this.setState({
                formLengthError: true
            });
            return
        }
        if (this.state.signupPassword.length < 8) {
            this.setState({
                formPasswordLengthError: true
            });
            return
        }        
        if (this.state.signupPassword !== this.state.signupConfirmPassword) {
            this.setState({
                formPasswordMatchError: true
            });
            return
        }
        axios ({
            method: 'post',
            url: 'https://cobiasystems.com/rest/public/account/signup',
            data: { 
              emailAddress: this.state.signupEmail,
              companyName: this.state.signupCompanyName,
              password: this.state.signupPassword,
            }
        })
        .then(res => {
            this.setState({
                formLengthError: false,
                formPasswordLengthError: false,
                formPasswordMatchError: false,
                registered: true,
            });
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        })
    }

    render() {
    
        return (
            <div className={['login-signup-modal', 'animated fadeIn'].join(' ')}>
                <div className="login-signup-close" 
                    onClick={this.props.closeSignupModal}>X</div>
                <div className="login-signup-form">
                    <h2 className="login-header-text">
                        SIGN UP
                    </h2>
                    { (this.state.formLengthError)
                        ? <div className="form-error-div">All fields are required.</div>
                        : <div></div> }
                    { (this.state.formPasswordLengthError)
                        ? <div className="form-error-div">Password must be at least 8 characters.</div>
                        : <div></div> }
                    { (this.state.formPasswordMatchError)
                        ? <div className="form-error-div">Both password fields must match.</div>
                        : <div></div> }
                    { (this.state.registered)
                        ? <div className="form-success-div">Registration successful. You can now log-in.</div>
                        : <div></div> }
                    <input className="login-input" 
                        type="text" 
                        placeholder="Email" 
                        onChange={(e) => {this.setState({signupEmail: e.target.value })}} />
                    <input className="login-input" 
                        type="text" placeholder="Company Name" 
                        onChange={(e) => {this.setState({signupCompanyName: e.target.value })}} />
                    <input className="login-input" 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => {this.setState({signupPassword: e.target.value })}} />
                    <input className="login-input" 
                        type="password" 
                        placeholder="Confirm Password" 
                        onChange={(e) => {this.setState({signupConfirmPassword: e.target.value })}} />
                    <button className="login-button" 
                        onClick={this.handleSignup.bind(this)}>Register</button>
                </div>
            </div>
        );
    }
}

export default Signup;