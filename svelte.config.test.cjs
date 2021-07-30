const preprocess = require('svelte-preprocess');
require('dotenv').config()

module.exports = {
	preprocess: preprocess({
		replace: [['import.meta.env.VITE_MESSAGE', JSON.stringify(process.env.VITE_MESSAGE)]]
	})
};
