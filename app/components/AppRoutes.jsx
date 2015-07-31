import React from 'react';
import Router from 'react-router';
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

// Here we define all our material-ui ReactComponents.
import App from './App.jsx';
import Apply from './people/Apply.jsx';

let AppRoutes = (
  <Route name="root" path="/" handler={App}>

    <DefaultRoute handler={Apply}/>
  </Route>
);

export default AppRoutes;
