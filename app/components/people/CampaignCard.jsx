import React from 'react';
import reactMixin from 'react-mixin';
import {State} from 'react-router';
import {
  Avatar,
  Card,
  CardActions,
  CardExpandable,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
  FlatButton,
  Styles
} from 'material-ui';
import CampaignsStore from '../../stores/CampaignsStore.js';

let {Spacing} = Styles;

@reactMixin.decorate(State)
class CampaignCard extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      campaign: CampaignsStore.getCampaign(this.getParams().id)
    };
  }

  render() {
    let styles = {
      root: {
        maxWidth: '900px',
        marginLeft: 'auto',
        marginTop: '8px',
        marginRight: 'auto'
      }
    };
    let campaign = this.state.campaign;
    return (
      <div style={styles.root}>
        <Card>
          <CardMedia overlay={<CardTitle title={campaign.title} subtitle={campaign.subtitle}/>}>
            <img src={campaign.cover}/>
          </CardMedia>
          <CardText>
            {campaign.description}
          </CardText>
          <CardActions>
            <FlatButton label="Apply"/>
          </CardActions>
        </Card>
      </div>
    );
  }

}
CampaignCard.contextType = {
  router: React.PropTypes.func.isRequired
};

export default CampaignCard;
