import React from 'react';
import {RaisedButton, Styles} from 'material-ui';
import Router from 'react-router';

let Link = Router.Link;

import MultiSelectField from './../widgets/MultiSelectField.jsx';
let { Spacing, Colors } = Styles;

class Apply extends React.Component {

  constructor() {
    super();
    this.state = {
      causes: [],
      skills: []
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleSkillsUpdate = this.handleSkillsUpdate.bind(this);
    this.handleCausesUpdate = this.handleCausesUpdate.bind(this);
  }

  render() {
    var skills = [
      { label: 'SEO', value: 'seo' },
      { label: 'Construction', value: 'construction' },
      { label: 'Computer Programming', value: 'coputer' }
    ];
    var causes = [
      { label: 'Cute Animalas', value: 'cute' },
      { label: 'Ugly animals', value: 'ugle' },
      { label: 'super ugly animals', value: 'strawberry' }
    ];
    let styles = {
      button: {
        textAlign: 'center',
        paddingTop: '20px'
      },
      select: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1000px',
        padding: Spacing.desktopGutterMore + 'px'
      }
    };
    return (
      <div>
        <div style={styles.select}>
          <MultiSelectField ops={skills} label="What are you good at?"
                            onUpdate={this.handleSkillsUpdate}/>
        </div>
        <div style={styles.select}>
          <MultiSelectField ops={causes} label="What do you care about?"
                            onUpdate={this.handleCausesUpdate}/>
        </div>
        <div style={styles.button}>
          <Link to="campaign">
            <RaisedButton label="Apply" primary={true} onTouchTap={this.handleTouchTap}/>
          </Link>

        </div>
      </div>

    );
  }

  handleSkillsUpdate(newSkills) {
    this.setState({
      skills: newSkills
    });
  }

  handleCausesUpdate(newCauses) {
    this.setState({
      causes: newCauses
    });
  }

  handleTouchTap() {
    console.log(this.state);
  }

}

export default Apply;