// imports
const React = require('react'),
	ReactDOM = require('react-dom'),
	PropTypes = require('prop-types');

// component
function RepoGrid(props) {
	return(
		<ul className="popular-list">
			{props.repos.map((repo, index) => {
				return (
					<li key={repo.name} className="popular-item">
						<div className="popular-rank">
							#{index + 1}
						</div>
						<ul className="space-list-items">
							<li>
								<img 
									src={repo.owner.avatar_url} 
									alt={'Avatar-for-' + repo.owner.login} 
									className="avatar" />
							</li>
							<li>
								<a href={repo.html_url} >{repo.name}</a>
							</li>
							<li>
								@{repo.owner.login}
							</li>
							<li>
								{repo.stargazers_count} stars
							</li>
						</ul>
					</li>
				)
			})}
		</ul>
	)
}

RepoGrid.propTypes = {
	repos: PropTypes.array.isRequired
}

module.exports = RepoGrid;