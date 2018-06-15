import React, { Component } from 'react';

class Signup extends Component {
    /*= =====================================================================
    // This will house state of the user's email and password as they
    // are input.
    ====================================================================== */
    constructor() {
      super();
      this.state = {
        signupEmail: '',
        signupFirstName: '',
        signupLastName: '',
        signupPassword: '',
        signupConfirmPassword: '',
      };
    }

    handleSignup() {
        console.log("WORKING!");
    }

    render() {
    
        return (
            <div className={['login-signup-modal', 'animated fadeIn'].join(' ')}>
                <div className="login-signup-close" onClick={this.props.closeSignupModal}>X</div>
                <div className="login-signup-form"><h2 className="login-header-text">SIGN UP</h2>
                    <input className="login-input" type="text" placeholder="Email" 
                        onChange={(e) => {this.setState({signupEmail: e.target.value })}} />
                    <input className="login-input" type="text" placeholder="First Name" 
                        onChange={(e) => {this.setState({signupFirstName: e.target.value })}} />
                    <input className="login-input" type="text" placeholder="Last Name" 
                        onChange={(e) => {this.setState({signupLastName: e.target.value })}} />
                    <input className="login-input" type="password" placeholder="Password" 
                        onChange={(e) => {this.setState({signupPassword: e.target.value })}} />
                    <input className="login-input" type="password" placeholder="Confirm Password" 
                        onChange={(e) => {this.setState({signupConfirmPassword: e.target.value })}} />
                    <button className="login-button" onClick={this.handleSignup}>Register</button>
                </div>
            </div>
        );
    }
}

export default Signup;