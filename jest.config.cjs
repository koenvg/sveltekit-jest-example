module.exports = {
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true
			}
		],
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.js$': 'ts-jest'
	},
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	moduleNameMapper: {
		'^\\$lib(.*)$': '<rootDir>/src/lib$1',
		'^\\$app(.*)$': ['<rootDir>/.svelte/dev/runtime/app$1', '<rootDir>/.svelte/build/runtime/app$1']
	},
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']
};
