import React from 'react';
import Router from 'react-router';
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

// Here we define all our material-ui ReactComponents.
import App from './App.jsx';
import Apply from './people/Apply.jsx';
import CampaignsList from './people/CampaignsList.jsx';

let AppRoutes = (
  <Route name="root" path="/" handler={App}>
    <Route name="campaigns" handler={CampaignsList} />
    <DefaultRoute handler={Apply}/>
  </Route>
);

export default AppRoutes;
