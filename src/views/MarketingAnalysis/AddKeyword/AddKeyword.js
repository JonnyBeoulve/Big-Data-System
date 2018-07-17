import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import axios from 'axios';

/*= =====================================================================
// This is the Add Keyword page where a user can add a keyword to be
// analyzed on the back end before viewing results.
====================================================================== */
class AddKeyword extends Component {

    /*= =====================================================================
    // This will create state for displaying feedback to the user on form
    // submission, in addition to the state of the keyword before POST.
    ====================================================================== */
    constructor(props) {
      super(props);
      this.state = {
        keyword: '',
        showConfirmation: false,
        showFormError: false,
      };
    }

    /*= =====================================================================
  // This will handle form validation and POST of add keyword.
  ====================================================================== */
  handleAddKeywordFormSubmit(e) {
    e.preventDefault();
    if (this.state.keyword.length < 4) {
      this.setState({
        showConfirmation: false,
        showFormError: true,
      });
      window.scrollTo(0, 0);
      return;
    }
    const formData = new FormData();
    formData.append('keywordLead', `${this.state.keyword}`);
    axios ({
      method: 'post',
      url: '/rest/admin/keyword/create_keyphrases',
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      if(response.data.Status === 1) {
        this.setState({
          showConfirmation: true,
          showFormError: false,
        });
      } else {
        this.setState({
          showConfirmation: false,
          showFormError: true,
        });
      }
      return;
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
      return;
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#/admin">Dashboard</a></li>
            <li className="breadcrumb-item active" aria-current="page">Add Keyword</li>
          </ol>
        </nav>
        <Row className="show-grid">
          <Col lg="6">
            { (this.state.showFormError)
              ? <div className="form-error-div">That keyword couldn't be added. Make sure it's at least 4 characters in length.</div>
              : <div></div> }
            { (this.state.showConfirmation)
              ? <a href="#/admin/marketinganalysis/results"><div className="form-success-div">Keyword successfully added. Click here to view your keywords.</div></a>
              : <div></div> }
            <form onSubmit={this.handleAddKeywordFormSubmit.bind(this)}>
              <div className="form-group">
                <label>What keyword would you like to analyze?</label>
                <input className="form-control" type="text" name="keyword" placeholder="Keyword" onChange={e => this.setState({ keyword: e.target.value })} />
              </div>
              <div className="form-group">
                <label>What area would you like to target?</label>
                  <select className="form-control" id="inputFieldArea" >
                    <option>City</option>
                    <option>State</option>
                    <option>United States</option>
                    <option>Worldwide</option>
                  </select>
                <br />
                <input type="text" className="form-control" id="inputFieldLocation" placeholder="Location" />
                <small id="emailHelp" className="form-text text-muted">Only if City or State was selected</small>
              </div>
              <div className="form-group">
                <label>What is the main driver of your analysis?</label>
                <input type="text" className="form-control" id="inputFieldDriver" placeholder="Driver" />
              </div>
              <div className="form-group">
                <label>Is this for Business to Consumer, Business to Business, or both?</label>
                <select className="form-control" id="inputFieldB2" >
                  <option>B2C</option>
                  <option>B2B</option>
                  <option>Both</option>
                </select>
              </div>
              <br />
              <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
            </form>
          </Col>
        </Row>
        <br />
        <br />
      </div>
    );
  }
}

export default AddKeyword;
