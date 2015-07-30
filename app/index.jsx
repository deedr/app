import React from 'react';
import App from './components/App.jsx';
import injectTapEventPlugin from'react-tap-event-plugin';

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

React.render(<App />, document.body);
