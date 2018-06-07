import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';
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
// Fake data for the social box.
======================================================================*/
const socialBoxData = [
  {data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook'},
  {data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter'},
  {data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin'},
  {data: [35, 23, 56, 22, 97, 23, 64], label: 'google'}
];

/*======================================================================
// Options for the social chart.
======================================================================*/
const socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

/*======================================================================
// Create social box data.
======================================================================*/
const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      }
    ]
  };
  return () => data;
};

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
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#/marketinganalysis" role="button">Get Started</a>
          </p>
        </div>
        <Row>
          <Col xs="6" sm="6" lg="3">
            <div className="social-box facebook">
              <i className="fa fa-facebook"></i>
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90}/>
              </div>
              <ul>
                <li>
                  <strong>89k</strong>
                  <span>friends</span>
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
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90}/>
              </div>
              <ul>
                <li>
                  <strong>973k</strong>
                  <span>followers</span>
                </li>
                <li>
                  <strong>1.792</strong>
                  <span>tweets</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs="6" sm="6" lg="3">

            <div className="social-box linkedin">
              <i className="fa fa-linkedin"></i>
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(2)} options={socialChartOpts} height={90}/>
              </div>
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
              <div className="chart-wrapper">
                <Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90}/>
              </div>
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
