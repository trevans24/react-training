// imports
const React = require('react'),
	ReactDOM = require('react-dom');

// components
import Popular from './Popular';

// component using Class that extends a parent component/object
export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Popular />
			</div>
		)
	}
}