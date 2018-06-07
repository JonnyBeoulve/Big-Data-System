import React, { Component } from 'react';

/*======================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
======================================================================*/
class MarketingAnalysisForm extends Component {

  render() {
    return (
      <div className="animated fadeIn">
          <h1 class="display-3">Marketing Campaign Success</h1>
          <p>Your campaign has been successfully created!</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#/mycampaigns" role="button">My Campaigns</a>
          </p>
      </div>
    )
  }
}

export default MarketingAnalysisForm;
