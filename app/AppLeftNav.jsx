import React from 'react';
import Router from 'react-router';
import { MenuItem, LeftNav, Styles } from 'material-ui';
let { Colors, Spacing, Typography } = Styles;

let menuItems = [
  { type: MenuItem.Types.SUBHEADER, text: 'Types' },
  { route: 'people', text: 'Employees' },
  { route: 'dashboard', text: 'Manager' },
  { type: MenuItem.Types.SUBHEADER, text: 'Social Media' },
  { type: MenuItem.Types.LINK, payload: 'https://www.facebook.com/goodwillhappen', text: 'Facebook' },
  { type: MenuItem.Types.LINK, payload: 'https://twitter.com/deedr_eu', text: 'Twitter' }
];


class AppLeftNav extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.toggle = this.toggle.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
    this._onHeaderClick = this._onHeaderClick.bind(this);
  }

  getStyles() {
    return {
      cursor: 'pointer',
      //.mui-font-style-headline
      fontSize: '24px',
      color: Typography.textFullWhite,
      lineHeight: Spacing.desktopKeylineIncrement + 'px',
      fontWeight: Typography.fontWeightLight,
      backgroundColor: Colors.cyan500,
      paddingLeft: Spacing.desktopGutter,
      paddingTop: '0px',
      marginBottom: '8px'
    };
  }

  render() {
    let header = (
      <div style={this.getStyles()} onTouchTap={this._onHeaderClick}>
        Deedr
      </div>
    );

    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={menuItems}
        selectedIndex={this._getSelectedIndex()}
        onChange={this._onLeftNavChange} />
    );
  }

  toggle() {
    this.refs.leftNav.toggle();
  }

  _getSelectedIndex() {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
  }

  _onLeftNavChange(e, key, payload) {
    this.context.router.transitionTo(payload.route);
  }

  _onHeaderClick() {
    this.context.router.transitionTo('people');
    this.refs.leftNav.close();
  }

}

AppLeftNav.contextTypes = {
  router: React.PropTypes.func
};

module.exports = AppLeftNav;
