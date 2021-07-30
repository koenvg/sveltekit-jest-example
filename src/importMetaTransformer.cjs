require('dotenv').config()

module.exports = {
	process(src, filename, config, options) {
		return src.replace(/import.meta.env.([A-Z_]+)/, (importMeta) =>
			{ return JSON.stringify(eval(importMeta.replace('import.meta', 'process')))} )
	}
}