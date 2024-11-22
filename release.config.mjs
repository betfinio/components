/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
	branches: ['master', { name: 'dev', prerelease: true }],
	repositoryUrl: 'https://github.com/betfinio/components.git',
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/npm',
		[
			'@semantic-release/git',
			{
				message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}',
			},
		],
		'@semantic-release/github',
	],
};
