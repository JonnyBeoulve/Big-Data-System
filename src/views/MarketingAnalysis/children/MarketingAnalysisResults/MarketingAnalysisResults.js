import React, { Component } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
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


const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

/*======================================================================
// Sparkline data and options for trend horizontal bar chart.
======================================================================*/
const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Trend 1', 'Trend 2', 'Trend 3', 'Trend 4', 'Trend 5', 'Trend 6', 'Trend 7'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label
      }
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [{
      display: false,
    }],
    yAxes: [{
      display: false,
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  },
  legend: {
    display: false
  }
};

/*======================================================================
// Chart.js data and labels for sentiment doughnut chart.
======================================================================*/
const doughnut = {
  labels: [
    'Disgust',
    'Joy',
    'Anger',
    'Fear',
    'Sadness'
  ],
  datasets: [{
    data: [
      41, 
      9, 
      22, 
      13, 
      15
    ],
    backgroundColor: [
      '#4dbd74',
      '#f8cb00',
      '#f86c6b',
      "#000",
      '#63c2de'
    ],
    hoverBackgroundColor: [
      '#aaa',
      '#aaa',
      '#aaa',
      '#aaa',
      '#aaa'
    ]
  }]
};

/*======================================================================
// This will display the results of a user's marketing analysis form
// inputs. Graphs and more will be displayed to the user.
======================================================================*/
class MarketingAnalysisResults extends Component {

  render() {
    return (
      <div className="animated fadeIn">
          <h1 class="display-3">Marketing Analysis Results</h1>
          <Row>
          <Col>
            <Card>
              <CardHeader>
                Top Trends
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="6" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout">
                          <small className="text-muted">Total Posts</small>
                          <br/>
                          <strong className="h4">3,283,823</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout">
                          <small className="text-muted">Keyword</small>
                          <br/>
                          <strong className="h4">Keyword</strong>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0"/>
                    <ul className="horizontal-bars">
                      <li>
                        <div className="title">
                          Trend 1
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="34"/>
                          <Progress className="progress-xs" color="danger" value="78"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Trend 2
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="56"/>
                          <Progress className="progress-xs" color="danger" value="94"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Trend 3
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="12"/>
                          <Progress className="progress-xs" color="danger" value="67"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Trend 4
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="43"/>
                          <Progress className="progress-xs" color="danger" value="91"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Trend 5
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="22"/>
                          <Progress className="progress-xs" color="danger" value="73"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Trend 6
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="53"/>
                          <Progress className="progress-xs" color="danger" value="82"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Trend 7
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="9"/>
                          <Progress className="progress-xs" color="danger" value="69"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Trend 8
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="9"/>
                          <Progress className="progress-xs" color="danger" value="69"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Trend 9
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="9"/>
                          <Progress className="progress-xs" color="danger" value="69"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Trend 10
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="9"/>
                          <Progress className="progress-xs" color="danger" value="69"/>
                        </div>
                      </li>
                      <li className="legend">
                        <Badge pill color="info"></Badge>
                        <small>Relevance</small>
                        <Badge pill color="danger"></Badge>
                        <small>Posts</small>
                      </li>
                    </ul>
                  </Col>
                  <Col xs="12" md="6" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout">
                          <small className="text-muted">Area</small>
                          <br/>
                          <strong className="h4">Area</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout">
                          <small className="text-muted">Driver</small>
                          <br/>
                          <strong className="h4">Driver</strong>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0"/>
                    <ul className="horizontal-bars type-2">
                      <li>
                        <i className="icon-user"></i>
                        <span className="title">Male</span>
                        <span className="value">43%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="warning" value="43"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-user-female"></i>
                        <span className="title">Female</span>
                        <span className="value">37%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="warning" value="37"/>
                        </div>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <i className="icon-social-twitter"></i>
                        <span className="title">Twitter</span>
                        <span className="value">191,235 <span className="text-muted small">(66%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="56"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-facebook"></i>
                        <span className="title">Facebook</span>
                        <span className="value">51,223 <span className="text-muted small">(23%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="15"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-linkedin"></i>
                        <span className="title">LinkedIn</span>
                        <span className="value">37,564 <span className="text-muted small">(11%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="11"/>
                        </div>
                      </li>
                    </ul>
                  </Col>
                  <Col xs="12" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout">
                          <small className="text-muted">Primary Sentiment</small>
                          <br/>
                          <strong className="h4">Primary Sentiment</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout">
                          <small className="text-muted">Other</small>
                          <br/>
                          <strong className="h4">Other</strong>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0"/>
                    <div className="chart-wrapper">
                      <Doughnut data={doughnut}/>
                    </div>
                  </Col>
                </Row>
                <br/>
              </CardBody>
            </Card>
          </Col>
        </Row>
          <button type="submit" class="btn btn-primary" onClick={ this.props.handleSelectionSubmit }>Create Campaign</button>
      </div>
    )
  }
}

export default MarketingAnalysisResults;
