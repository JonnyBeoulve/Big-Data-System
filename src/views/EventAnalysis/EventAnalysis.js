import React, { Component } from 'react';

/*======================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
======================================================================*/
class EventAnalysis extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Event Analysis</li>
          </ol>
        </nav>
        <p>Coming soon...</p>
      </div>
    )
  }
}

export default EventAnalysis;