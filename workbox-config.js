module.exports = {
	globDirectory: 'froov',
	globPatterns: [
		'**/*.{jpg,html,jpeg,md,json,css}'
	],
	swDest: 'froov/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};