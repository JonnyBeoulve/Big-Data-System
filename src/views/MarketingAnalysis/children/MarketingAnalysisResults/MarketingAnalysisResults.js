import React, { Component } from 'react';
import {
  Nav,
  TabContent,
  TabPane,
} from 'reactstrap';
import DriverTab from './DriverTab/DriverTab';
import DriverResults from './DriverResults/DriverResults';

/*======================================================================
// This is a high level container for the results view that will
// handle each driver tab, in addition to calling the display of
// data within each tab.
======================================================================*/
class MarketingAnalysisResults extends Component {

  /*======================================================================
  // ToggleTab and ActiveTab will hold the state of which tab/driver
  // is currently displayed.
  ======================================================================*/
  constructor(props) {
    super(props);
    this.toggleTab = this.toggleTab.bind(this);
    this.state = {
      activeTab: '0',
    };
  }

  /*======================================================================
  // This will handle toggling of the active driver tab, executed from
  // the child component DriverTab.
  ======================================================================*/
  toggleTab(i) {
    if (this.state.activeTab !== i) {
      this.setState({
        activeTab: i
      });
    }
  }

  /*======================================================================
  // Render the necessary number of tabs and results within each tab.
  // The map method within Nav will iterate over each input driver and
  // display one tab for each, with an associated click event handler.
  // DriverResults will pass in props from the parent MarketingAnalysis.js
  // container to display data, along with a numeric value that ensures
  // display of different results on each tab.
  ======================================================================*/
  render() {

    // Temporary array solution for driver names input by user, used to determine and display tabs
    const driver = ['driver1', 'driver2', 'driver3', 'driver4']

    return (
      <div className="animated fadeIn">
        <Nav tabs>
          { driver.map((driverName, driverIndex) => { return <DriverTab tabName={ driverName } tabNum={ driverIndex } 
            activeDriver={ this.state.activeTab } toggleDriverTab={ this.toggleTab } />}) }
        </Nav>
        <TabContent activeTab={ this.state.activeTab }>
          <DriverResults 
            driverData={this.props.resultsData} keyword={ this.props.keyword } area={ this.props.area } location={ this.props.location } 
            driver={ this.props.driver1 } b2={ this.props.b2 }
          />
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
        <br />
      </div>
    )
  }
}

export default MarketingAnalysisResults;
