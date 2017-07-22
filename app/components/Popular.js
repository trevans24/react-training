// imports
const React = require('react'),
	ReactDOM = require('react-dom'),
	PropTypes = require('prop-types');

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
		let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

		return (
			<ul className="languages">
				{languages.map((language) => {
					return (
						<li 
						style={language === this.state.selectedLanguage ? { color: '#d0021b' } : null}
						onClick={this.updateLanguage.bind(null, language)}
						key={language}>
							{language}
						</li>
					)
				})}
			</ul>
		)
	}
}

// Popular.propTypes = {
//   language: PropTypes.arrayOf(PropTypes.string).isRequired
// }