import React from 'react';
import Router from 'react-router';
import AppRoutes from './components/AppRoutes.jsx';
import injectTapEventPlugin from'react-tap-event-plugin';

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

Router.run(AppRoutes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
