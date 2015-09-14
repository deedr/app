import React from 'react';
import {Table,
    TableHeader,
    TableRow,
    TableBody,
    TableHeaderColumn,
    TableRowColumn,
    TableFooter,
    Styles} from 'material-ui';
import {PieChart} from 'react-d3';
import {SkillsOptions} from '../../constants/FilterContants.js';
import MultiSelectField from './../widgets/MultiSelectField.jsx';
let { Spacing, Colors } = Styles;


class EmployeeTable extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return ( <Table
                height="250px"
                fixedHeader={true}
                selectable={false}>
                <TableHeader
                    adjustForCheckbox={false}
                    displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan="3" tooltip='Super Header' style={{textAlign: 'center'}}>
                            Employee Table
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip='The ID'>ID</TableHeaderColumn>
                        <TableHeaderColumn tooltip='The Name'>Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip='The Status'>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    showRowHover={true}>
                    <TableRow>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    <TableRow >
                        <TableRowColumn>3</TableRowColumn>
                        <TableRowColumn>Stephanie Sanders</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>4</TableRowColumn>
                        <TableRowColumn>Steve Brown</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>5</TableRowColumn>
                        <TableRowColumn>Joyce Whitten</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>6</TableRowColumn>
                        <TableRowColumn>Samuel Roberts</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>7</TableRowColumn>
                        <TableRowColumn>Adam Moore</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>

        );
    }

}

export default EmployeeTable;