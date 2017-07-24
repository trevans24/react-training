// imports
const React = require('react'),
	ReactDOM = require('react-dom');
// React Router
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

// components
import Popular from './Popular';

// component using Class that extends a parent component/object
export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Route path="/popular" component={Popular} />
				</div>
			</Router>
		)
	}
}