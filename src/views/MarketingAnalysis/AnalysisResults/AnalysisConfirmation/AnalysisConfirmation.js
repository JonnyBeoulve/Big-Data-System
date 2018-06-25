import React, { Component } from 'react';

/*= =====================================================================
// This will confirm that a campaign has been created.
====================================================================== */
class AnalysisConfirmation extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <p>Your campaign has been successfully created!</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#/admin/mycampaigns" role="button">My Campaigns</a>
        </p>
      </div>
    );
  }
}

export default AnalysisConfirmation;
