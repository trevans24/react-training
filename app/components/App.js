// imports
const React = require('react');
const	ReactDOM = require('react-dom');
// React Router
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

// components
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';

// component using Class that extends a parent component/object
export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/popular" component={Popular} />
						<Route path="/battle" component={Battle} />
						<Route render={function() {
							return <p>404 Not Found</p>
						}} />
					</Switch>
				</div>
			</Router>
		)
	}
}