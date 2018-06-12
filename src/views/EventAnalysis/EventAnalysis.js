import React, { Component } from 'react';

/*======================================================================
// This is the Event Analysis page, a feature that will be added in a
// future update.
======================================================================*/
class EventAnalysis extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/admin">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Event Analysis</li>
          </ol>
        </nav>
        <p>Coming soon...</p>
      </div>
    )
  }
}

export default EventAnalysis;