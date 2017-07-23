// imports
const React = require('react'),
	ReactDOM = require('react-dom'),
	PropTypes = require('prop-types');

// importing components
const Language = require('./Language');
const RepoGrid = require('./RepoGrid');

// import axios http methods
const api = require('../utils/api');

export default class Popular extends React.Component {
	constructor(props) {
	  super(props);
	  // initial state
	  this.state = {
	  	selectedLanguage: 'All',
	  	repos: null
	  };
	  // bind new function on method based on selected language
	  // calling updateLanguage in proper context
	  this.updateLanguage = this.updateLanguage.bind(this);
	}

	// component lifecycle
	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage);
	}

// update state based on selected language
	updateLanguage(language) {
		this.setState(() => {
			return {
				selectedLanguage: language
			};
		});

		// get repos
		api.getRepos(language)
			.then((repos) => {
				// console.log(repos);
				this.setState(() => {
					return {
						repos: repos
					};
				});
		});
	}

	render() {
		return (
			<div>
				<Language 
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
					 />
				{ // once repos load then display repo grid
					!this.state.repos
					? <p>Loading...</p>
					: <RepoGrid repos={this.state.repos} />
				}
			</div>
		)
	}
}
