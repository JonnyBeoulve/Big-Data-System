import React, { Component } from 'react';

/*= =====================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
====================================================================== */
class MarketingAnalysisForm extends Component {
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

export default MarketingAnalysisForm;
