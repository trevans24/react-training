// imports
const React = require('react'),
	ReactDOM = require('react-dom'),
	PropTypes = require('prop-types');

function Language(props) {
	let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

	return (
		<ul className="languages">
			{languages.map((language) => {
				return (
					<li 
					style={language === props.selectedLanguage ? { color: '#d0021b' } : null}
					onClick={props.onSelect.bind(null, language)}
					key={language}>
						{language}
					</li>
				)
			})}
		</ul>
	)
}

Language.PropTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
}

module.exports = Language;