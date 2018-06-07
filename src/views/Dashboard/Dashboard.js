import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from 'reactstrap';

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
          <p class="lead">This is an alpha version of the new Cobia Systems web app. Enjoy!</p>
          <hr class="my-4" />
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#/marketinganalysis" role="button">Begin Marketing Analysis</a>
          </p>
        </div>
        <Row>
          <Col xs="6" sm="6" lg="3">
            <div className="social-box facebook">
              <i className="fa fa-facebook"></i>
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
              <i className="fa fa-twitter"></i>
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
              <i className="fa fa-linkedin"></i>
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
              <i className="fa fa-google-plus"></i>
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
      </div>
    )
  }
}

export default Dashboard;
