import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
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
                <Route path="/dashboard" name="dashboard" component={Dashboard}/>
                <Route path="/marketinganalysis" name="marketinganalysis" component={MarketingAnalysis}/>
                <Route path="/eventanalysis" name="eventanalysis" component={EventAnalysis}/>
                <Route path="/competitoranalysis" name="competitoranalysis" component={CompetitorAnalysis}/>
                <Route path="/reputationreport" name="reputationreport" component={ReputationReport}/>
                <Route path="/mycampaigns" name="mycampaigns" component={MyCampaigns}/>
                <Route path="/myprofile" name="myprofile" component={MyProfile}/>
                <Route path="/help" name="help" component={Help}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
