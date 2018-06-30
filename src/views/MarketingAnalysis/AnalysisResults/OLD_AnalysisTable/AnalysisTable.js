import React, { Component } from 'react';
import {
  Nav,
  TabContent,
} from 'reactstrap';
import DriverTab from './DriverTab/DriverTab';
import DriverResults from './DriverResults/DriverResults';

/*= =====================================================================
// This is a high level container for the results view that will
// handle each driver tab, in addition to calling the display of
// data within each tab.
====================================================================== */
class AnalysisTable extends Component {
  /*= =====================================================================
  // ToggleTab and ActiveTab will hold the state of which tab/driver
  // is currently displayed.
  ====================================================================== */
  constructor(props) {
    super(props);
    this.toggleTab = this.toggleTab.bind(this);
    this.state = {
      activeTab: '0',
      driverArray: [],
    };
  }

  /*= =====================================================================
  // This will handle toggling of the active driver tab, executed from
  // the child component DriverTab.
  ====================================================================== */
  toggleTab(i) {
    if (this.state.activeTab !== i) {
      this.setState({
        activeTab: i,
      });
    }
  }

  /*= =====================================================================
  // Render the necessary number of tabs and results within each tab.
  // The map method within Nav will iterate over each input driver and
  // display one tab for each, with an associated click event handler.
  // DriverResults will pass in props from the parent MarketingAnalysis.js
  // container to display data, along with a numeric value that ensures
  // display of different results on each tab.
  ====================================================================== */
  render() {
    // Temporary array solution for driver names input by user, used to determine and display tabs
    const driver = [`${this.props.driver1}`, `${this.props.driver2}`, `${this.props.driver3}`, `${this.props.driver4}`, `${this.props.driver5}`];
    
    return (
      <div className="animated fadeIn">
        <Nav tabs>
          { driver.map((driverName, driverIndex) => (<DriverTab
            tabName={driverName}
            tabNum={driverIndex}
            activeDriver={this.state.activeTab}
            toggleDriverTab={this.toggleTab}
          />)) }
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <DriverResults
            tabNum={'0'}
            trendNum={['0','1','2','3','4','5','6','7','8','9']}
            driverData={this.props.resultsData}
            keyword={this.props.keyword}
            area={this.props.area}
            location={this.props.location}
            driver={this.props.driver1}
            b2={this.props.b2}
          />
        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <DriverResults
            tabNum={'1'}
            trendNum={['10','11','12','13','14','15','16','17','18','19']}
            driverData={this.props.resultsData}
            keyword={this.props.keyword}
            area={this.props.area}
            location={this.props.location}
            driver={this.props.driver2}
            b2={this.props.b2}
          />
        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <DriverResults
            tabNum={'2'}
            trendNum={['20','21','22','23','24','25','26','27','28','29']}
            driverData={this.props.resultsData}
            keyword={this.props.keyword}
            area={this.props.area}
            location={this.props.location}
            driver={this.props.driver3}
            b2={this.props.b2}
          />
        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <DriverResults
            tabNum={'3'}
            trendNum={['30','31','32','33','34','35','36','37','38','39']}
            driverData={this.props.resultsData}
            keyword={this.props.keyword}
            area={this.props.area}
            location={this.props.location}
            driver={this.props.driver4}
            b2={this.props.b2}
          />
        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <DriverResults
            tabNum={'4'}
            trendNum={['40','41','42','43','44','45','46','47','48','49']}
            driverData={this.props.resultsData}
            keyword={this.props.keyword}
            area={this.props.area}
            location={this.props.location}
            driver={this.props.driver5}
            b2={this.props.b2}
          />
        </TabContent>
        <br />
        <button type="submit" className="btn btn-primary" onClick={this.props.handleSelectionSubmit}>Create Campaign</button>
        <br />
        <br />
      </div>
    );
  }
}

export default AnalysisTable;
