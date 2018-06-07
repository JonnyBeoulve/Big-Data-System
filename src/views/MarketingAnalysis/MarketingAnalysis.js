import React, { Component } from 'react';

import MarketingAnalysisForm from './children/MarketingAnalysisForm/MarketingAnalysisForm';
import Loader from '../Loader';
import MarketingAnalysisResults from './children/MarketingAnalysisResults/MarketingAnalysisResults';

/*======================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
======================================================================*/
class MarketingAnalysis extends Component {

    /*======================================================================
    // This will bind this to all core functions of marketing analysis
    // so child components can communicate upward. This also houses the
    // state of the user's input before analysis.
    ======================================================================*/
    constructor(props) {
      super(props);
      this.handleMarketingAnalysisFormSubmit = this.handleMarketingAnalysisFormSubmit.bind(this);
      this.state = {
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
            showLoader: false,
            showResults: true,
          }) 
        }, 500); 
    return;
  }

  render() {
    return (
      <div>
        { (this.state.showForm)
          ? <MarketingAnalysisForm handleFormSubmit={this.handleMarketingAnalysisFormSubmit} />
          : <div></div> }
        { (this.state.showLoader)
          ? <Loader />
          : <div></div> }
        { (this.state.showResults)
          ? <MarketingAnalysisResults />
          : <div></div> }
      </div>
    )
  }
}

export default MarketingAnalysis;
