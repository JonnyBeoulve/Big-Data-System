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
    return (
      <div className="animated fadeIn">
          <Row>
            <Col xs="12" sm="6" lg="3">
              <Widget04 className="widget-button" icon="icon-speedometer" color="info" header="Hotel" value="25" invert onClick={this.hello} >Keyword</Widget04>
            </Col>
          </Row>
      </div>
    );
  }
}

export default AnalysisKeywords;
