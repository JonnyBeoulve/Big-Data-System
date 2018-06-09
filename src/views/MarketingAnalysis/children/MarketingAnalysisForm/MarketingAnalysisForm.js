import React, { Component } from 'react';

/*======================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
======================================================================*/
class MarketingAnalysisForm extends Component {

  render() {
    return (
      <div className="animated fadeIn">
          <form>
          <div class="form-group">
            <label for="inputKeyword">What keyword would you like to analyze?</label>
            <input type="text" class="form-control" id="inputKeywordField" aria-describedby="emailHelp" placeholder="Keyword" />
            <small id="emailHelp" class="form-text text-muted">i.e. Hotel</small>
          </div>
          <div class="form-group">
            <label for="inputArea">What area would you like to target?</label>
              <select class="form-control" id="inputAreaField">
                <option>City</option>
                <option>State</option>
                <option>United States</option>
                <option>Worldwide</option>
              </select>
              <br />
              <input type="text" class="form-control" id="inputLocation" placeholder="Location" />
              <small id="emailHelp" class="form-text text-muted">Only if City or State was selected</small>
          </div>
          <div class="form-group">
            <label for="inputDrivers">What are the main drivers of your analysis?</label>
            <input type="text" class="form-control" id="inputDriversField1" placeholder="Driver 1" />
            <br />
            <input type="text" class="form-control" id="inputDriversField2" placeholder="Driver 2" />
            <br />
            <input type="text" class="form-control" id="inputDriversField3" placeholder="Driver 3" />
            <br />
            <input type="text" class="form-control" id="inputDriversField4" placeholder="Driver 4" />
            <br />
            <input type="text" class="form-control" id="inputDriversField5" placeholder="Driver 5" />
          </div>
          <div class="form-group">
            <label for="inputB2">Is this for Business to Consumer, Business to Business, or both?</label>
              <select class="form-control" id="inputB2Field">
                <option>B2C</option>
                <option>B2B</option>
                <option>Both</option>
              </select>
          </div>
          <button type="submit" class="btn btn-primary" onClick={this.props.handleFormSubmit}>Submit</button>
        </form>
        <br />
        <br />
      </div>
    )
  }
}

export default MarketingAnalysisForm;
