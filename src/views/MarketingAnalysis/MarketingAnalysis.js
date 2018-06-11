import React, { Component } from 'react';

import MarketingAnalysisForm from './children/MarketingAnalysisForm/MarketingAnalysisForm';
import Loader from '../Loader';
import MarketingAnalysisResults from './children/MarketingAnalysisResults/MarketingAnalysisResults';
import MarketingAnalysisCampaign from './children/MarketingAnalysisCampaign/MarketingAnalysisCampaign';
import MarketingAnalysisConfirmation from './children/MarketingAnalysisConfirmation/MarketingAnalysisConfirmation';

/*======================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
======================================================================*/
class MarketingAnalysis extends Component {

    /*======================================================================
    // This will bind 'this' to all core functions of marketing analysis
    // so child components can communicate upward. This also houses the
    // state of the user's input before analysis.
    ======================================================================*/
    constructor(props) {
      super(props);
      this.handleMarketingAnalysisFormSubmit = this.handleMarketingAnalysisFormSubmit.bind(this);
      this.handleMarketingResultsSelectionSubmit = this.handleMarketingResultsSelectionSubmit.bind(this);
      this.handleMarketingCampaignSubmit = this.handleMarketingCampaignSubmit.bind(this);
      this.state = {
          breadcrumbCurrentStep: 'Marketing Analysis',
          showForm: true,
          showLoader: false,
          showResults: false,
          showCampaign: false,
          showConfirmation: false,
      };
  }

  /*======================================================================
  // This will handle the transition from the marketing analysis form
  // to getting data while displaying a loader.
  ======================================================================*/
  handleMarketingAnalysisFormSubmit (e) {
    this.setState({
        showForm: false,
        showLoader: true,
      })
       setTimeout(() =>{ 
        this.setState({
            breadcrumbCurrentStep: 'Marketing Analysis Results',
            showLoader: false,
            showResults: true,
          }) 
        }, 3000); 
    return;
  }

  /*======================================================================
  // This will handle the transition from viewing results to showing
  // the create campaign form.
  ======================================================================*/
  handleMarketingResultsSelectionSubmit (e) {
    this.setState({
        showResults: false,
        showLoader: true,
      })
      setTimeout(() =>{ 
        this.setState({
            breadcrumbCurrentStep: 'Marketing Analysis Campaign',
            showLoader: false,
            showCampaign: true,
          }) 
        }, 3000); 
    return;
  }

  /*======================================================================
  // This will handle creation of a new campaign by the user before
  // displaying a confirmation message.
  ======================================================================*/
  handleMarketingCampaignSubmit (e) {
    this.setState({
        showCampaign: false,
        showLoader: true,
      })
      setTimeout(() =>{ 
        this.setState({
            breadcrumbCurrentStep: 'Marketing Analysis Confirmation',
            showLoader: false,
            showConfirmation: true,
          }) 
        }, 2000); 
    return;
  }

  /*======================================================================
  // This is a top level container that will display components depending
  // upon the current state of the user's Marketing Analysis process.
  ======================================================================*/
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">{this.state.breadcrumbCurrentStep}</li>
          </ol>
        </nav>
        { (this.state.showForm)
          ? <MarketingAnalysisForm handleFormSubmit={this.handleMarketingAnalysisFormSubmit} />
          : <div></div> }
        { (this.state.showLoader)
          ? <Loader />
          : <div></div> }
        { (this.state.showResults)
          ? <MarketingAnalysisResults handleSelectionSubmit={this.handleMarketingResultsSelectionSubmit} />
          : <div></div> }
        { (this.state.showCampaign)
          ? <MarketingAnalysisCampaign handleCampaignSubmit={this.handleMarketingCampaignSubmit} />
          : <div></div> }
        { (this.state.showConfirmation)
          ? <MarketingAnalysisConfirmation />
          : <div></div> }
      </div>
    )
  }
}

export default MarketingAnalysis;
