// imports
const React = require('react'),
	ReactDOM = require('react-dom'),
	PropTypes = require('prop-types');

export default class Language extends React.Component {
	render() {
		let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

		return (
			<ul className="languages">
				{languages.map((language) => {
					return (
						<li 
						style={language === this.props.selectedLanguage ? { color: '#d0021b' } : null}
						onClick={this.props.onSelect.bind(null, language)}
						key={language}>
							{language}
						</li>
					)
				})}
			</ul>
		)
	}
}

Language.PropTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
}
