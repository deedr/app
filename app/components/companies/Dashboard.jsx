import React from 'react';
import {RaisedButton, Styles} from 'material-ui';
import {PieChart} from 'react-d3';
import {SkillsOptions} from '../../constants/FilterContants.js';
import MultiSelectField from './../widgets/MultiSelectField.jsx';
import EmployeeTable from './EmployeeTable.jsx';
let { Spacing, Colors } = Styles;


class Dashboard extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let pieData = [{ label: "Margarita", value: 20.0 }, { label: "John", value: 55.0 }, { label: "Tim", value: 25.0 }];
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
          <PieChart data={pieData} width={450} height={400} radius={110} innerRadius={20} sectorBorderColor="white"
                    title="Pie Chart"/>
        </div>
        <EmployeeTable />
      </div>
    );
  }

}

export default Dashboard;