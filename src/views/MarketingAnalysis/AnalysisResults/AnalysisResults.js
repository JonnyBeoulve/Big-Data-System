import React, { Component } from 'react';
import axios from 'axios';

import AnalysisKeywords from './AnalysisKeywords/AnalysisKeywords';
import Loader from '../../Loader';
import AnalysisKeywordTrends from './AnalysisKeywordTrends/AnalysisKeywordTrends';
import AnalysisTrendConversations from './AnalysisTrendConversations/AnalysisTrendConversations';
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
    this.displayResultsTrends = this.displayResultsTrends.bind(this);
    this.displayResultsConversations = this.displayResultsConversations.bind(this);
    this.handlePrevious10Results = this.handlePrevious10Results.bind(this);
    this.handleNext10Results = this.handleNext10Results.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.toggleTrendCheckbox = this.toggleTrendCheckbox.bind(this);
    this.toggleConversationCheckbox = this.toggleConversationCheckbox.bind(this);
    this.handleBackToKeywords = this.handleBackToKeywords.bind(this);
    this.handleBackToTrends = this.handleBackToTrends.bind(this);
    this.handleCampaignBegin = this.handleCampaignBegin.bind(this);
    this.handleCampaignSubmit = this.handleCampaignSubmit.bind(this);
    this.state = {
      breadcrumbCurrentStep: 'All Keywords',
      showLoader: true,
      showNoKeywords: false,
      showKeywords: false,
      showResultsTrends: false,
      showResultsConversations: false,
      showCampaign: false,
      showConfirmation: false,
      data: jsonData,
      keywordsArray: [],
      trendNumArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      conversationNumArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      selectedTrend: [false, false, false, false, false, false, false, false, false, false],
      selectedConversation: [false, false, false, false, false, false, false, false, false, false],
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
  getKeywords() {
    this.setState({
      keywordsArray: [
        {
          keyword: 'Healthy Living',
          key: '001'
        },
        {
          keyword: 'Organic Foods',
          key: '002'
        },
        {
          keyword: 'Luxury Cars',
          key: '003'
        },
      ],
      showLoader: false,
      showKeywords: true
    })
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
  toggleTrendCheckbox(i) {
      const newArray = this.state.selectedTrend.map((element, index) => (index === i ? !element : false));
      this.setState({
          selectedTrend: newArray,
      });
  }

  /*= =====================================================================
  // Toggle whether or not a checkbox is selected.
  ====================================================================== */
  toggleConversationCheckbox(i) {
    const newArray = this.state.selectedConversation.map((element, index) => (index === i ? !element : false));
    this.setState({
        selectedConversation: newArray,
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
      const newSelTrendsArray = this.state.selectedTrend.map((element) => (false));
      const newTrendNumArray = this.state.trendNumArray.map((element) => (element - 10));
      this.setState({
          selectedTrend: newSelTrendsArray,
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
    if (this.state.trendNumArray[9] >= 90) {
      return;
    } else {
      const newSelTrendsArray = this.state.selectedTrend.map((element) => (false));
      const newTrendNumArray = this.state.trendNumArray.map((element) => (element + 10));
      this.setState({
          selectedTrend: newSelTrendsArray,
          trendNumArray: newTrendNumArray,
      });
    }
  }

  /*= =====================================================================
  // When the user clicks the Back button, hide results and display
  // keywords. In addition, reset state.
  ====================================================================== */
  handleBackToKeywords() {
    const newSelTrendsArray = this.state.selectedTrend.map((element) => (false));
    const newTrendNumArray = this.state.trendNumArray.map((element, index) => (index));
    this.setState({
      selectedTrend: newSelTrendsArray,
      showKeywords: true,
      showResultsTrends: false,
      trendNumArray: newTrendNumArray,
    });
    window.scrollTo(0,0);
  }

    /*= =====================================================================
  // When the user clicks the Back button, hide conversations and show
  // trends.
  ====================================================================== */
  handleBackToTrends() {
    const newSelConvoArray = this.state.selectedConversation.map((element) => (false));
    this.setState({
      showResultsTrends: true,
      showResultsConversations: false,
      selectedConveration: newSelConvoArray,
    });
    window.scrollTo(0,0);
  }

  
  /*= =====================================================================
  // Display trends.
  ====================================================================== */
  displayResultsTrends(i) {
    this.setState({
      breadcrumbCurrentStep: 'Keyword Trends',
      showKeywords: false,
      showResultsTrends: true,
    });
    window.scrollTo(0,0);
  }

      /*= =====================================================================
  // Display conversations.
  ====================================================================== */
  displayResultsConversations(i) {
    this.setState({
      breadcrumbCurrentStep: 'Trend Conversations',
      showResultsTrends: false,
      showResultsConversations: true,
    });
    window.scrollTo(0,0);
  }

  /*= =====================================================================
  // When the user clicks the Analyze Trend campaign, ensure that
  // a trend has been checkmarked and then direct the user to results.
  ====================================================================== */
  handleCampaignBegin() {
    this.setState({
      breadcrumbCurrentStep: 'Create Campaign',
      showResultsConversations: false,
      showCampaign: true,
    });
    window.scrollTo(0,0);
  }

  /*= =====================================================================
  // When the user clicks the Analyze Trend campaign, ensure that
  // a trend has been checkmarked and then direct the user to results.
  ====================================================================== */
  handleCampaignSubmit() {
    this.setState({
      breadcrumbCurrentStep: 'Campaign Success',
      showCampaign: false,
      showConfirmation: true,
    });
    window.scrollTo(0,0);
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
          : null }
        { (this.state.showNoKeywords)
          ? <div>No keywords found. Visit <a href="#/admin/marketinganalysis/addkeyword">add keyword</a> to get started.</div>
          : null }
        { (this.state.showKeywords)
          ? <AnalysisKeywords 
              allKeywords={this.state.keywordsArray} 
              selectKeyword={this.displayResultsTrends}
            />
          : null }
        { (this.state.showResultsTrends)
          ? <AnalysisKeywordTrends
            resultsData={this.state.data}
            trendNum={this.state.trendNumArray}
            selTrend={this.state.selectedTrend}
            toolOpen={this.state.tooltipOpen}
            keyword="Keyword"
            handleSelectionSubmit={this.handleMarketingResultsSelectionSubmit}
            previous10Results={this.handlePrevious10Results}
            next10Results={this.handleNext10Results}
            changeTooltip={this.toggleTooltip}
            changeCheckbox={this.toggleTrendCheckbox}
            backToKeywords={this.handleBackToKeywords}
            analyzeTrend={this.displayResultsConversations}
          />
          : null }
        { (this.state.showResultsConversations)
          ? <AnalysisTrendConversations
            resultsData={this.state.data}
            trendNum={this.state.trendNumArray}
            selConvo={this.state.selectedConversation}
            keyword="Keyword"
            handleSelectionSubmit={this.handleMarketingResultsSelectionSubmit}
            previous10Results={this.handlePrevious10Results}
            next10Results={this.handleNext10Results}
            changeCheckbox={this.toggleConversationCheckbox}
            backToTrends={this.handleBackToTrends}
            startCampaign={this.handleCampaignBegin}
          />
          : null }
        { (this.state.showCampaign)
          ? <AnalysisCampaign
            resultsData={this.state.data}
            campaignSubmit={this.handleCampaignSubmit}
          />
          : null }
        { (this.state.showConfirmation)
          ? <AnalysisConfirmation />
          : null }
      </div>
    );
  }
}

export default AnalysisResults;
