'use strict'
// import react and react-dom
const React = require('react'),
	ReactDOM = require('react-dom');

// require css file
require('./index.css');

//components can have UI, state, and lifecycle events /properties
// UI is required

// component using Class that extends a parent component/object
class App extends React.Component {
	render() {
		return(
			<div>
				Hello World!
			</div>
		);
	}
}

// Render Component what and where to render the component in HTML
// ReactDOM.Render takes to parameters the component and where to render it
ReactDOM.render(
	<App />,
	document.getElementById('app')
);