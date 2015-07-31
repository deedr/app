import React from 'react';
import { AppBar, AppCanvas, FlatButton, IconButton, Menu, Styles, RaisedButton, Dialog, Avatar, Card, CardHeader, CardMedia,
  CardText,CardActions, CardTitle  } from 'material-ui';
import Router from 'react-router';


let RouteHandler = Router.RouteHandler;
let ThemeManager = new Styles.ThemeManager();
let Colors = Styles.Colors;


class App extends React.Component {

  constructor() {
    super();
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

    return (
      <AppCanvas>
        <AppBar title="Deedr" showMenuIconButton={false}/>

        <RouteHandler />
      </AppCanvas>
    );
  }

}
;

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};


export default App;