import React, { Component } from 'react';
import { 
  Bar, 
  Doughnut, 
  Line 
} from 'react-chartjs-2';
import {
  Col,
  Progress,
  Card,
  CardBody,
  CardColumns,
  CardHeader,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Table,
  Tooltip,
} from 'reactstrap';
import classnames from 'classnames';
import placeholderAvatar from '../../../../../public/img/avatars/placeholder-avatar.png';

/*======================================================================
// Inline styling for this specific table.
======================================================================*/
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
    this.toggleTab = this.toggleTab.bind(this);
    this.state = {
      activeTab: '1',
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

  /*======================================================================
  // This will handle toggling between up to five handler tabs.
  ======================================================================*/
  toggleTab(i) {
    if (this.state.activeTab !== i) {
      this.setState({
        activeTab: i
      });
    }
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Nav tabs>
          <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggleTab('1'); }}>
                  Driver 1
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggleTab('2'); }}>
                  Driver 2
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggleTab('3'); }}>
                  Driver 3
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggleTab('4'); }}>
                  Driver 4
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '5' })} onClick={() => { this.toggleTab('5'); }}>
                  Driver 5
              </NavLink>
          </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
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
                              <strong className="h4">{this.props.keyword}</strong>
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
                              <strong className="h4">{this.props.area}</strong>
                            </div>
                          </Col>
                          <Col sm="6">
                            <div className="callout callout-info">
                              <small className="text-muted">Location</small>
                              <br/>
                              <strong className="h4">{this.props.location}</strong>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs="12" xl="4">
                        <Row>
                          <Col sm="6">
                            <div className="callout callout-info">
                              <small className="text-muted">Driver</small>
                              <br/>
                              <strong className="h4">{this.props.driver1}</strong>
                            </div>
                          </Col>
                          <Col sm="6">
                          <div className="callout callout-info">
                              <small className="text-muted">Business Type</small>
                              <br/>
                              <strong className="h4">{this.props.b2}</strong>
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
                      <tr>
                        <td id="trendInfo00">
                          <div><i className="fa fa-line-chart"></i> Trend 1</div>
                          <Tooltip placement="right" isOpen={this.state.tooltipOpen[0]} target="trendInfo00" toggle={() => { this.toggle(0)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Yiorgos Avraamu</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend 1. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Avram Tarasios</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Quintin Ed</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Eneas Kwadwo</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Agapetus Tadeas</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                    </tbody>
                                    </Table>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                    <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#2a2c36'}}}} />
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
                      <tr>
                        <td id="trendInfo01" >
                          <div><i className="fa fa-line-chart"></i> Trend 2</div>
                          <Tooltip placement="right" isOpen={this.state.tooltipOpen[1]} target="trendInfo01" toggle={() => { this.toggle(1)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                  <tbody>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Yiorgos Avraamu</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend 2. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Avram Tarasios</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Quintin Ed</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Eneas Kwadwo</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Agapetus Tadeas</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                    </tbody>
                                    </Table>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col xs="6">
                                <Card>

                                  <CardBody>
                                    <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#2a2c36'}}}} />
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
                          <Progress className="progress-sm" color="success" value="43"/>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>1,183,182 Posts</strong>
                            </div>
                          </div>
                          <Progress className="progress-sm" color="success" value="93"/>
                        </td>
                      </tr>
                      <tr>
                        <td id="trendInfo02">
                          <div><i className="fa fa-line-chart"></i> Trend 3</div>
                          <Tooltip placement="right" isOpen={this.state.tooltipOpen[2]} target="trendInfo02" toggle={() => { this.toggle(2)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                  <tbody>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Yiorgos Avraamu</span></div></td>
                                        <td  className="tooltip-social-text">This is a post in trend 3. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Avram Tarasios</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Quintin Ed</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Eneas Kwadwo</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Agapetus Tadeas</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                    </tbody>
                                    </Table>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                    <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#2a2c36'}}}} />
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
                          <Progress className="progress-sm" color="success" value="40"/>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>982,195 Posts</strong>
                            </div>
                          </div>
                          <Progress className="progress-sm" color="success" value="77"/>
                        </td>
                      </tr>
                      <tr>
                        <td id="trendInfo03">
                          <div><i className="fa fa-line-chart"></i> Trend 4</div>
                          <Tooltip placement="right" isOpen={this.state.tooltipOpen[3]} target="trendInfo03" toggle={() => { this.toggle(3)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                  <tbody>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Yiorgos Avraamu</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend 4. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Avram Tarasios</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Quintin Ed</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Eneas Kwadwo</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Agapetus Tadeas</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                    </tbody>
                                    </Table>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                    <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#2a2c36'}}}} />
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
                          <Progress className="progress-sm" color="success" value="36"/>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>886,909 Posts</strong>
                            </div>
                          </div>
                          <Progress className="progress-sm" color="success" value="70"/>
                        </td>
                      </tr>
                      <tr>
                        <td id="trendInfo04">
                          <div><i className="fa fa-line-chart"></i> Trend 5</div>
                          <Tooltip placement="right" isOpen={this.state.tooltipOpen[4]} target="trendInfo04" toggle={() => { this.toggle(4)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                  <tbody>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Yiorgos Avraamu</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend 5. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Avram Tarasios</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Quintin Ed</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Eneas Kwadwo</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Agapetus Tadeas</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                    </tbody>
                                    </Table>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                    <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#2a2c36'}}}} />
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
                      <tr>
                        <td id="trendInfo05">
                          <div><i className="fa fa-line-chart"></i> Trend 6</div>
                          <Tooltip placement="right" isOpen={this.state.tooltipOpen[5]} target="trendInfo05" toggle={() => { this.toggle(5)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                  <tbody>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Yiorgos Avraamu</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend 6. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Avram Tarasios</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Quintin Ed</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Eneas Kwadwo</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Agapetus Tadeas</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                    </tbody>
                                    </Table>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                    <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#2a2c36'}}}} />
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
                          <Progress className="progress-sm" color="success" value="31"/>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>769,939 Posts</strong>
                            </div>
                          </div>
                          <Progress className="progress-sm" color="success" value="60"/>
                        </td>
                      </tr>
                      <tr>
                        <td id="trendInfo06">
                          <div><i className="fa fa-line-chart"></i> Trend 7</div>
                          <Tooltip placement="right" isOpen={this.state.tooltipOpen[6]} target="trendInfo06" toggle={() => { this.toggle(6)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                  <tbody>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Yiorgos Avraamu</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend 7. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Avram Tarasios</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Quintin Ed</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Eneas Kwadwo</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Agapetus Tadeas</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                    </tbody>
                                    </Table>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                    <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#2a2c36'}}}} />
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
                          <Progress className="progress-sm" color="success" value="30"/>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>702,812 Posts</strong>
                            </div>
                          </div>
                          <Progress className="progress-sm" color="success" value="55"/>
                        </td>
                      </tr>
                      <tr>
                        <td id="trendInfo07">
                          <div><i className="fa fa-line-chart"></i> Trend 8</div>
                          <Tooltip placement="right" isOpen={this.state.tooltipOpen[7]} target="trendInfo07" toggle={() => { this.toggle(7)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                  <tbody>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Yiorgos Avraamu</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend 8. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Avram Tarasios</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Quintin Ed</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Eneas Kwadwo</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Agapetus Tadeas</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                    </tbody>
                                    </Table>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                    <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#2a2c36'}}}} />
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
                          <Progress className="progress-sm" color="success" value="27"/>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>659,001 Posts</strong>
                            </div>
                          </div>
                          <Progress className="progress-sm" color="success" value="52"/>
                        </td>
                      </tr>
                      <tr>
                        <td id="trendInfo08">
                          <div><i className="fa fa-line-chart"></i> Trend 9</div>
                          <Tooltip placement="right" isOpen={this.state.tooltipOpen[8]} target="trendInfo08" toggle={() => { this.toggle(8)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                  <tbody>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Yiorgos Avraamu</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend 9. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Avram Tarasios</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Quintin Ed</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Eneas Kwadwo</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Agapetus Tadeas</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                    </tbody>
                                    </Table>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                    <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#2a2c36'}}}} />
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
                      <tr>
                        <td id="trendInfo09">
                          <div><i className="fa fa-line-chart"></i> Trend 10</div>
                          <Tooltip placement="right" isOpen={this.state.tooltipOpen[9]} target="trendInfo09" toggle={() => { this.toggle(9)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table responsive className="table-outline mb-0 d-none d-sm-table">
                                  <tbody>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Yiorgos Avraamu</span></div></td>
                                        <td className="tooltip-social-text">This is a post in trend 10. This is a post. This is a post. This is a post. This is a post. This is a post.#post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Avram Tarasios</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Quintin Ed</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Eneas Kwadwo</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                      <tr><td><div><img className="tooltip-social-avatar" src={placeholderAvatar} alt="Social media avatar"></img><span className="tooltip-social-name">Agapetus Tadeas</span></div></td>
                                        <td className="tooltip-social-text">This is a post. This is a post. This is a post. This is a post. This is a post. This is a post. #post #trend</td></tr>
                                    </tbody>
                                    </Table>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                    <Doughnut data={doughnut} options= {{legend: {labels: {fontColor: '#2a2c36'}}}} />
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
                          <Progress className="progress-sm" color="success" value="19"/>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>498,835 Posts</strong>
                            </div>
                          </div>
                          <Progress className="progress-sm" color="success" value="39"/>
                        </td>
                      </tr>
                      </tbody>
                    </Table>
                    <br />
                    <button type="submit" class="btn btn-primary" onClick={ this.props.handleSelectionSubmit }>Create Campaign</button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
        </TabPane>
        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2">
            <p>Working!</p>
          </TabPane>
        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="3">
            <p>Working!</p>
          </TabPane>
        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="4">
            <p>Working!</p>
          </TabPane>
        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="5">
            <p>Working!</p>
          </TabPane>
        </TabContent>
        <br />
        <br />
      </div>
    )
  }
}

export default MarketingAnalysisResults;
