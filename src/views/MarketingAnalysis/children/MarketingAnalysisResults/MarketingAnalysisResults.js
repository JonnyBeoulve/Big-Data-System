import React, { Component } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Row,
  Col,
  Progress,
  Card,
  CardBody,
  CardTitle,
  Table,
  Tooltip,
} from 'reactstrap';


const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

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
    ]
  }]
};

/*======================================================================
// This will display the results of a user's marketing analysis form
// inputs.
======================================================================*/
class MarketingAnalysisResults extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: [false, false],
    };
  }

  toggle(i) {
    const newArray = this.state.tooltipOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      tooltipOpen: newArray
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
          <h1 class="display-3">Marketing Analysis Results</h1>
          <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col xs="12" md="6" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Total Posts</small>
                          <br/>
                          <strong className="h4">3,283,823</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Keyword</small>
                          <br/>
                          <strong className="h4">Keyword</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12" md="6" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Area</small>
                          <br/>
                          <strong className="h4">Area</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Driver</small>
                          <br/>
                          <strong className="h4">Driver</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Primary Sentiment</small>
                          <br/>
                          <strong className="h4">Primary Sentiment</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Other</small>
                          <br/>
                          <strong className="h4">Other</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <br/>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th>Keyword</th>
                    <th>Relevance</th>
                    <th>Conversation</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr id="trendInfo00" className="results-table-item">
                    <td>
                      <div>Trend 1</div>
                      <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[0]} target="trendInfo00" toggle={() => { this.toggle(0)} }>
                        <Row className="show-grid">
                          <Col lg="6">
                            <h2>Social Media Posts</h2>
                            <p>Social media post 1</p>
                            <p>Social media post 2</p>
                            <p>Social media post 3</p>
                            <p>Social media post 4</p>
                            <p>Social media post 5</p>
                          </Col>
                          <Col lg="6">
                            <h2>Sentiment</h2>
                            <div className="chart-wrapper">
                              <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#fff'}}}} />
                            </div>
                          </Col>
                          </Row>
                      </Tooltip>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="success" value="50"/>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>1,273,182 Posts</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="success" value="100"/>
                    </td>
                  </tr>
                  <tr id="trendInfo01" className="results-table-item">
                    <td>
                      <div>Trend 2</div>
                      <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[1]} target="trendInfo01" toggle={() => { this.toggle(1)} }>
                        Hello world!
                      </Tooltip>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="info" value="43"/>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>1,183,182 Posts</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="info" value="93"/>
                    </td>
                  </tr>
                  <tr className="results-table-item">
                    <td>
                      <div>Trend 3</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>40%</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="warning" value="40"/>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>982,195 Posts</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="warning" value="77"/>
                    </td>
                  </tr>
                  <tr className="results-table-item">
                    <td>
                      <div>Trend 4</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>36%</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="danger" value="36"/>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>886,909 Posts</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="danger" value="70"/>
                    </td>
                  </tr>
                  <tr className="results-table-item">
                    <td>
                      <div>Trend 5</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>34%</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="success" value="34"/>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>801,118 Posts</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="success" value="63"/>
                    </td>
                  </tr>
                  <tr className="results-table-item">
                    <td>
                      <div>Trend 6</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>31%</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="info" value="31"/>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>769,939 Posts</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="info" value="60"/>
                    </td>
                  </tr>
                  <tr className="results-table-item">
                    <td>
                      <div>Trend 7</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>30%</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="warning" value="30"/>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>702,812 Posts</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="warning" value="55"/>
                    </td>
                  </tr>
                  <tr className="results-table-item">
                    <td>
                      <div>Trend 8</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>27%</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="danger" value="27"/>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>659,001 Posts</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="danger" value="52"/>
                    </td>
                  </tr>
                  <tr className="results-table-item">
                    <td>
                      <div>Trend 9</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>26%</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="success" value="26"/>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>650,999 Posts</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="success" value="51"/>
                    </td>
                  </tr>
                  <tr className="results-table-item">
                    <td>
                      <div>Trend 10</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>19%</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="info" value="19"/>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>498,835 Posts</strong>
                        </div>
                      </div>
                      <Progress className="progress-sm" color="info" value="39"/>
                    </td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <button type="submit" class="btn btn-primary" onClick={ this.props.handleSelectionSubmit }>Create Campaign</button>
        <br />
        <br />
      </div>
    )
  }
}

export default MarketingAnalysisResults;
