import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

/*======================================================================
// This is the help page where users can learn more about how to use
// Cobia Systems effectively.
======================================================================*/
class MyCampaigns extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row className="show-grid">
          <Col lg="6">
            <h2 className="blue-background"> <i className="fa fa-bullseye"></i> Campaign List</h2>
            <p>Coming Soon...</p>
          </Col>
          <Col lg="6">
            <h2 className="blue-background"> <i className="fa fa-eye"></i> Campaign Overview</h2>
            <p>Coming Soon...</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MyCampaigns;
