import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Col,
  Progress,
  Card,
  CardBody,
  Row,
  TabPane,
  Table,
  Tooltip,
} from 'reactstrap';
import FacebookLogo from '../../../../../../public/img/facebook-logo.png';
import InstagramLogo from '../../../../../../public/img/instagram-logo.png';
import LinkedInLogo from '../../../../../../public/img/linkedin-logo.png';
import PinterestLogo from '../../../../../../public/img/pinterest-logo.png';
import TwitterLogo from '../../../../../../public/img/twitter-logo.png';
import YouTubeLogo from '../../../../../../public/img/youtube-logo.png';

/*= =====================================================================
// Inline styling for the results table to prevent mutation of other
// tables.
====================================================================== */
const mainTableStyle = {
  height: '600px',
};

/*= =====================================================================
// Display results for the first driver query.
====================================================================== */
class DriverResults extends Component {
  /*= =====================================================================
    // ToggleTooltip and TooltipOpen will handle the display of tooltips
    // which house additional information for each post.
    ====================================================================== */
  constructor(props) {
    super(props);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      tooltipOpen: [false, false, false, false, false, false, false, false, false, false],
    };
  }

  /*= =====================================================================
    // Toggle the visible state of tooltips for a trend on mouseover.
    ====================================================================== */
  toggleTooltip(i) {
    const newArray = this.state.tooltipOpen.map((element, index) => (index === i ? !element : false));
    this.setState({
      tooltipOpen: newArray,
    });
  }

  /*= =====================================================================
    // Display a table with data results along with a tooltip that displays
    // upon hovering over a keyword.
    ====================================================================== */
  render() {
    return (
      <TabPane tabId="0">
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
                          <br />
                          <strong className="h4">{ this.props.driverData.length }</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Keyword</small>
                          <br />
                          <strong className="h4">{ this.props.keyword }</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12" md="6" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Area</small>
                          <br />
                          <strong className="h4">{ this.props.area }</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Location</small>
                          <br />
                          <strong className="h4">{ this.props.location }</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Driver</small>
                          <br />
                          <strong className="h4">{ this.props.driver }</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Business Type</small>
                          <br />
                          <strong className="h4">{ this.props.b2 }</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <br />
                <Table hover responsive style={mainTableStyle}className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="trend-column">Trend</th>
                      <th>Relevance</th>
                      <th>Conversation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="trend-column" id="trendInfo00">
                        <div><i className="fa fa-line-chart" /> { this.props.driverData[0].Description_enriched.keywords[0].text } </div>
                        <Tooltip placement="right" autohide={false} isOpen={this.state.tooltipOpen[0]} target="trendInfo00" toggle={() => { this.toggleTooltip(0); }}>
                          <Row>
                            <Col xs="6">
                              <Card>
                                <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={this.props.driverData[0].User.Profile.ImageURL} alt="Social media avatar" />
                                            <span className="tooltip-name">{ this.props.driverData[0].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.driverData[0].Description }</p>
                                          <p className="tooltip-text">{ this.props.driverData[0].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            <a href={this.props.driverData[0].User.Website.Facebook} target="_blank">
                                              <img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" />
                                            </a>
                                            <a href={this.props.driverData[0].User.Website.Instagram} target="_blank">
                                              <img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" />
                                            </a>
                                            <a href={this.props.driverData[0].User.Website.LinkedIn} target="_blank">
                                              <img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" />
                                            </a>
                                            <a href={this.props.driverData[0].User.Website.Pinterest} target="_blank">
                                              <img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" />
                                            </a>
                                            <a href={this.props.driverData[0].User.Website.Twitter} target="_blank">
                                              <img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" />
                                            </a>
                                            <a href={this.props.driverData[0].User.Website.Youtube} target="_blank">
                                              <img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" />
                                            </a>
                                          </div>
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
                                  <Doughnut
                                    data={{
                                      labels: [
                                          'Anger',
                                          'Disgust',
                                          'Fear',
                                          'Joy',
                                          'Sadness',
                                      ],
                                      datasets: [{
                                          data: [
                                          `${this.props.driverData[0].Description_enriched.emotion.document.emotion.anger * 100}`,
                                          `${this.props.driverData[0].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                          `${this.props.driverData[0].Description_enriched.emotion.document.emotion.fear * 100}`,
                                          `${this.props.driverData[0].Description_enriched.emotion.document.emotion.joy * 100}`,
                                          `${this.props.driverData[0].Description_enriched.emotion.document.emotion.sadness * 100}`,
                                          ],
                                      backgroundColor: [
                                          '#f86c6b',
                                          '#4dbd74',
                                          '#000',
                                          '#f8cb00',
                                          '#63c2de',
                                          ],
                                      }],
                                      }}
                                    options={{ legend: { labels: { fontColor: '#2a2c36' } } }}
                                  />
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Tooltip>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{this.props.driverData[0].Description_enriched.keywords[0].relevance * 100}%</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value={this.props.driverData[0].Description_enriched.keywords[0].relevance * 100} />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>1,273,182 Posts</strong>
                          </div>
                        </div>
                        <Progress className="progress-sm" color="success" value="100" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </TabPane>
    );
  }
}

export default DriverResults;
