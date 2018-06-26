import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

import Widget04 from './Widget04';

/*= =====================================================================
// This will display a list of keywords that the user has input in the
// Add Keyword section.
====================================================================== */
class AnalysisKeywords extends Component {

  hello() {
    console.log("Hello!");
  }

  render() {

/*         const driver = [`${this.props.driver1}`, `${this.props.driver2}`, `${this.props.driver3}`, `${this.props.driver4}`, `${this.props.driver5}`];
    
        return (
          <div className="animated fadeIn">
            <Nav tabs>
              { driver.map((driverName, driverIndex) => (<DriverTab
                tabName={driverName}
                tabNum={driverIndex}
                activeDriver={this.state.activeTab}
                toggleDriverTab={this.toggleTab}
              />)) } */

    const keywords = this.props.allKeywords;

    return (
      <div className="animated fadeIn">
        <div className="keywords-flexbox">
            { keywords.map((keyword, keywordIndex) => (<Widget04
                className="widget-button"
                icon="icon-speedometer"
                color="info"
                header={keyword.keyword}
                value="25"
                invert
                onClick={this.hello}
              >
              Keyword
              </Widget04>
            ))}
        </div>
      </div>
    );
  }
}

export default AnalysisKeywords;
