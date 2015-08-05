import React from 'react';
import _ from 'lodash';
import Link from 'react-router';
import {
  Card,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui';
import AttributeSetter from '../../utils/AttributeSetter.js';
import CampaignsStore from '../../stores/CampaignsStore.js';
import CampaignListItem from './CampaignListitem.jsx'

class CampaignsList extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getStateFromStores();
    this.setLayout = this.setLayout.bind(this);
  }

  getStateFromStores() {
    return {
      campaigns: CampaignsStore.getCampaigns()
    }
  }

  setLayout() {
    var gridLayout = {
      layout: 'row',
      layoutAlignGtSm: 'center start',
      layoutAlignGtMd: 'start start',
      layoutWrap: ''
    }, cardLayout = {
      flexGtLg: '33',
      flexGtMd: '50',
      flexGtSm: '100',
      layoutPadding: ''
    };
    var grid = this.refs.grid.getDOMNode();
    AttributeSetter(grid, gridLayout);
    _.forEach(grid.children, (node) => AttributeSetter(node, cardLayout));
  }

  componentDidMount() {
    this.setLayout();
  }

  componentDidUpdate() {
    this.setLayout();
  }

  onClickedCard(){

  }

  //TODO:We shouldn't really render here; refactor
  render() {
    let styles = {
      cards: {
        maxWidth: '700px'
      }
    }
    let cards = this.state.campaigns.map((campaign, index)=> {
      return (
        <div key={index} style={styles.cards}>
          <CampaignListItem campaign={campaign}/>
        </div>
      );
    });
    return (
        <div ref="grid">
          {cards}
        </div>
    );
  }

}

export default CampaignsList;
