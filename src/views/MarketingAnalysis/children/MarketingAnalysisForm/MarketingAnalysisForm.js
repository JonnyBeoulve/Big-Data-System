import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

/*= =====================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
====================================================================== */
class MarketingAnalysisForm extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row className="show-grid">
          <Col lg="6">
            { (this.props.keywordOrDriverError)
              ? <div className="form-error-div">Keyword and Driver 1 are required.</div>
              : <div></div> }
            { (this.props.locationError)
              ? <div className="form-error-div">A location is required if you selected City or State.</div>
              : <div></div> }
            <div className="form-group">
              <label>What keyword would you like to analyze?</label>
              <input type="text" className="form-control" id="inputFieldKeyword" placeholder="Keyword" onChange={this.props.keywordChange} />
              <small id="emailHelp" className="form-text text-muted">i.e. Hotel</small>
            </div>
            <div className="form-group">
              <label>What area would you like to target?</label>
              <select className="form-control" id="inputFieldArea" onChange={this.props.areaChange} >
                <option>City</option>
                <option>State</option>
                <option>United States</option>
                <option>Worldwide</option>
              </select>
              <br />
              <input type="text" className="form-control" id="inputFieldLocation" placeholder="Location" onChange={this.props.locationChange} />
              <small id="emailHelp" className="form-text text-muted">Only if City or State was selected</small>
            </div>
            <div className="form-group">
              <label>What are the main drivers of your analysis?</label>
              <input type="text" className="form-control" id="inputFieldDriver1" placeholder="Driver 1" onChange={this.props.driver1Change} />
              <br />
              <input type="text" className="form-control" id="inputFieldDriver2" placeholder="Driver 2" onChange={this.props.driver2Change} />
              <br />
              <input type="text" className="form-control" id="inputFieldDriver3" placeholder="Driver 3" onChange={this.props.driver3Change} />
              <br />
              <input type="text" className="form-control" id="inputFieldDriver4" placeholder="Driver 4" onChange={this.props.driver4Change} />
              <br />
              <input type="text" className="form-control" id="inputFieldDriver5" placeholder="Driver 5" onChange={this.props.driver5Change} />
            </div>
            <div className="form-group">
              <label>Is this for Business to Consumer, Business to Business, or both?</label>
              <select className="form-control" id="inputFieldB2" onChange={this.props.b2Change} >
                <option>B2C</option>
                <option>B2B</option>
                <option>Both</option>
              </select>
            </div>
            <button className="btn btn-primary" onClick={this.props.handleFormSubmit}>Submit</button>
          </Col>
        </Row>
        <br />
        <br />
      </div>
    );
  }
}

export default MarketingAnalysisForm;
