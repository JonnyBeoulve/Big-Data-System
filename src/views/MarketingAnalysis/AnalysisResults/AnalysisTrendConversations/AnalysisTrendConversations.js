import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Col,
  Card,
  CardBody,
  Row,
  Table,
} from 'reactstrap';

import FacebookLogo from '../../../../../public/img/facebook-logo.png';
import InstagramLogo from '../../../../../public/img/instagram-logo.png';
import LinkedInLogo from '../../../../../public/img/linkedin-logo.png';
import PinterestLogo from '../../../../../public/img/pinterest-logo.png';
import TwitterLogo from '../../../../../public/img/twitter-logo.png';
import YouTubeLogo from '../../../../../public/img/youtube-logo.png';

/*= =====================================================================
// Inline styling for the results table to prevent mutation of other
// tables.
====================================================================== */
const mainTableStyle = {
  height: '400px',
};

/*= =====================================================================
// Display table with data from the trend results.
====================================================================== */
class AnalysisTrendConversations extends Component {
  /*= =====================================================================
    // Display a table with data results along with a tooltip that displays
    // upon hovering over a trend.
    ====================================================================== */
    render() {
    return (
      <div>
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
                          <strong className="h4">{ this.props.resultsData.length }</strong>
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
                          <strong className="h4">Area</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Driver</small>
                          <br />
                          <strong className="h4">Driver</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12" md="6" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Business</small>
                          <br />
                          <strong className="h4">B2B</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <br />
                <Table hover responsive style={mainTableStyle} className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="conversation-select-column">Select</th>
                      <th className="conversation-person-column">Person</th>
                      <th className="conversation-post-sentiment-column">Post</th>
                      <th className="conversation-post-sentiment-column">Sentiment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="conversation-select-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selConvo[0]} 
                            onChange={() => { this.props.changeCheckbox(0); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="conversation-person-column">
                        <img className="conversation-person-avatar" src={this.props.resultsData[`${this.props.trendNum[0]}`].User.Profile.ImageURL} alt="Social media avatar" />
                        <span className="conversation-person-name">{ this.props.resultsData[`${this.props.trendNum[0]}`].User.Name }</span>
                        <div className="conversation-social-logos">
                            { (this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Twitter)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                              : <div></div> }    
                            { (this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Facebook)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                              : <div></div> }                                       
                            { (this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.LinkedIn)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                              : <div></div> }                                              
                            { (this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Instagram)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Pinterest)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.YouTube)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[0]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                              : <div></div> }     
                          </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
                          <div className="float-left">
                            <p className="conversation-post-text">{ this.props.resultsData[`${this.props.trendNum[0]}`].Description }</p>
                          </div>
                        </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
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
                                  `${this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[0]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
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
                        </div>
                      </td>
                    </tr>
                                        <tr>
                      <td className="conversation-select-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selConvo[1]} 
                            onChange={() => { this.props.changeCheckbox(1); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="conversation-person-column">
                        <img className="conversation-person-avatar" src={this.props.resultsData[`${this.props.trendNum[1]}`].User.Profile.ImageURL} alt="Social media avatar" />
                        <span className="conversation-person-name">{ this.props.resultsData[`${this.props.trendNum[1]}`].User.Name }</span>
                        <div className="conversation-social-logos">
                            { (this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Twitter)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                              : <div></div> }    
                            { (this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Facebook)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                              : <div></div> }                                       
                            { (this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.LinkedIn)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                              : <div></div> }                                              
                            { (this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Instagram)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Pinterest)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.YouTube)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[1]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                              : <div></div> }     
                          </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
                          <div className="float-left">
                            <p className="conversation-post-text">{ this.props.resultsData[`${this.props.trendNum[1]}`].Description }</p>
                          </div>
                        </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
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
                                  `${this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[1]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="conversation-select-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selConvo[2]} 
                            onChange={() => { this.props.changeCheckbox(2); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="conversation-person-column">
                        <img className="conversation-person-avatar" src={this.props.resultsData[`${this.props.trendNum[2]}`].User.Profile.ImageURL} alt="Social media avatar" />
                        <span className="conversation-person-name">{ this.props.resultsData[`${this.props.trendNum[2]}`].User.Name }</span>
                        <div className="conversation-social-logos">
                            { (this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Twitter)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                              : <div></div> }    
                            { (this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Facebook)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                              : <div></div> }                                       
                            { (this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.LinkedIn)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                              : <div></div> }                                              
                            { (this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Instagram)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Pinterest)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.YouTube)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[2]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                              : <div></div> }     
                          </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
                          <div className="float-left">
                            <p className="conversation-post-text">{ this.props.resultsData[`${this.props.trendNum[2]}`].Description }</p>
                          </div>
                        </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
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
                                  `${this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[2]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="conversation-select-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selConvo[3]} 
                            onChange={() => { this.props.changeCheckbox(3); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="conversation-person-column">
                        <img className="conversation-person-avatar" src={this.props.resultsData[`${this.props.trendNum[3]}`].User.Profile.ImageURL} alt="Social media avatar" />
                        <span className="conversation-person-name">{ this.props.resultsData[`${this.props.trendNum[3]}`].User.Name }</span>
                        <div className="conversation-social-logos">
                            { (this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Twitter)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                              : <div></div> }    
                            { (this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Facebook)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                              : <div></div> }                                       
                            { (this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.LinkedIn)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                              : <div></div> }                                              
                            { (this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Instagram)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Pinterest)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.YouTube)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[3]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                              : <div></div> }     
                          </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
                          <div className="float-left">
                            <p className="conversation-post-text">{ this.props.resultsData[`${this.props.trendNum[3]}`].Description }</p>
                          </div>
                        </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
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
                                  `${this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[3]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="conversation-select-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selConvo[4]} 
                            onChange={() => { this.props.changeCheckbox(4); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="conversation-person-column">
                        <img className="conversation-person-avatar" src={this.props.resultsData[`${this.props.trendNum[4]}`].User.Profile.ImageURL} alt="Social media avatar" />
                        <span className="conversation-person-name">{ this.props.resultsData[`${this.props.trendNum[4]}`].User.Name }</span>
                        <div className="conversation-social-logos">
                            { (this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Twitter)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                              : <div></div> }    
                            { (this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Facebook)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                              : <div></div> }                                       
                            { (this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.LinkedIn)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                              : <div></div> }                                              
                            { (this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Instagram)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Pinterest)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.YouTube)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[4]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                              : <div></div> }     
                          </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
                          <div className="float-left">
                            <p className="conversation-post-text">{ this.props.resultsData[`${this.props.trendNum[4]}`].Description }</p>
                          </div>
                        </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
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
                                  `${this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[4]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="conversation-select-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selConvo[5]} 
                            onChange={() => { this.props.changeCheckbox(5); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="conversation-person-column">
                        <img className="conversation-person-avatar" src={this.props.resultsData[`${this.props.trendNum[5]}`].User.Profile.ImageURL} alt="Social media avatar" />
                        <span className="conversation-person-name">{ this.props.resultsData[`${this.props.trendNum[5]}`].User.Name }</span>
                        <div className="conversation-social-logos">
                            { (this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Twitter)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                              : <div></div> }    
                            { (this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Facebook)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                              : <div></div> }                                       
                            { (this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.LinkedIn)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                              : <div></div> }                                              
                            { (this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Instagram)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Pinterest)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.YouTube)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[5]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                              : <div></div> }     
                          </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
                          <div className="float-left">
                            <p className="conversation-post-text">{ this.props.resultsData[`${this.props.trendNum[5]}`].Description }</p>
                          </div>
                        </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
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
                                  `${this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[5]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="conversation-select-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selConvo[6]} 
                            onChange={() => { this.props.changeCheckbox(6); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="conversation-person-column">
                        <img className="conversation-person-avatar" src={this.props.resultsData[`${this.props.trendNum[6]}`].User.Profile.ImageURL} alt="Social media avatar" />
                        <span className="conversation-person-name">{ this.props.resultsData[`${this.props.trendNum[6]}`].User.Name }</span>
                        <div className="conversation-social-logos">
                            { (this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Twitter)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                              : <div></div> }    
                            { (this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Facebook)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                              : <div></div> }                                       
                            { (this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.LinkedIn)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                              : <div></div> }                                              
                            { (this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Instagram)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Pinterest)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.YouTube)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[6]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                              : <div></div> }     
                          </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
                          <div className="float-left">
                            <p className="conversation-post-text">{ this.props.resultsData[`${this.props.trendNum[6]}`].Description }</p>
                          </div>
                        </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
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
                                  `${this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[6]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="conversation-select-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selConvo[7]} 
                            onChange={() => { this.props.changeCheckbox(7); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="conversation-person-column">
                        <img className="conversation-person-avatar" src={this.props.resultsData[`${this.props.trendNum[7]}`].User.Profile.ImageURL} alt="Social media avatar" />
                        <span className="conversation-person-name">{ this.props.resultsData[`${this.props.trendNum[7]}`].User.Name }</span>
                        <div className="conversation-social-logos">
                            { (this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Twitter)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                              : <div></div> }    
                            { (this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Facebook)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                              : <div></div> }                                       
                            { (this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.LinkedIn)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                              : <div></div> }                                              
                            { (this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Instagram)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Pinterest)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.YouTube)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[7]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                              : <div></div> }     
                          </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
                          <div className="float-left">
                            <p className="conversation-post-text">{ this.props.resultsData[`${this.props.trendNum[7]}`].Description }</p>
                          </div>
                        </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
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
                                  `${this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[7]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="conversation-select-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selConvo[8]} 
                            onChange={() => { this.props.changeCheckbox(8); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="conversation-person-column">
                        <img className="conversation-person-avatar" src={this.props.resultsData[`${this.props.trendNum[8]}`].User.Profile.ImageURL} alt="Social media avatar" />
                        <span className="conversation-person-name">{ this.props.resultsData[`${this.props.trendNum[8]}`].User.Name }</span>
                        <div className="conversation-social-logos">
                            { (this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Twitter)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                              : <div></div> }    
                            { (this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Facebook)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                              : <div></div> }                                       
                            { (this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.LinkedIn)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                              : <div></div> }                                              
                            { (this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Instagram)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Pinterest)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.YouTube)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[8]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                              : <div></div> }     
                          </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
                          <div className="float-left">
                            <p className="conversation-post-text">{ this.props.resultsData[`${this.props.trendNum[8]}`].Description }</p>
                          </div>
                        </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
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
                                  `${this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[8]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
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
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="conversation-select-column">
                        <div className="clearfix">
                          <div className="float-left">
                          <input
                            name="select-trend"
                            type="checkbox"
                            checked={this.props.selConvo[9]} 
                            onChange={() => { this.props.changeCheckbox(9); }}
                          />
                          </div>
                        </div>
                      </td>
                      <td className="conversation-person-column">
                        <img className="conversation-person-avatar" src={this.props.resultsData[`${this.props.trendNum[9]}`].User.Profile.ImageURL} alt="Social media avatar" />
                        <span className="conversation-person-name">{ this.props.resultsData[`${this.props.trendNum[9]}`].User.Name }</span>
                        <div className="conversation-social-logos">
                            { (this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Twitter)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Twitter} target="_blank"><img className="tooltip-social-logo" src={TwitterLogo} alt="Twitter logo" /></a>
                              : <div></div> }    
                            { (this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Facebook)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Facebook} target="_blank"><img className="tooltip-social-logo" src={FacebookLogo} alt="Facebook logo" /></a>
                              : <div></div> }                                       
                            { (this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.LinkedIn)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.LinkedIn} target="_blank"><img className="tooltip-social-logo" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                              : <div></div> }                                              
                            { (this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Instagram)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Instagram} target="_blank"><img className="tooltip-social-logo" src={InstagramLogo} alt="Instagram logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Pinterest)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.Pinterest} target="_blank"><img className="tooltip-social-logo" src={PinterestLogo} alt="Pinterest logo" /></a>
                              : <div></div> }     
                            { (this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.YouTube)
                              ? <a href={this.props.resultsData[`${this.props.trendNum[9]}`].User.Website.YouTube} target="_blank"><img className="tooltip-social-logo" src={YouTubeLogo} alt="YouTube logo" /></a>
                              : <div></div> }     
                          </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
                          <div className="float-left">
                            <p className="conversation-post-text">{ this.props.resultsData[`${this.props.trendNum[9]}`].Description }</p>
                          </div>
                        </div>
                      </td>
                      <td className="relevance-conversation-column">
                        <div className="clearfix">
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
                                  `${this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.emotion.document.emotion.anger * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.emotion.document.emotion.disgust * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.emotion.document.emotion.fear * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.emotion.document.emotion.joy * 100}`,
                                  `${this.props.resultsData[`${this.props.trendNum[9]}`].Description_enriched.emotion.document.emotion.sadness * 100}`,
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
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="pagination-buttons">
                  <div className="pagination-buttons-start-div">
                      <button type="submit" className="btn btn-flex" onClick={this.props.previous10Results}>Previous 10</button>
                      <button type="submit" className="btn btn-flex" onClick={this.props.next10Results}>Next 10</button>
                  </div>
                  <div className="pagination-buttons-end-div">
                      <button type="submit" className="btn btn-flex" onClick={this.props.backToTrends}>Back</button>
                      <button type="submit" className="btn btn-flex" onClick={this.props.startCampaign}>Begin Campaign</button>
                  </div>
                </div>
                </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AnalysisTrendConversations;
