import React from 'react';
import {Route, DefaultRoute} from 'react-router';

// Here we define all our material-ui ReactComponents.
import App from './App.jsx';
import Apply from './people/Apply.jsx';
import CampaignsList from './people/CampaignsList.jsx';
import CampaignCard from './people/CampaignCard.jsx';

let AppRoutes = (
  <Route name="root" path="/" handler={App}>
    <Route name="campaigns" handler={CampaignsList} />
    <Route name="campaigns/:id" handler={CampaignCard} />
    <DefaultRoute handler={Apply}/>
  </Route>
);

export default AppRoutes;
