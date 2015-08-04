import React from 'react';
import _ from 'lodash';
import {
  Card,
  CardMedia,
  CardTitle,
  Styles
} from 'material-ui';
import AttributeSetter from '../../utils/AttributeSetter.js';

class CampaignsList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var gridLayout = {
      layout: 'row',
      layoutAlign: 'center start',
      layoutPadding: '',
      layoutWrap: ''
    };
    var grid = this.refs.grid.getDOMNode();
    AttributeSetter(grid, gridLayout);
  }

  render() {
    var style = {
      maxWidth: '400px',
      minWidth: '200px',
      minHeight: '200px',
      margin: '8px'
    };
    return (
      <div ref="grid" >
        <Card style={style}>
          <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
            <img src="http://lorempixel.com/600/337/people/"/>
          </CardMedia>
        </Card>
        <Card style={style}>
          <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
            <img src="http://lorempixel.com/600/337/people/"/>
          </CardMedia>
        </Card>
        <Card style={style}>
          <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
            <img src="http://lorempixel.com/600/337/people/"/>
          </CardMedia>
        </Card>
        <Card style={style}>
          <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
            <img src="http://lorempixel.com/600/337/people/"/>
          </CardMedia>
        </Card>
      </div>
    );
  }

}

export default CampaignsList;
