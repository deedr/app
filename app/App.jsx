import React from 'react';
import { AppBar, AppCanvas, Styles } from 'material-ui';
import Router from 'react-router';
import GoogleAnalytics from 'react-g-analytics';

let RouteHandler = Router.RouteHandler;
let ThemeManager = new Styles.ThemeManager();
let { Spacing, Colors} = Styles;


class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  }


  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    let root = {
      paddingTop: Spacing.desktopKeylineIncrement + 'px'
    }
    return (
      <AppCanvas>
        <AppBar title="Deedr" showMenuIconButton={false}/>

        <div style={root}>
          <GoogleAnalytics id="UA-64331021-2" pageview={true} displayfeatures={true}/>
          <RouteHandler />
        </div>
      </AppCanvas>
    );
  }

}
;

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};


export default App;