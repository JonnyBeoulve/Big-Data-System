import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import Widget04 from './Widgets/Widget04';

/*======================================================================
// This is the My Campaign page where users can view a history of
// campaigns and their performance.
======================================================================*/
class MyCampaigns extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">My Campaigns</li>
          </ol>
        </nav>
        <Row className="show-grid">
          <Col lg="6">
            <h2 className="blue-background"> <i className="fa fa-bullseye"></i> Campaign List</h2>
            <p>Coming Soon...</p>
          </Col>
          <Col lg="6">
            <h2 className="blue-background"> <i className="fa fa-eye"></i> Campaign Overview</h2>
            <br />
            <Row className="show-grid">
              <Col sm="6" md="4">
                <Widget04 icon="icon-people" color="success" header="56,782" invert>Total Reach</Widget04>
              </Col>
              <Col sm="6" md="4">
                <Widget04 icon="icon-energy" color="success" header="32%" invert>Success Rate</Widget04>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm="6" md="4">
                <Widget04 icon="icon-basket-loaded" color="success" header="$650.00" invert>Total Investment</Widget04>
              </Col>
              <Col sm="6" md="4">
                <Widget04 icon="icon-user-follow" color="success" header="87.35" invert>Reach Per Dollar</Widget04>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MyCampaigns;
