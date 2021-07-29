module.exports = {
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: './svelte.config.test.cjs'
			}
		],
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.js$': 'ts-jest'
	},
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	moduleNameMapper: {
		'^\\$(.*)$': '<rootDir>/src$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']
};
