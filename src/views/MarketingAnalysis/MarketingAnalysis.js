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
      this.handleKeywordChange = this.handleKeywordChange.bind(this);
      this.handleAreaChange = this.handleAreaChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleDriver1Change = this.handleDriver1Change.bind(this);
      this.handleDriver2Change = this.handleDriver2Change.bind(this);
      this.handleDriver3Change = this.handleDriver3Change.bind(this);
      this.handleDriver4Change = this.handleDriver4Change.bind(this);
      this.handleDriver5Change = this.handleDriver5Change.bind(this);
      this.handleB2Change = this.handleB2Change.bind(this);
      this.state = {
          breadcrumbCurrentStep: 'Marketing Analysis',
          showForm: true,
          showLoader: false,
          showResults: false,
          showCampaign: false,
          showConfirmation: false,
          analysisFormKeyword: '',
          analysisFormArea: 'City',
          analysisFormLocation: '',
          analysisFormDriver1: '',
          analysisFormDriver2: '',
          analysisFormDriver3: '',
          analysisFormDriver4: '',
          analysisFormDriver5: '',
          analysisFormB2: 'B2C',
      };
  }

    /*======================================================================
    // This will update the state of keyword as the user inputs text.
    ======================================================================*/
    handleKeywordChange (e) {
      this.setState({
        analysisFormKeyword: e.target.value,
        })
      return;
  }

    /*======================================================================
  // This will update the state of location as the user inputs text.
  ======================================================================*/
  handleAreaChange (e) {
      this.setState({
        analysisFormArea: e.target.value,
      })
      return;
  }

  /*======================================================================
  // This will update the state of area as the user inputs text.
  ======================================================================*/
  handleLocationChange (e) {
      this.setState({
        analysisFormLocation: e.target.value,
      })
      return;
  }

  /*======================================================================
  // This will update the state of driver1 as the user inputs text.
  ======================================================================*/
  handleDriver1Change (e) {
      this.setState({
        analysisFormDriver1: e.target.value,
      })
      return;
  }

  /*======================================================================
  // This will update the state of driver1 as the user inputs text.
  ======================================================================*/
  handleDriver2Change (e) {
      this.setState({
        analysisFormDriver2: e.target.value,
      })
      return;
  }

  /*======================================================================
  // This will update the state of driver1 as the user inputs text.
  ======================================================================*/
  handleDriver3Change (e) {
      this.setState({
        analysisFormDriver3: e.target.value,
      })
      return;
  }

  /*======================================================================
  // This will update the state of driver1 as the user inputs text.
  ======================================================================*/
  handleDriver4Change (e) {
      this.setState({
        analysisFormDriver4: e.target.value,
      })
      return;
  }

  /*======================================================================
  // This will update the state of driver1 as the user inputs text.
  ======================================================================*/
  handleDriver5Change (e) {
      this.setState({
        analysisFormDriver5: e.target.value,
      })
      return;
  }

  /*======================================================================
  // This will update the state of driver1 as the user inputs text.
  ======================================================================*/
  handleB2Change (e) {
      this.setState({
        analysisFormB2: e.target.value,
      })
      return;
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
        }, 500); 
    console.log(this.state.analysisFormDriver5);
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
        }, 500); 
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
        }, 500); 
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
          ? <MarketingAnalysisForm keywordChange={ this.handleKeywordChange} locationChange={ this.handleLocationChange } 
              areaChange={ this.handleAreaChange } driver1Change={ this.handleDriver1Change } driver2Change={ this.handleDriver2Change } 
              driver3Change={ this.handleDriver3Change } driver4Change={ this.handleDriver4Change } 
              driver5Change={ this.handleDriver5Change } b2Change={ this.handleB2Change } handleFormSubmit={ this.handleMarketingAnalysisFormSubmit } 
            />
          : <div></div> }
        { (this.state.showLoader)
          ? <Loader />
          : <div></div> }
        { (this.state.showResults)
          ? <MarketingAnalysisResults keyword={ this.state.analysisFormKeyword } area={ this.state.analysisFormArea } location={ this.state.analysisFormLocation } 
              driver1={ this.state.analysisFormDriver1 } driver2={ this.state.analysisFormDriver2 } driver3={ this.state.analysisFormDriver3 }
              driver4={ this.state.analysisFormDriver4 } driver5={ this.state.analysisFormDriver5 } b2={ this.state.analysisFormB2 }
              handleSelectionSubmit={ this.handleMarketingResultsSelectionSubmit }
            />
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
