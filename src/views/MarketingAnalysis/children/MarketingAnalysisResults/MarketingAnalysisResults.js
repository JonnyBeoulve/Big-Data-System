import React, { Component } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Col,
  Progress,
  Card,
  CardBody,
  CardColumns,
  CardHeader,
  CardTitle,
  Row,
  Table,
  Tooltip,
} from 'reactstrap';


var tableStyle = {
  height: '1000px'
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
    ]
  }]
};

/*======================================================================
// This will display the results of a user's marketing analysis form
// inputs.
======================================================================*/
class MarketingAnalysisResults extends Component {

  /*======================================================================
  // TooltipOpen will hold the state of whether or not a tooltip is
  // open for each trend, which occurs on user mouseover.
  ======================================================================*/
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: [false, false, false, false, false, false, false, false, false, false],
    };
  }

  /*======================================================================
  // Toggle the visible state of tooltips for a trend on mouseover.
  ======================================================================*/
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
                          <strong className="h4">Sentiment</strong>
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
                <Table hover responsive style={tableStyle}className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th>Trend</th>
                    <th>Relevance</th>
                    <th>Conversation</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr id="trendInfo00" className="results-table-item">
                    <td>
                      <div>Trend 1</div>
                      <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[0]} target="trendInfo00" toggle={() => { this.toggle(0)} }>
                        <Row>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                              <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Avram Tarasios</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Quintin Ed</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Eneas Kwadwo</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>agapetus Tadeas</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                                <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#000'}}}} />
                              </CardBody>
                            </Card>
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
                        <Row>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                              <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="6">
                            <Card>

                              <CardBody>
                                <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#000'}}}} />
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
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
                  <tr id="trendInfo02" className="results-table-item">
                    <td>
                      <div>Trend 3</div>
                      <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[2]} target="trendInfo02" toggle={() => { this.toggle(2)} }>
                        <Row>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                              <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                                <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#000'}}}} />
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Tooltip>
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
                  <tr id="trendInfo03" className="results-table-item">
                    <td>
                      <div>Trend 4</div>
                      <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[3]} target="trendInfo03" toggle={() => { this.toggle(3)} }>
                        <Row>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                              <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                                <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#000'}}}} />
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Tooltip>
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
                  <tr id="trendInfo04" className="results-table-item">
                    <td>
                      <div>Trend 5</div>
                      <Tooltip placement="bottom" isOpen={this.state.tooltipOpen[4]} target="trendInfo04" toggle={() => { this.toggle(4)} }>
                        <Row>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                              <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                                <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#000'}}}} />
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Tooltip>
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
                  <tr id="trendInfo05" className="results-table-item">
                    <td>
                      <div>Trend 6</div>
                      <Tooltip placement="top" isOpen={this.state.tooltipOpen[5]} target="trendInfo05" toggle={() => { this.toggle(5)} }>
                        <Row>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                              <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                                <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#000'}}}} />
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Tooltip>
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
                  <tr id="trendInfo06" className="results-table-item">
                    <td>
                      <div>Trend 7</div>
                      <Tooltip placement="top" isOpen={this.state.tooltipOpen[6]} target="trendInfo06" toggle={() => { this.toggle(6)} }>
                        <Row>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                              <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                                <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#000'}}}} />
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Tooltip>
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
                  <tr id="trendInfo07" className="results-table-item">
                    <td>
                      <div>Trend 8</div>
                      <Tooltip placement="top" isOpen={this.state.tooltipOpen[7]} target="trendInfo07" toggle={() => { this.toggle(7)} }>
                        <Row>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                              <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                                <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#000'}}}} />
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Tooltip>
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
                  <tr id="trendInfo08" className="results-table-item">
                    <td>
                      <div>Trend 9</div>
                      <Tooltip placement="top" isOpen={this.state.tooltipOpen[8]} target="trendInfo08" toggle={() => { this.toggle(8)} }>
                        <Row>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                              <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                                <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#000'}}}} />
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Tooltip>
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
                  <tr id="trendInfo09" className="results-table-item">
                    <td>
                      <div>Trend 10</div>
                      <Tooltip placement="top" isOpen={this.state.tooltipOpen[9]} target="trendInfo09" toggle={() => { this.toggle(9)} }>
                        <Row>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                              <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div>Yiorgos Avraamu</div>
                                    </td>
                                    <td>
                                      This is a post. This is a post. This is a post. This is a post. This is a post. This is a post.
                                    </td>
                                  </tr>
                                </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                                <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#000'}}}} />
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Tooltip>
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
