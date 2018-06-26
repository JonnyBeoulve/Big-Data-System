import React, { Component } from 'react';
import axios from 'axios';

import AnalysisKeywords from './AnalysisKeywords/AnalysisKeywords';
import Loader from '../../Loader';
import AnalysisTable from './AnalysisTable/AnalysisTable';
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
    ====================================================================== */
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbCurrentStep: 'Analysis Results',
      showLoader: true,
      showNoKeywords: false,
      showKeywords: false,
      showResults: false,
      showCampaign: false,
      showConfirmation: false,
      data: jsonData,
      keywordsArray: [],
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
    axios ({
      method: 'post',
      url: 'http://cobiasystems.lc/rest/admin/keyword/get_keywords',
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
          ? <AnalysisKeywords allKeywords={this.state.keywordsArray} />
          : <div /> }
        { (this.state.showResults)
          ? <AnalysisTable
            resultsData={this.state.data}
            keyword={this.state.analysisFormKeyword}
            area={this.state.analysisFormArea}
            location={this.state.analysisFormLocation}
            driver1={this.state.analysisFormDriver1}
            driver2={this.state.analysisFormDriver2}
            driver3={this.state.analysisFormDriver3}
            driver4={this.state.analysisFormDriver4}
            driver5={this.state.analysisFormDriver5}
            b2={this.state.analysisFormB2}
            handleSelectionSubmit={this.handleMarketingResultsSelectionSubmit}
          />
          : <div /> }
        { (this.state.showCampaign)
          ? <AnalysisCampaign
            resultsData={this.state.data}
            handleCampaignSubmit={this.handleMarketingCampaignSubmit}
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
