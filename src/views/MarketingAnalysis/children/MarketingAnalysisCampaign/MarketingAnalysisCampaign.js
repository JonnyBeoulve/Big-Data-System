import React, { Component } from 'react';

/*======================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
======================================================================*/
class MarketingAnalysisForm extends Component {

  render() {
    return (
      <div className="animated fadeIn">
          <h1 class="display-3">Marketing Campaign</h1>
          <form>
          <div class="form-group">
            <label for="inputCampaignName">What would you like to name your campaign?</label>
            <input type="text" class="form-control" id="inputCampaignNameField" aria-describedby="emailHelp" placeholder="Campaign Name" />
          </div>
          <div class="form-group">
            <label for="inputKeyword">Pick a trending keyword.</label>
            <input type="text" class="form-control" id="inputTrendField" aria-describedby="emailHelp" placeholder="Keyword" />
          </div>
          <div class="form-group">
            <label for="inputKeyword">How much do you want to spend on this campaign?</label>
            <input type="text" class="form-control" id="inputSpendField" aria-describedby="emailHelp" placeholder="$___" />
          </div>
          <div class="form-group">
            <label for="inputKeyword">Lastly, what do you want your campaign to say?</label>
            <textarea cols="10" rows="5" type="text" class="form-control" id="inputContentField" aria-describedby="emailHelp" placeholder="Can you almost feel the Pacific Ocean breeze drift through the tree-lined beach at @FSCostaRica? That's what we call pura vida. Begin your adventure at HotelCompany.com"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" onClick={this.props.handleCampaignSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default MarketingAnalysisForm;
