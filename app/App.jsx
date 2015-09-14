import React from 'react';
import { AppBar, AppCanvas, Styles } from 'material-ui';
import Router from 'react-router';
import GoogleAnalytics from 'react-g-analytics';
import AppLeftNav from './AppLeftNav.jsx';

let RouteHandler = Router.RouteHandler;
let ThemeManager = new Styles.ThemeManager();
let { Spacing, Colors, Typography} = Styles;


class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        ThemeManager.setPalette({
            accent1Color: Colors.deepOrange500
        });
        this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
    }


    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render() {
        let themeVariables = ThemeManager.getCurrentTheme().component.appBar;
        let root = {
                paddingTop: Spacing.desktopKeylineIncrement + 'px'
            },
            title = {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                margin: 0,
                paddingTop: 0,
                textDecoration: 'none',
                letterSpacing: 0,
                fontSize: 24,
                fontWeight: Typography.fontWeightNormal,
                color: themeVariables.textColor,
                lineHeight: themeVariables.height + 'px',
            };
        return (
            <AppCanvas>
                <AppBar title={<a href="#/people" style={title}>Deedr</a>}
                        onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
                    />
                <AppLeftNav ref="leftNav"/>

                <div style={root}>
                    <GoogleAnalytics id="UA-64331021-2" pageview={true} displayfeatures={true}/>
                    <RouteHandler />
                </div>
            </AppCanvas>
        );
    }


    _onLeftIconButtonTouchTap() {
        this.refs.leftNav.toggle();
    }
}
;

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};


export default App;