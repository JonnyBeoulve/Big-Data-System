import React, { Component } from 'react';

/*= =====================================================================
// This will display a loader that alerts the user that a transaction
// is happening with the server.
====================================================================== */
class Loader extends Component {
  render() {
    return (
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1" />
        <div className="sk-cube sk-cube2" />
        <div className="sk-cube sk-cube3" />
        <div className="sk-cube sk-cube4" />
        <div className="sk-cube sk-cube5" />
        <div className="sk-cube sk-cube6" />
        <div className="sk-cube sk-cube7" />
        <div className="sk-cube sk-cube8" />
        <div className="sk-cube sk-cube9" />
      </div>
    );
  }
}

export default Loader;
