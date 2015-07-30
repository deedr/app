import React from 'react';
import { AppBar, AppCanvas, FlatButton, IconButton, Menu, Styles, RaisedButton, Dialog, Avatar, Card, CardHeader, CardMedia,
  CardText,CardActions, CardTitle  } from 'material-ui';
import Apply from './Apply.jsx';

let ThemeManager = new Styles.ThemeManager();
let Colors = Styles.Colors;


class App extends React.Component {

  constructor() {
    super();
    this._handleTouchTap = this._handleTouchTap.bind(this);
  }


  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  }

  render() {

    return (
      <AppCanvas>
        <AppBar title="Deedr" showMenuIconButton={false}/>

        <Apply/>
      </AppCanvas>
    );
  }

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  }

}
;

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};


export default App;