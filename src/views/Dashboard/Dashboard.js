import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import axios from 'axios';

import Widget02 from './Widgets/Widget02';

/*= =====================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
====================================================================== */
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      hasTwitterConnection: true,
      totalAnalyses: 0,
      twitterRedirectURL: '',
    };
  }
  /*= =====================================================================
  // Count data items to present to the user on the dashboard upon
  // mounting Dashboard. Also, check if the user has a Twitter connection.
  ====================================================================== */
  componentDidMount() {
    this.checkAnalyses();
    this.checkTwitterConnect();
  }
  
  /*= =====================================================================
  // Count the list of keywords executed by the user and then store them 
  // in state to be displayed to the user.
  ====================================================================== */
  checkAnalyses() {
    axios ({
      method: 'post',
      url: 'http://cobiasystems.lc/rest/admin/keyword/get_keywords',
    })
    .then(response => {
      if (response.data.Status === 1) {
        this.setState({
          totalAnalyses: response.data.Data.keywords.length
        });
      } 
      return;
    })
    .catch(error => {
      console.log('Error fetching keywords', error);
      return;
    }) 
  }

  /*= =====================================================================
  // Check for a Twitter connection and redirect to the connect page if
  // there isn't one.
  ====================================================================== */
  checkTwitterConnect() {
    axios ({
      method: 'post',
      url: 'http://cobiasystems.lc/rest/admin/connect/get_connects',
    })
    .then(response => {
      if (response.data.Status === 1) {
        return;
      }
      else {
        this.setState({
          hasTwitterConnection: false,
        })
        return;
      }
    })
    .catch(error => {
      console.log('An error has occurred during Twitter connect.', error);
    })
  }

  /*= =====================================================================
  // Add a Twitter connection to the user's social media account. First,
  // a call will be made by the Cobia Systems server. Then, the response's
  // Data element will contain a URL that the user is directed to where
  // they can make the connection.
  ====================================================================== */
  addTwitterConnect(e) {
		e.preventDefault();
		axios ({
      method: 'post',
      url: 'http://cobiasystems.lc/rest/admin/connect/get_twitter_redirect'
    })
    .then(response => {
      this.setState({
        twitterRedirectURL: response.data.Data,
      })
      window.location.assign(`${this.state.twitterRedirectURL}`);
    })
    .catch(error => {
      console.log('An error has occurred during Twitter connect.', error);
    })
  }

  /*= =====================================================================
  // Render an introductory page that welcomes the user and presents
  // some basic data. If the user doesn't have a Twitter account, then
  // display a message and a button to connect, and hide the data section.
  ====================================================================== */
  render() {
    return (
      <div className="animated fadeIn">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active"><a href="#/admin">Dashboard</a></li>
          </ol>
        </nav>
        <div className="jumbotron">
          <h1 className="display-3">Welcome to Cobia Systems</h1>
          <p className="lead">This is an alpha version of the new Cobia Systems web app. Enjoy!</p>
          <hr className="my-4" />
          { (!this.state.hasTwitterConnection)
            ? <div>
                <p className="lead">
                  <p>Cobia Systems requires a connection to your Twitter account. Click the button below to add a Twitter connection.</p>
                  <button className="btn btn-primary btn-lg" onClick={this.addTwitterConnect.bind(this)}>Connect Twitter</button>
                </p> 
              </div>
            : <div>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="#/admin/marketinganalysis" role="button">Begin Marketing Analysis</a>
                </p> 
              </div> }
        </div>
        { (!this.state.hasTwitterConnection)
          ? <div></div>
          : <div>
              <Row>
                <Col xs="6" sm="6" lg="3">
                  <div className="social-box facebook">
                    <i className="fa fa-facebook" />
                    <ul>
                      <li>
                        <strong>0</strong>
                        <span>likes</span>
                      </li>
                      <li>
                        <strong>0</strong>
                        <span>feeds</span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" lg="3">
                  <Widget02 header={this.state.totalAnalyses} mainText="Analyses Performed" icon="fa fa-bar-chart" color="primary" variant="2" />
                </Col>
                <Col xs="12" sm="6" lg="3">
                  <Widget02 header="0" mainText="Reports Performed" icon="fa fa-bar-chart" color="primary" variant="2" />
                </Col>
                <Col xs="12" sm="6" lg="3">
                  <a href="#/admin/mycampaigns"><Widget02 header="0" mainText="Campaigns Created" icon="fa fa-bullseye" color="warning" variant="2" /></a>
                </Col>
                <Col xs="12" sm="6" lg="3">
                  <a href="#/admin/myprofile"><Widget02 header="Configure" mainText="Profile" icon="fa fa-user-circle" color="danger" variant="2" /></a>
                </Col>
              </Row> 
            </div>  }
      </div>
    );
  }
}

export default Dashboard;
