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
  InputGroupButton,
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
                  <option>Trend 1</option>
                  <option>Trend 2</option>
                  <option>Trend 3</option>
                  <option>Trend 4</option>
                  <option>Trend 5</option>
                  <option>Trend 6</option>
                  <option>Trend 7</option>
                  <option>Trend 8</option>
                  <option>Trend 9</option>
                  <option>Trend 10</option>
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
