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
            <label for="exampleInputEmail1">What keyword would you like to analyze?</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="I.E. Hotel" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Location</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="I.E. Seattle" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">What are the main drivers of your analysis?</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Driver #1" />
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Driver #2" />
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Driver #3" />
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Driver #4" />
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Driver #5" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Is this for Business to Consumer, Business to Business, or both?</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="I.E. Seattle" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default EventAnalysis;
