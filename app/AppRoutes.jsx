import React from 'react';
import {Route, DefaultRoute} from 'react-router';

// Here we define all our material-ui ReactComponents.
import App from './App.jsx';
import Apply from './components/people/Apply.jsx';
import CampaignsList from './components/people/CampaignsList.jsx';
import CampaignCard from './components/people/CampaignCard.jsx';
import Dashboard from './components/companies/Dashboard.jsx';

let AppRoutes = (
  <Route name="root" path="/" handler={App}>
    <Route name="people" handler={Apply} />
    <Route name="campaigns" handler={CampaignsList} />
    <Route name="campaign" handler={CampaignCard} path="campaign/:id" />
    <Route name="dashboard" handler={Dashboard} />
    <DefaultRoute handler={Apply}/>
  </Route>
);

export default AppRoutes;
