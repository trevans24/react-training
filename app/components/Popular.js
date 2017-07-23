// imports
const React = require('react'),
	ReactDOM = require('react-dom'),
	PropTypes = require('prop-types');

// importing components
const Language = require('./Language');

export default class Popular extends React.Component {
	constructor(props) {
	  super(props);
	  // initial state
	  this.state = {
	  	selectedLanguage: 'All'
	  };
	  // bind new function on method based on selected language
	  // calling updateLanguage in proper context
	  this.updateLanguage = this.updateLanguage.bind(this);
	}

// update state based on selected language
	updateLanguage(language) {
		this.setState(() => {
			return {
				selectedLanguage: language
			};
		});
	}

	render() {
		return (
			<div>
				<Language 
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
					 />
			</div>
		)
	}
}
