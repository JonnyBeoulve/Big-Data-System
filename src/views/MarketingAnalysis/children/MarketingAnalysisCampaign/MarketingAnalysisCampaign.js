import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from 'reactstrap';

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
          <FormGroup>
            <Label htmlFor="appendedPrependedInput">How much do you want to spend on this campaign?</Label>
            <div className="controls">
              <InputGroup className="input-prepend">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <Input id="inputSpendField" size="16" type="text"/>
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </InputGroup>
            </div>
          </FormGroup>
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
