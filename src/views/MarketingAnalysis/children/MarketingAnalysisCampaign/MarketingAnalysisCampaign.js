import React, { Component } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  InputGroup,
} from 'reactstrap';

/*= =====================================================================
// This is the dashboard view that users will land on upon logging into
// Cobia Systems.
====================================================================== */
class MarketingAnalysisForm extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row className="show-grid">
          <Col lg="6">
            <form>
              <div className="form-group">
                <label htmlFor="inputCampaignName">What would you like to name your campaign?</label>
                <input type="text" className="form-control" id="inputCampaignNameField" aria-describedby="emailHelp" placeholder="Campaign Name" />
              </div>
              <div className="form-group">
                <label htmlFor="inputKeyword">Pick a trending keyword.</label>
                <select className="form-control" id="inputCampaignTrendField">
                  <option>{this.props.resultsData[0].Description_enriched.keywords[0].text}</option>
                  <option>{this.props.resultsData[1].Description_enriched.keywords[0].text}</option>
                  <option>{this.props.resultsData[2].Description_enriched.keywords[0].text}</option>
                  <option>{this.props.resultsData[3].Description_enriched.keywords[0].text}</option>
                  <option>{this.props.resultsData[4].Description_enriched.keywords[0].text}</option>
                  <option>{this.props.resultsData[5].Description_enriched.keywords[0].text}</option>
                  <option>{this.props.resultsData[6].Description_enriched.keywords[0].text}</option>
                  <option>{this.props.resultsData[7].Description_enriched.keywords[0].text}</option>
                  <option>{this.props.resultsData[8].Description_enriched.keywords[0].text}</option>
                  <option>{this.props.resultsData[9].Description_enriched.keywords[0].text}</option>
                </select>
              </div>
              <FormGroup>
                <Label htmlFor="appendedPrependedInput">How much do you want to spend on this campaign?</Label>
                <div className="controls">
                  <InputGroup className="input-prepend">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <Input id="inputSpendField" size="16" type="text" />
                    <div className="input-group-append">
                      <span className="input-group-text">.00</span>
                    </div>
                  </InputGroup>
                </div>
              </FormGroup>
              <div className="form-group">
                <label htmlFor="inputKeyword">Lastly, what do you want your campaign to say?</label>
                <textarea cols="10" rows="5" type="text" className="form-control" id="inputContentField" aria-describedby="emailHelp" placeholder="Can you almost feel the Pacific Ocean breeze drift through the tree-lined beach at @FSCostaRica? That's what we call pura vida. Begin your adventure at HotelCompany.com" />
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.props.handleCampaignSubmit}>Submit</button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MarketingAnalysisForm;
