'use-strict'
// imports
const React = require('react'),
	ReactDOM = require('react-dom'),
	PropTypes = require('prop-types');

// component
export default class Badge extends React.Component {
	render() {
		return(
			<div>
				<img
					src={this.props.image}
					alt='Avatar'
					style={{width: 100, height: 100}}
				/>
				<h1>Name: {this.props.name}</h1>
				<h3>username: {this.props.username}</h3>
			</div>
		);
	}
}

// Prop Types
Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

// Render the component
ReactDOM.render(
	<Badge 
		name='Troy Evans'
		username='trevans24'
		img={'http://troyevans.co/img/me/me.jpg'}
	/>
)
