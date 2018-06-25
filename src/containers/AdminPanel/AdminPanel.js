import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Footer from '../../components/Footer/';

import AddKeyword from '../../views/AddKeyword/';
import Dashboard from '../../views/Dashboard/';
import MarketingAnalysis from '../../views/MarketingAnalysis/';
import EventAnalysis from '../../views/EventAnalysis/';
import CompetitorAnalysis from '../../views/CompetitorAnalysis/';
import ReputationReport from '../../views/ReputationReport/';
import MyCampaigns from '../../views/MyCampaigns/';
import MyProfile from '../../views/MyProfile/';
import MyProfileEditLogin from '../../views/MyProfile/children/MyProfileEditLogin/';
import MyProfileAddLogin from '../../views/MyProfile/children/MyProfileAddLogin/';
import Help from '../../views/Help/';

/*= =====================================================================
// This is the full wrapper for Cobia Systems which includes a sidebar,
// container for views, aside, and footer. It also includes
// routing for all views.
====================================================================== */
class AdminPanel extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
    };
  }

  /*= =====================================================================
  // Upon arriving at the Admin Panel this function will be run to see if
  // the user is logged in. If not, it will redirect them to the login
  // page.
  ====================================================================== */
  checkAuthentication() {
    const token = localStorage.getItem('cobiaUserEmail');
    if (!token) {
      this.setState({
        loggedIn: false,
      });
    }
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  /*= =====================================================================
  // This will render the entire layout of the Admin Panel, in addition
  // to handling displaying of views within the UI.
  ====================================================================== */
  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Container fluid>
              <Switch>
                <Route path="/admin/dashboard" name="Dashboard" component={Dashboard} />
                <Route path="/admin/addkeyword" name="AddKeyword" component={AddKeyword} />
                <Route path="/admin/marketinganalysis" name="MarketingAnalysis" component={MarketingAnalysis} />
                <Route path="/admin/eventanalysis" name="EventAnalysis" component={EventAnalysis} />
                <Route path="/admin/competitoranalysis" name="CompetitorAnalysis" component={CompetitorAnalysis} />
                <Route path="/admin/reputationreport" name="ReputationReport" component={ReputationReport} />
                <Route path="/admin/mycampaigns" name="MyCampaigns" component={MyCampaigns} />
                <Route exact path="/admin/myprofile" name="MyProfile" component={MyProfile} />
                <Route exact path="/admin/myprofile/editlogin" name="MyProfileEditLogin" component={MyProfileEditLogin} />
                <Route exact path="/admin/myprofile/addlogin" name="MyProfileAddLogin" component={MyProfileAddLogin} />
                <Route path="/admin/help" name="Help" component={Help} />
                <Redirect from="/" to="/admin/dashboard" />
              </Switch>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AdminPanel;
