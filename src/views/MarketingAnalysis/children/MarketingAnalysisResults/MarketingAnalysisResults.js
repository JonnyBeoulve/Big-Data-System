import React, { Component } from 'react';
import { 
  Doughnut, 
} from 'react-chartjs-2';
import {
  Col,
  Progress,
  Card,
  CardBody,
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
import FacebookLogo from '../../../../../public/img/facebook-logo.png';
import InstagramLogo from '../../../../../public/img/instagram-logo.png';
import LinkedInLogo from '../../../../../public/img/linkedin-logo.png';
import PinterestLogo from '../../../../../public/img/pinterest-logo.png';
import TwitterLogo from '../../../../../public/img/twitter-logo.png';
import YouTubeLogo from '../../../../../public/img/youtube-logo.png';

/*======================================================================
// Inline styling for the results table.
======================================================================*/
var mainTableStyle = {
  height: '600px',
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
          <TabContent activeTab={ this.state.activeTab }>
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
                              <strong className="h4">{ this.props.resultsData.length }</strong>
                            </div>
                          </Col>
                          <Col sm="6">
                            <div className="callout callout-info">
                              <small className="text-muted">Keyword</small>
                              <br/>
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
                              <br/>
                              <strong className="h4">{ this.props.area }</strong>
                            </div>
                          </Col>
                          <Col sm="6">
                            <div className="callout callout-info">
                              <small className="text-muted">Location</small>
                              <br/>
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
                              <br/>
                              <strong className="h4">{ this.props.driver1 }</strong>
                            </div>
                          </Col>
                          <Col sm="6">
                          <div className="callout callout-info">
                              <small className="text-muted">Business Type</small>
                              <br/>
                              <strong className="h4">{ this.props.b2 }</strong>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <br/>
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
                            <div><i className="fa fa-line-chart"></i> { this.props.resultsData[0].Description_enriched.keywords[0].text } </div>
                            <Tooltip placement="right" autohide={ false } isOpen={ this.state.tooltipOpen[0] } target="trendInfo00" toggle={() => { this.toggle(0)} }>
                              <Row>
                                <Col xs="6">
                                  <Card>
                                    <CardBody>
                                    <Table borderless className="mb-0 d-none d-sm-table">
                                      <tbody>
                                        <tr>
                                          <td className="tooltip-avatar-and-name">
                                            <div>
                                              <img className="tooltip-avatar" src={ this.props.resultsData[0].User.Profile.ImageURL } alt="Social media avatar"></img>
                                              <span className="tooltip-name">{ this.props.resultsData[0].User.Name }</span>
                                            </div>
                                          </td>
                                          <td>
                                            <p className="tooltip-text">{ this.props.resultsData[0].Description }</p>
                                            <p className="tooltip-text">{ this.props.resultsData[0].User.Followers.NetworkCount } Followers</p>
                                            <div className="tooltip-social-logos">
                                              <a href={ this.props.resultsData[0].User.Website.Facebook } target="_blank">
                                                  <img className="tooltip-social-logo" src={ FacebookLogo } alt="Facebook logo"></img>
                                                </a>
                                                <a href={ this.props.resultsData[0].User.Website.Instagram } target="_blank">
                                                  <img className="tooltip-social-logo" src={ InstagramLogo } alt="Instagram logo"></img>
                                                </a>
                                                <a href={ this.props.resultsData[0].User.Website.LinkedIn } target="_blank">
                                                  <img className="tooltip-social-logo" src={ LinkedInLogo } alt="LinkedIn logo"></img>
                                                </a>
                                                <a href={ this.props.resultsData[0].User.Website.Pinterest } target="_blank">
                                                  <img className="tooltip-social-logo" src={ PinterestLogo } alt="Pinterest logo"></img>
                                                </a>
                                                <a href={ this.props.resultsData[0].User.Website.Twitter } target="_blank">
                                                  <img className="tooltip-social-logo" src={ TwitterLogo } alt="Twitter logo"></img>
                                                </a>
                                                <a href={ this.props.resultsData[0].User.Website.Youtube } target="_blank">
                                                  <img className="tooltip-social-logo" src={ YouTubeLogo } alt="YouTube logo"></img>
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
                                      <Doughnut data={{
                                          labels: [
                                            'Anger', 
                                            'Disgust', 
                                            'Fear', 
                                            'Joy', 
                                            'Sadness',
                                          ],
                                          datasets: [{
                                            data: [
                                              `${ this.props.resultsData[0].Description_enriched.emotion.document.emotion.anger * 100 }`,
                                              `${ this.props.resultsData[0].Description_enriched.emotion.document.emotion.disgust * 100 }`,
                                              `${ this.props.resultsData[0].Description_enriched.emotion.document.emotion.fear * 100 }`,
                                              `${ this.props.resultsData[0].Description_enriched.emotion.document.emotion.joy * 100 }`,
                                              `${ this.props.resultsData[0].Description_enriched.emotion.document.emotion.sadness * 100 }`,
                                            ],
                                          backgroundColor: [
                                              '#f86c6b', 
                                              '#4dbd74', 
                                              '#000', 
                                              '#f8cb00', 
                                              '#63c2de',
                                            ]
                                          }]
                                        }} 
                                        options={{legend: {labels: {fontColor: '#2a2c36'}}}} 
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
                                <strong>{this.props.resultsData[0].Description_enriched.keywords[0].relevance * 100}%</strong>
                              </div>
                            </div>
                            <Progress className="progress-sm" color="success" value={this.props.resultsData[0].Description_enriched.keywords[0].relevance * 100}/>
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
                        <td className="trend-column" id="trendInfo01">
                          <div><i className="fa fa-line-chart"></i> { this.props.resultsData[1].Description_enriched.keywords[0].text } </div>
                          <Tooltip placement="right" autohide={ false } isOpen={ this.state.tooltipOpen[1] } target="trendInfo01" toggle={() => { this.toggle(1)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={ this.props.resultsData[1].User.Profile.ImageURL } alt="Social media avatar"></img>
                                            <span className="tooltip-name">{ this.props.resultsData[1].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[1].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[1].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            <a href={ this.props.resultsData[1].User.Website.Facebook } target="_blank">
                                                <img className="tooltip-social-logo" src={ FacebookLogo } alt="Facebook logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[1].User.Website.Instagram } target="_blank">
                                                <img className="tooltip-social-logo" src={ InstagramLogo } alt="Instagram logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[1].User.Website.LinkedIn } target="_blank">
                                                <img className="tooltip-social-logo" src={ LinkedInLogo } alt="LinkedIn logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[1].User.Website.Pinterest } target="_blank">
                                                <img className="tooltip-social-logo" src={ PinterestLogo } alt="Pinterest logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[1].User.Website.Twitter } target="_blank">
                                                <img className="tooltip-social-logo" src={ TwitterLogo } alt="Twitter logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[1].User.Website.Youtube } target="_blank">
                                                <img className="tooltip-social-logo" src={ YouTubeLogo } alt="YouTube logo"></img>
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
                                    <Doughnut data={{
                                        labels: [
                                          'Anger', 
                                          'Disgust', 
                                          'Fear', 
                                          'Joy', 
                                          'Sadness',
                                        ],
                                        datasets: [{
                                          data: [
                                            `${ this.props.resultsData[1].Description_enriched.emotion.document.emotion.anger * 100 }`,
                                            `${ this.props.resultsData[1].Description_enriched.emotion.document.emotion.disgust * 100 }`,
                                            `${ this.props.resultsData[1].Description_enriched.emotion.document.emotion.fear * 100 }`,
                                            `${ this.props.resultsData[1].Description_enriched.emotion.document.emotion.joy * 100 }`,
                                            `${ this.props.resultsData[1].Description_enriched.emotion.document.emotion.sadness * 100 }`,
                                          ],
                                        backgroundColor: [
                                            '#f86c6b', 
                                            '#4dbd74', 
                                            '#000', 
                                            '#f8cb00', 
                                            '#63c2de',
                                          ]
                                        }]
                                      }} 
                                      options={{legend: {labels: {fontColor: '#2a2c36'}}}} 
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
                              <strong>{this.props.resultsData[1].Description_enriched.keywords[0].relevance * 100}%</strong>
                            </div>
                          </div>
                          <Progress className="progress-sm" color="success" value={this.props.resultsData[1].Description_enriched.keywords[0].relevance * 100}/>
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
                        <td className="trend-column" id="trendInfo02">
                          <div><i className="fa fa-line-chart"></i> { this.props.resultsData[2].Description_enriched.keywords[0].text } </div>
                          <Tooltip placement="right" autohide={ false } isOpen={ this.state.tooltipOpen[2] } target="trendInfo02" toggle={() => { this.toggle(2)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={ this.props.resultsData[2].User.Profile.ImageURL } alt="Social media avatar"></img>
                                            <span className="tooltip-name">{ this.props.resultsData[2].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[2].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[2].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            <a href={ this.props.resultsData[2].User.Website.Facebook } target="_blank">
                                                <img className="tooltip-social-logo" src={ FacebookLogo } alt="Facebook logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[2].User.Website.Instagram } target="_blank">
                                                <img className="tooltip-social-logo" src={ InstagramLogo } alt="Instagram logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[2].User.Website.LinkedIn } target="_blank">
                                                <img className="tooltip-social-logo" src={ LinkedInLogo } alt="LinkedIn logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[2].User.Website.Pinterest } target="_blank">
                                                <img className="tooltip-social-logo" src={ PinterestLogo } alt="Pinterest logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[2].User.Website.Twitter } target="_blank">
                                                <img className="tooltip-social-logo" src={ TwitterLogo } alt="Twitter logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[2].User.Website.Youtube } target="_blank">
                                                <img className="tooltip-social-logo" src={ YouTubeLogo } alt="YouTube logo"></img>
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
                                    <Doughnut data={{
                                        labels: [
                                          'Anger', 
                                          'Disgust', 
                                          'Fear', 
                                          'Joy', 
                                          'Sadness',
                                        ],
                                        datasets: [{
                                          data: [
                                            `${ this.props.resultsData[2].Description_enriched.emotion.document.emotion.anger * 100 }`,
                                            `${ this.props.resultsData[2].Description_enriched.emotion.document.emotion.disgust * 100 }`,
                                            `${ this.props.resultsData[2].Description_enriched.emotion.document.emotion.fear * 100 }`,
                                            `${ this.props.resultsData[2].Description_enriched.emotion.document.emotion.joy * 100 }`,
                                            `${ this.props.resultsData[2].Description_enriched.emotion.document.emotion.sadness * 100 }`,
                                          ],
                                        backgroundColor: [
                                            '#f86c6b', 
                                            '#4dbd74', 
                                            '#000', 
                                            '#f8cb00', 
                                            '#63c2de',
                                          ]
                                        }]
                                      }} 
                                      options={{legend: {labels: {fontColor: '#2a2c36'}}}} 
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
                              <strong>{this.props.resultsData[2].Description_enriched.keywords[0].relevance * 100}%</strong>
                            </div>
                          </div>
                          <Progress className="progress-sm" color="success" value={this.props.resultsData[2].Description_enriched.keywords[0].relevance * 100}/>
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
                        <td className="trend-column" id="trendInfo03">
                          <div><i className="fa fa-line-chart"></i> { this.props.resultsData[3].Description_enriched.keywords[0].text } </div>
                          <Tooltip placement="right" autohide={ false } isOpen={ this.state.tooltipOpen[3] } target="trendInfo03" toggle={() => { this.toggle(3)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={ this.props.resultsData[3].User.Profile.ImageURL } alt="Social media avatar"></img>
                                            <span className="tooltip-name">{ this.props.resultsData[3].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[3].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[3].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            <a href={ this.props.resultsData[3].User.Website.Facebook } target="_blank">
                                                <img className="tooltip-social-logo" src={ FacebookLogo } alt="Facebook logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[3].User.Website.Instagram } target="_blank">
                                                <img className="tooltip-social-logo" src={ InstagramLogo } alt="Instagram logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[3].User.Website.LinkedIn } target="_blank">
                                                <img className="tooltip-social-logo" src={ LinkedInLogo } alt="LinkedIn logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[3].User.Website.Pinterest } target="_blank">
                                                <img className="tooltip-social-logo" src={ PinterestLogo } alt="Pinterest logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[3].User.Website.Twitter } target="_blank">
                                                <img className="tooltip-social-logo" src={ TwitterLogo } alt="Twitter logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[3].User.Website.Youtube } target="_blank">
                                                <img className="tooltip-social-logo" src={ YouTubeLogo } alt="YouTube logo"></img>
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
                                    <Doughnut data={{
                                        labels: [
                                          'Anger', 
                                          'Disgust', 
                                          'Fear', 
                                          'Joy', 
                                          'Sadness',
                                        ],
                                        datasets: [{
                                          data: [
                                            `${ this.props.resultsData[3].Description_enriched.emotion.document.emotion.anger * 100 }`,
                                            `${ this.props.resultsData[3].Description_enriched.emotion.document.emotion.disgust * 100 }`,
                                            `${ this.props.resultsData[3].Description_enriched.emotion.document.emotion.fear * 100 }`,
                                            `${ this.props.resultsData[3].Description_enriched.emotion.document.emotion.joy * 100 }`,
                                            `${ this.props.resultsData[3].Description_enriched.emotion.document.emotion.sadness * 100 }`,
                                          ],
                                        backgroundColor: [
                                            '#f86c6b', 
                                            '#4dbd74', 
                                            '#000', 
                                            '#f8cb00', 
                                            '#63c2de',
                                          ]
                                        }]
                                      }} 
                                      options={{legend: {labels: {fontColor: '#2a2c36'}}}} 
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
                              <strong>{this.props.resultsData[3].Description_enriched.keywords[0].relevance * 100}%</strong>
                            </div>
                          </div>
                          <Progress className="progress-sm" color="success" value={this.props.resultsData[3].Description_enriched.keywords[0].relevance * 100}/>
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
                        <td className="trend-column" id="trendInfo04">
                          <div><i className="fa fa-line-chart"></i> { this.props.resultsData[4].Description_enriched.keywords[0].text } </div>
                          <Tooltip placement="right" autohide={ false } isOpen={ this.state.tooltipOpen[4] } target="trendInfo04" toggle={() => { this.toggle(4)} }>
                            <Row>
                              <Col xs="6">
                                <Card>
                                  <CardBody>
                                  <Table borderless className="mb-0 d-none d-sm-table">
                                    <tbody>
                                      <tr>
                                        <td className="tooltip-avatar-and-name">
                                          <div>
                                            <img className="tooltip-avatar" src={ this.props.resultsData[4].User.Profile.ImageURL } alt="Social media avatar"></img>
                                            <span className="tooltip-name">{ this.props.resultsData[4].User.Name }</span>
                                          </div>
                                        </td>
                                        <td>
                                          <p className="tooltip-text">{ this.props.resultsData[4].Description }</p>
                                          <p className="tooltip-text">{ this.props.resultsData[4].User.Followers.NetworkCount } Followers</p>
                                          <div className="tooltip-social-logos">
                                            <a href={ this.props.resultsData[4].User.Website.Facebook } target="_blank">
                                                <img className="tooltip-social-logo" src={ FacebookLogo } alt="Facebook logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[4].User.Website.Instagram } target="_blank">
                                                <img className="tooltip-social-logo" src={ InstagramLogo } alt="Instagram logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[4].User.Website.LinkedIn } target="_blank">
                                                <img className="tooltip-social-logo" src={ LinkedInLogo } alt="LinkedIn logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[4].User.Website.Pinterest } target="_blank">
                                                <img className="tooltip-social-logo" src={ PinterestLogo } alt="Pinterest logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[4].User.Website.Twitter } target="_blank">
                                                <img className="tooltip-social-logo" src={ TwitterLogo } alt="Twitter logo"></img>
                                              </a>
                                              <a href={ this.props.resultsData[4].User.Website.Youtube } target="_blank">
                                                <img className="tooltip-social-logo" src={ YouTubeLogo } alt="YouTube logo"></img>
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
                                    <Doughnut data={{
                                        labels: [
                                          'Anger', 
                                          'Disgust', 
                                          'Fear', 
                                          'Joy', 
                                          'Sadness',
                                        ],
                                        datasets: [{
                                          data: [
                                            `${ this.props.resultsData[4].Description_enriched.emotion.document.emotion.anger * 100 }`,
                                            `${ this.props.resultsData[4].Description_enriched.emotion.document.emotion.disgust * 100 }`,
                                            `${ this.props.resultsData[4].Description_enriched.emotion.document.emotion.fear * 100 }`,
                                            `${ this.props.resultsData[4].Description_enriched.emotion.document.emotion.joy * 100 }`,
                                            `${ this.props.resultsData[4].Description_enriched.emotion.document.emotion.sadness * 100 }`,
                                          ],
                                        backgroundColor: [
                                            '#f86c6b', 
                                            '#4dbd74', 
                                            '#000', 
                                            '#f8cb00', 
                                            '#63c2de',
                                          ]
                                        }]
                                      }} 
                                      options={{legend: {labels: {fontColor: '#2a2c36'}}}} 
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
                              <strong>{this.props.resultsData[4].Description_enriched.keywords[0].relevance * 100}%</strong>
                            </div>
                          </div>
                          <Progress className="progress-sm" color="success" value={this.props.resultsData[4].Description_enriched.keywords[0].relevance * 100}/>
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
