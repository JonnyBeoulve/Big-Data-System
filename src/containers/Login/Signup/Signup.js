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
        signupEmail: '',
        signupFirstName: '',
        signupLastName: '',
        signupPassword: '',
        signupConfirmPassword: '',
        signupSuccess: false,
        signupError: false,
        signupErrorMessage: '',
      };
    }

    /*= =====================================================================
    // First, formData will be created using the user's input values. Then,
    // a request will be made to the server. If successful, the user will
    // be alerted with a message. If not, an error sent back from the 
    // server will be displayed.
    ====================================================================== */
    handleSignupSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', `${this.state.signupEmail}`);
        formData.append('first_name', `${this.state.signupFirstName}`);
        formData.append('last_name', `${this.state.signupLastName}`);
        formData.append('password', `${this.state.signupPassword}`);
        formData.append('password_confirm', `${this.state.signupConfirmPassword}`);
        axios ({
            method: 'post',
            url: '/rest/public/account/signup',
            data: formData,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data'
            }
          })
        .then(response => {
            if(response.Status === 1) {
                this.setState({
                    signupSuccess: true,
                });
            } else {
                console.log(response);
                this.setState({
                    signupError: true,
                    signupErrorMessage: response.data.Message,
                });
            }
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
                    { (this.state.signupError)
                        ? <div className="form-error-div">{this.state.signupErrorMessage}</div>
                        : <div></div> }
                    { (this.state.signupSuccess)
                        ? <div className="form-success-div">Signup successful.</div>
                        : <div></div> }
                    <form onSubmit={this.handleSignupSubmit.bind(this)}>
                        <input className="login-input" type="email" name="email" placeholder="Email" onChange={e => this.setState({ signupEmail: e.target.value })} />
                        <input className="login-input" type="text" name="fname" placeholder="First Name" onChange={e => this.setState({ signupFirstName: e.target.value })} />
                        <input className="login-input" type="text" name="lname" placeholder="Last Name" onChange={e => this.setState({ signupLastName: e.target.value })} />
                        <input className="login-input" type="password" name="password" placeholder="Password" onChange={e => this.setState({ signupPassword: e.target.value })} />
                        <input className="login-input" type="password" name="passwordconfirm" placeholder="Confirm Password" onChange={e => this.setState({ signupConfirmPassword: e.target.value })} />
                        <button className="login-button" type="submit" value="Submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;