import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import Widget04 from './Widgets/Widget04';

/*= =====================================================================
// This is the My Campaign page where users can view a history of
// campaigns and their performance.
====================================================================== */
class MyCampaigns extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#/admin">Dashboard</a></li>
            <li className="breadcrumb-item active" aria-current="page">My Campaigns</li>
          </ol>
        </nav>
        <Row className="show-grid">
          <Col lg="6">
            <h2 className="blue-background"> <i className="fa fa-bullseye" /> Campaign List</h2>
            <p>Coming Soon...</p>
          </Col>
          <Col lg="6">
            <h2 className="blue-background"> <i className="fa fa-eye" /> Campaign Overview</h2>
            <br />
            <Row className="show-grid">
              <Col sm="6" md="4">
                <Widget04 icon="icon-people" color="success" header="0" invert>Total Reach</Widget04>
              </Col>
              <Col sm="6" md="4">
                <Widget04 icon="icon-energy" color="success" header="0" invert>Success Rate</Widget04>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm="6" md="4">
                <Widget04 icon="icon-basket-loaded" color="success" header="$0.00" invert>Total Investment</Widget04>
              </Col>
              <Col sm="6" md="4">
                <Widget04 icon="icon-people" color="success" header="0" invert>Reach Per Dollar</Widget04>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MyCampaigns;
