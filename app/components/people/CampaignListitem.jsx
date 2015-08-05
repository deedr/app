import React from 'react';
import reactMixin from 'react-mixin';
import {Navigation} from 'react-router';
import {
  Avatar,
  Card,
  CardTitle,
  CardMedia,
  CardText,
  Paper,
  Styles
} from 'material-ui';

let {Transitions } = Styles;

@reactMixin.decorate(Navigation)
class CampaignListItem extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { zDepth: 1 };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  render() {
    let style = {
      cursor: 'pointer',
      transition: Transitions.easeOut()
    };
    let campaign = this.props.campaign;
    return (
      <Paper zDepth={this.state.zDepth} style={style}
             onClick={() => this.transitionTo('campaign', {id: campaign.id})}
             onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <CardMedia overlay={<CardTitle title={campaign.title} subtitle={campaign.subtitle}/>}>
          <img src={campaign.cover}/>
        </CardMedia>
        <CardText>
          {campaign.shortDesc}
        </CardText>
      </Paper>
    );
  }

  onMouseEnter() {
    this.setState({
      zDepth: 4
    });
  }

  onMouseLeave() {
    this.setState({
      zDepth: 1
    });
  }
}
CampaignListItem.propTypes = {
  campaign: React.PropTypes.object.isRequired
};
export default CampaignListItem;
