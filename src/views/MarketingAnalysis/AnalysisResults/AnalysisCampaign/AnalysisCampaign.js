import React, { Component } from 'react';

/*= =====================================================================
// This will allow a user to define a campaign for a keyword.
====================================================================== */
class AnalysisCampaign extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <form onSubmit={this.props.campaignSubmit}>
          <label>Campaign Name</label>
          <input className="form-control" type="text" name="tbd" placeholder="TBD1" />
          <label>Target Keyword</label>
          <input className="form-control" type="text" name="tbd" placeholder="TBD2" />
          <label>Campaign Landing Page</label>
          <input className="form-control" type="text" name="tbd" placeholder="TBD3" />
          <label>Campagn Text</label>
          <input className="form-control" type="text" name="tbd" placeholder="TBD4" />
          <br />
          <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AnalysisCampaign;
