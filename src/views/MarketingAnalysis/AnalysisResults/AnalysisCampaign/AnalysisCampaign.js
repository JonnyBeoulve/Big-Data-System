import React, { Component } from 'react';

/*= =====================================================================
// This will allow a user to define a campaign for a keyword.
====================================================================== */
class AnalysisCampaign extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <form onSubmit={this.props.campaignSubmit}>
          <label>Campaign field 1?</label>
          <input className="form-control" type="text" name="tbd" placeholder="TBD1" />
          <label>Campaign field 2?</label>
          <input className="form-control" type="text" name="tbd" placeholder="TBD2" />
          <label>Campaign field 3?</label>
          <input className="form-control" type="text" name="tbd" placeholder="TBD3" />
          <label>Campaign field 4?</label>
          <input className="form-control" type="text" name="tbd" placeholder="TBD4" />
          <br />
          <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AnalysisCampaign;
