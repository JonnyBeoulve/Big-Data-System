import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import Widget02 from './Widgets/Widget02';

/*= =====================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
====================================================================== */
class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active"><a href="#/admin">Dashboard</a></li>
          </ol>
        </nav>
        <div className="jumbotron">
          <h1 className="display-3">Welcome to Cobia Systems</h1>
          <p className="lead">This is an alpha version of the new Cobia Systems web app. Enjoy!</p>
          <hr className="my-4" />
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#/admin/marketinganalysis" role="button">Begin Marketing Analysis</a>
          </p>
        </div>
        <Row>
          <Col xs="6" sm="6" lg="3">
            <div className="social-box facebook">
              <i className="fa fa-facebook" />
              <ul>
                <li>
                  <strong>89k</strong>
                  <span>likes</span>
                </li>
                <li>
                  <strong>459</strong>
                  <span>feeds</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs="6" sm="6" lg="3">
            <div className="social-box twitter">
              <i className="fa fa-twitter" />
              <ul>
                <li>
                  <strong>973k</strong>
                  <span>followers</span>
                </li>
                <li>
                  <strong>104</strong>
                  <span>tweets</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs="6" sm="6" lg="3">

            <div className="social-box linkedin">
              <i className="fa fa-linkedin" />
              <ul>
                <li>
                  <strong>500+</strong>
                  <span>contacts</span>
                </li>
                <li>
                  <strong>292</strong>
                  <span>feeds</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <div className="social-box google-plus">
              <i className="fa fa-google-plus" />
              <ul>
                <li>
                  <strong>894</strong>
                  <span>followers</span>
                </li>
                <li>
                  <strong>92</strong>
                  <span>circles</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="5" mainText="Analyses Performed" icon="fa fa-bar-chart" color="primary" variant="2" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="0" mainText="Reports Performed" icon="fa fa-bar-chart" color="primary" variant="2" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <a href="#/admin/mycampaigns"><Widget02 header="2" mainText="Campaigns Created" icon="fa fa-bullseye" color="warning" variant="2" /></a>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <a href="#/admin/myprofile"><Widget02 header="Configure" mainText="Profile" icon="fa fa-user-circle" color="danger" variant="2" /></a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
