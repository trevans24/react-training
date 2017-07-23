// require axios
const axios = require('axios');

// Get GitHub Repos
const getRepos = function(language) {
	let encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

	return axios.get(encodeURI)
		.then(res => {
			return res.data.items;
		});
};

// export http functions
module.exports = {
	getRepos: getRepos,
};