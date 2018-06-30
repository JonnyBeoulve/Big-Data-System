import React, { Component } from 'react';
import axios from 'axios';

import AnalysisKeywords from './AnalysisKeywords/AnalysisKeywords';
import Loader from '../../Loader';
import AnalysisKeywordTrends from './AnalysisKeywordTrends/AnalysisKeywordTrends';
import AnalysisCampaign from './AnalysisCampaign/AnalysisCampaign';
import AnalysisConfirmation from './AnalysisConfirmation/AnalysisConfirmation';

// Use local data file for data instead of server until server is working
import jsonData from '../../../data/health_435.json';

/*= =====================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
====================================================================== */
class AnalysisResults extends Component {
  /*= =====================================================================
    // This will bind 'this' to all core functions of marketing analysis
    // so child components can communicate upward. This also houses the
    // state of the user's input before analysis. Data holds the received
    // JSON formatted data to be displayed to the user in results.
    // TrendNumArray stores the currently visible indexes in the
    // results, which jump up or down in sets of 10 to paginate the results.
    ====================================================================== */
  constructor(props) {
    super(props);
    this.displayKeywordResults = this.displayKeywordResults.bind(this);
    this.handlePrevious10Results = this.handlePrevious10Results.bind(this);
    this.handleNext10Results = this.handleNext10Results.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleBackToKeywords = this.handleBackToKeywords.bind(this);
    this.handleAnalyzeTrend = this.handleAnalyzeTrend.bind(this);
    this.handleCampaignSubmit = this.handleCampaignSubmit.bind(this);
    this.state = {
      breadcrumbCurrentStep: 'All Keywords',
      showLoader: true,
      showNoKeywords: false,
      showKeywords: false,
      showResults: false,
      showCampaign: false,
      showConfirmation: false,
      data: jsonData,
      keywordsArray: [],
      trendNumArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      selectedTrends: [false, false, false, false, false, false, false, false, false, false],
      tooltipOpen: [false, false, false, false, false, false, false, false, false, false],
    };
  }

  /*= =====================================================================
  // Grab all keywords for a given user upon mounting Analysis Results.
  ====================================================================== */
  componentDidMount() {
    this.getKeywords();
  }

  /*= =====================================================================
  // Get the full list of keywords and their IDs to store as state
  // within this high level container. AnalysisKeywords will then
  // list these, while other child components will reference their data.
  ====================================================================== */
  getKeywords(e) {
    const formData = new FormData();
    formData.append('type', 2);
    formData.append('limit', 100);
    axios ({
      method: 'post',
      url: 'http://cobiasystems.lc/rest/admin/keyword/get_keywords',
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      if(response.data.Status === 1) {
        this.setState({
          keywordsArray: response.data.Data.keywords,
          showLoader: false,
          showKeywords: true,
        });
      } else {
        this.setState({
          showLoader: false,
          showNoKeywords: true,
        }); 
      }
      return;
    })
    .catch(error => {
      this.setState({
        showLoader: false,
        showNoKeywords: true,
      }); 
      console.log('Error fetching and parsing data', error);
      return;
    }) 
  }

  /*= =====================================================================
  // For now, this function will simply move the state of the view
  // from displaying keywords to viewing a mock table. The passed variable
  // i indicates the index of the keyword, which will be used for fetching
  // data from a specific analysis.
  ====================================================================== */
  displayKeywordResults(i) {
    this.setState({
      breadcrumbCurrentStep: 'Keyword Trends',
      showKeywords: false,
      showResults: true,
    });
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
  // Toggle whether or not a checkbox is selected.
  ====================================================================== */
  toggleCheckbox(i) {
      const newArray = this.state.selectedTrends.map((element, index) => (index === i ? !element : false));
      this.setState({
          selectedTrends: newArray,
      });
  }

  /*= =====================================================================
  // For pagination, minus 10 from each element in trendNumArray, but only
  // if the first element isn't already at 0 (can't go lower). The final
  // setState forces a component rerender to ensure the new data is
  // displayed. Also, reset the state of checkboxes.
  ====================================================================== */
  handlePrevious10Results() {
    if (this.state.trendNumArray[0] === 0) {
      return;
    } else {
      const newSelTrendsArray = this.state.selectedTrends.map((element) => (false));
      const newTrendNumArray = this.state.trendNumArray.map((element) => (element - 10));
      this.setState({
          selectedTrends: newSelTrendsArray,
          trendNumArray: newTrendNumArray,
      });
    }
  }

  /*= =====================================================================
  // For pagination, add 10 from each element in trendNumArray, but only
  // if the final element isn't already at or higher than the length of
  // the dataset (can't go higher). The final setState forces a component 
  // rerender to ensure the new data is displayed. Also, reset the state 
  // of checkboxes.
  ====================================================================== */
  handleNext10Results() {
    if (this.state.trendNumArray[9] >= 100) {
      return;
    } else {
      const newSelTrendsArray = this.state.selectedTrends.map((element) => (false));
      const newTrendNumArray = this.state.trendNumArray.map((element) => (element + 10));
      this.setState({
          selectedTrends: newSelTrendsArray,
          trendNumArray: newTrendNumArray,
      });
    }
  }

  /*= =====================================================================
  // When the user clicks the Back button, hide results and display
  // keywords. In addition, reset state.
  ====================================================================== */
  handleBackToKeywords() {
    const newSelTrendsArray = this.state.selectedTrends.map((element) => (false));
    const newTrendNumArray = this.state.trendNumArray.map((element, index) => (index));
    this.setState({
      selectedTrends: newSelTrendsArray,
      showKeywords: true,
      showResults: false,
      trendNumArray: newTrendNumArray,
    });
  }

  /*= =====================================================================
  // When the user clicks the Analyze Trend campaign, ensure that
  // a trend has been checkmarked and then direct the user to results.
  ====================================================================== */
  handleAnalyzeTrend() {
    this.setState({
      showResults: false,
      showCampaign: true,
    });
  }

  /*= =====================================================================
  // When the user clicks the Analyze Trend campaign, ensure that
  // a trend has been checkmarked and then direct the user to results.
  ====================================================================== */
  handleCampaignSubmit() {
    this.setState({
      showCampaign: false,
      showConfirmation: true,
    });
  }

  /*= =====================================================================
  // This is a top level container that will display components depending
  // upon the current state of the user's Marketing Analysis process.
  ====================================================================== */
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#/admin">Dashboard</a></li>
            <li className="breadcrumb-item active" aria-current="page">{this.state.breadcrumbCurrentStep}</li>
          </ol>
        </nav>
        { (this.state.showLoader)
          ? <Loader />
          : <div /> }
        { (this.state.showNoKeywords)
          ? <div>No keywords found. Visit <a href="#/admin/marketinganalysis/addkeyword">add keyword</a> to get started.</div>
          : <div /> }
        { (this.state.showKeywords)
          ? <AnalysisKeywords 
              allKeywords={this.state.keywordsArray} 
              selectKeyword={this.displayKeywordResults}
            />
          : <div /> }
        { (this.state.showResults)
          ? <AnalysisKeywordTrends
            resultsData={this.state.data}
            trendNum={this.state.trendNumArray}
            selTrends={this.state.selectedTrends}
            toolOpen={this.state.tooltipOpen}
            keyword="Keyword"
            handleSelectionSubmit={this.handleMarketingResultsSelectionSubmit}
            previous10Results={this.handlePrevious10Results}
            next10Results={this.handleNext10Results}
            changeTooltip={this.toggleTooltip}
            changeCheckbox={this.toggleCheckbox}
            backToKeywords={this.handleBackToKeywords}
            analyzeTrend={this.handleAnalyzeTrend}
          />
          : <div /> }
        { (this.state.showCampaign)
          ? <AnalysisCampaign
            resultsData={this.state.data}
            campaignSubmit={this.handleCampaignSubmit}
          />
          : <div /> }
        { (this.state.showConfirmation)
          ? <AnalysisConfirmation />
          : <div /> }
      </div>
    );
  }
}

export default AnalysisResults;
