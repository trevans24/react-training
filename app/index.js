// imports
const React = require('react'),
	ReactDOM = require('react-dom'),
	PropTypes = require('prop-types');

// require css styling
require('./index.css');

// components
import App from './components/App';

// Render Component what and where to render the component in HTML
// ReactDOM.Render takes to parameters the component and where to render it
ReactDOM.render(
	<App />,
	document.getElementById('app')
);