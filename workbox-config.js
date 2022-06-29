module.exports = {
	globDirectory: 'temp',
	globPatterns: [
		'**/*.{jpg,html,jpeg,md,json,css}'
	],
	swDest: 'temp/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
