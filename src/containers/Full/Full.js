import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import MarketingAnalysis from '../../views/MarketingAnalysis/';
import EventAnalysis from '../../views/EventAnalysis/';
import CompetitorAnalysis from '../../views/CompetitorAnalysis/';
import ReputationReport from '../../views/ReputationReport/';
import MyCampaigns from '../../views/MyCampaigns/';
import MyProfile from '../../views/MyProfile/';
import Help from '../../views/Help/';

/*======================================================================
// This is the full wrapper for Cobia Systems which includes a sidebar,
// container for views, aside, and footer. It also includes
// routing for all views.
======================================================================*/
class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={ Dashboard }/>
                <Route path="/marketinganalysis" name="MarketingAnalysis" component={ MarketingAnalysis }/>
                <Route path="/eventanalysis" name="EventAnalysis" component={ EventAnalysis }/>
                <Route path="/competitoranalysis" name="CompetitorAnalysis" component={ CompetitorAnalysis }/>
                <Route path="/reputationreport" name="ReputationReport" component={ ReputationReport }/>
                <Route path="/mycampaigns" name="MyCampaigns" component={ MyCampaigns }/>
                <Route path="/myprofile" name="MyProfile" component={ MyProfile }/>
                <Route path="/help" name="Help" component={ Help }/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
