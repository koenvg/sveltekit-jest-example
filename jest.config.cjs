const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: './svelte.config.test.cjs'
			}
		],
		'^.+\\.(ts|js)$': [require.resolve('jest-chain-transform'),
			{ transformers: ['../../../src/importMetaTransformer.cjs', 'ts-jest'] }
		]
	},
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'})
};
