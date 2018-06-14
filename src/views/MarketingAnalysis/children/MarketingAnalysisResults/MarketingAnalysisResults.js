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
  Row,
  TabContent,
  TabPane,
  Table,
  Tooltip,
} from 'reactstrap';
import DriverTab from './DriverTab/DriverTab';
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
      activeTab: '0',
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
  // This will handle toggling of the active driver tab, executed from
  // the child component DriverTab.
  ======================================================================*/
  toggleTab(i) {
    console.log(i);
    if (this.state.activeTab !== i) {
      this.setState({
        activeTab: i
      });
    }
  }

  render() {

    // Temporary array solution for input drivers, used to determine and display tabs
    const driver = ['driver1', 'driver2', 'driver3', 'driver4']

    return (
      <div className="animated fadeIn">
        <Nav tabs>
          { driver.map((driverName, driverIndex) => { return <DriverTab tabName={ driverName } tabNum={ driverIndex } 
            activeDriver={ this.state.activeTab } toggleDriverTab={ this.toggleTab } />}) }
        </Nav>
        <TabContent activeTab={ this.state.activeTab }>

        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <p>Working!</p>
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
        <br />
        <button type="submit" class="btn btn-primary" onClick={ this.props.handleSelectionSubmit }>Create Campaign</button>
        <br />
      </div>
    )
  }
}

export default MarketingAnalysisResults;
