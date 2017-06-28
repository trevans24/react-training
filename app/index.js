'use strict'
// imports
const React = require('react'),
	ReactDOM = require('react-dom');

// import components
import { Badge } from './badge';

// require css file
require('./index.css');

//components can have UI, state, and lifecycle events /properties
// UI is required

// component using Class that extends a parent component/object
class App extends React.Component {
	render() {
		let friends = [
		{
			name: 'Bob',
			friend: true
		},
		{
			name: 'Alex',
			friend: true
		},
		{
			name: 'Jacy',
			friend: true
		},
		{
			name: 'Casey',
			friend: false
		},
		{
			name: 'Billy',
			friend: false
		}
		];
		return(
			<div>
				Hello!
				<h1>People I know</h1>
				<ul>
					{friends.map((friend) => {
						return <li key={friend.name}> {friend.name} </li>
					})}
				</ul>
				<h1>Friends</h1>
				<ul>
					{friends.filter((user) => {
						return user.friend === true;
					}).map((user) => {
						return <li key={user.name}> {user.name} </li>
					})}
				</ul>
				<h1>Not Friends</h1>
				<ul>
					{friends.filter((user) => {
						return user.friend !== true;
					}).map((user) => {
						return <li key={user.name}> {user.name} </li>
					})}
				</ul>
				<Badge />
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