import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';

import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../api/employees.js';
import { List } from 'material-ui/List';
import Employee from './Employee'
import Sidemenu from './Sidemenu'

const muiTheme = getMuiTheme({
	fontFamily: 'Open Sans',
	palette: {
		primary1Color: red700,
	},
  	appBar: {
    	height: 50,
  	},
});
class TeamList extends Component{
	renderEmployees(){
		return this.props.employees.map((employee) => {
			return(<Employee key={employee._id} employee={employee}/>)
		})
	}
	render(){
		return (
			<MuiThemeProvider muiTheme={muiTheme}> 
				<div>
					<Sidemenu />
					<div className="container">
						<div className="row center-align">
							<div className="col m1 offset-m2">
								{'Team Lead'}
							</div>
							<div className="col m1 offset-m2">
								{'Code Review'}
							</div>
							<div className="col m1 offset-m2">
								{'Brownbag'}
							</div>
							<div className="col m1 offset-m2">
								{'Mentor'}
							</div>
							<div className="col m1 offset-m2">
								{'Meeting Facilitator'}
							</div>
						</div>
						<div className="row">
							<List>{ this.renderEmployees() }</List>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}
TeamList.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    employees: Employees.find({}).fetch(),
  };
}, TeamList);

// 