import React, { Component } from 'react';

/*======================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
======================================================================*/
class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div class="jumbotron">
          <h1 class="display-3">Welcome to Cobia Systems</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#/marketinganalysis" role="button">Get Started</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Dashboard;
