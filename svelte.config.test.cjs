const preprocess = require('svelte-preprocess');
require('dotenv').config()

module.exports = {
	preprocess: preprocess({
		replace: [[/import.meta.env.([A-Z_]+)/, (importMeta) =>
		{ return JSON.stringify(eval(importMeta.replace('import.meta', 'process')))} ]]
	})
};