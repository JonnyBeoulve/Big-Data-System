import React, { Component } from 'react';
import {

 } from 'reactstrap';
import classnames from 'classnames';

/*======================================================================
// This will display of all data for each driver.
======================================================================*/
class DriverResults extends Component {

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
                  </CardBody>
                </Card>
              </Col>
            </Row>
        </TabPane>
        );
    }
}

export default DriverResults;