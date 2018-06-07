import React, { Component } from 'react';

/*======================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
======================================================================*/
class EventAnalysis extends Component {
  render() {
    return (
      <div className="animated fadeIn">
          <h1 class="display-3">Event Analysis</h1>
          <form>
          <div class="form-group">
            <label for="inputKeyword">What event would you like to analyze?</label>
            <input type="text" class="form-control" id="inputEventField" aria-describedby="emailHelp" placeholder="Keyword" />
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
          </div>
          <div class="form-group">
            <label for="inputDrivers">What are the main drivers of your analysis?</label>
            <input type="text" class="form-control" id="inputDriversField1" placeholder="Driver #1" />
            <input type="text" class="form-control" id="inputDriversField2" placeholder="Driver #2" />
            <input type="text" class="form-control" id="inputDriversField3" placeholder="Driver #3" />
            <input type="text" class="form-control" id="inputDriversField4" placeholder="Driver #4" />
            <input type="text" class="form-control" id="inputDriversField5" placeholder="Driver #5" />
          </div>
          <div class="form-group">
            <label for="inputB2">Is this for Business to Consumer, Business to Business, or both?</label>
              <select class="form-control" id="inputB2Field">
                <option>B2C</option>
                <option>B2B</option>
                <option>Both</option>
              </select>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default EventAnalysis;
