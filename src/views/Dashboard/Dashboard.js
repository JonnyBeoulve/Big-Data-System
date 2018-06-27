import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import axios from 'axios';
import Cookies from 'js-cookie';

import Widget02 from './Widgets/Widget02';

/*= =====================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
====================================================================== */
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      totalAnalyses: 0,
    };
  }
  /*= =====================================================================
  // Count data items to present to the user on the dashboard upon
  // mounting Dashboard. Additionally, confirm that a user has connected
  // a Twitter account to their profile. If not, guide the user through
  // the process of adding one.
  ====================================================================== */
  componentDidMount() {
    this.checkAnalyses();
    this.checkTwitterConnect();
  }

  /*= =====================================================================
  // Check for a Twitter connect and require one be added if one isn't
  // already added.
  ====================================================================== */
  checkTwitterConnect(e) {
		this.setRedirectCookie();
    axios ({
      method: 'post',
      url: 'http://cobiasystems.lc/rest/admin/connect/get_connects',
    })
    .then(response => {
      if (response.data.Status === 1) {
        console.log("WOOPS");
        return;
      }
      else {
        console.log(response);
          if (this.isWhiteLabel()) {
            console.log("1");
            var win = window.open(response.data.Data, "_blank");
            if (win) {
              var interval = window.setInterval(function(){
                try {
                  if (win == null || win.closed) {
                    window.clearInterval(interval);
                    this.setAddNew();
                    this.getConnectsREST();
                  }
                } catch (e) {
                  console.log(e);
                }
              }, 2000);
              win.focus();
            } else {
              alert("Please allow popups for this site");
            }
          } else {
            console.log(response.data.Data);
            console.log(response);
            //window.location = response.data.Data;
          }
      }
    })
    .catch(error => {
      console.log('An error has occurred', error);
    })
  }

  /*= =====================================================================
  // Below are three helper functions for checkTwitterConnect.
  ====================================================================== */
  isWhiteLabel() {
    return (window.location != window.parent.location) ? true : false;
  }

  setAddNew(e) {
		if (e) e.preventDefault();
		this.setState({onAddNew: !this.state.onAddNew});
  }
  
  setRedirectCookie() {
		if (typeof Cookies.get("newCobiaRedirect") == "undefined") {
			var datetimePlus2hrs = new Date();
			datetimePlus2hrs.setTime(datetimePlus2hrs.getTime() + (2*60*60*1000));
			if (this.isWhiteLabel()) {
				var url = window.location.origin + "/admin/connect/closewindow";
			} else {
				var url = window.location.pathname + window.location.hash;
			}
			Cookies.get("newCobiaRedirect", url, {expires: datetimePlus2hrs, path: "/"});
		}
	}
  
  /*= =====================================================================
  // Count the list of keywords executd by the user and then store them 
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
  // Render an introductory page that welcomes the user and presents
  // some basic data.
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
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#/admin/marketinganalysis" role="button">Begin Marketing Analysis</a>
          </p>
        </div>
        <Row>
          <Col xs="6" sm="6" lg="3">
            <div className="social-box facebook">
              <i className="fa fa-facebook" />
              <ul>
                <li>
                  <strong>89k</strong>
                  <span>likes</span>
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
              <i className="fa fa-twitter" />
              <ul>
                <li>
                  <strong>973k</strong>
                  <span>followers</span>
                </li>
                <li>
                  <strong>104</strong>
                  <span>tweets</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs="6" sm="6" lg="3">

            <div className="social-box linkedin">
              <i className="fa fa-linkedin" />
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
              <i className="fa fa-google-plus" />
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
      </div>
    );
  }
}

export default Dashboard;
