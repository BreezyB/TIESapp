import React, { Component } from 'react';
import Sidemenu from './Sidemenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';

const muiTheme = getMuiTheme({
	fontFamily: 'Open Sans',
	palette: {
		primary1Color: red700,
	},
  	appBar: {
    	height: 50,
  	},
});
export default class Upload extends Component{
	render(){
		return (
			<MuiThemeProvider muiTheme={muiTheme}> 
				<div>
					<Sidemenu />
					<div className="container">
					<h1>Open Diversity Standards/Project Include</h1>
				    <h2>Hiring</h2>
				    <ul>
				    	<li>
				    		<h3>Use inclusive and transparent hiring practices</h3>
				    	</li>
				    </ul>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}
