
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

postcss([autoprefixer]).process('.a {display: flex}').then(function (result) {
	result.warnings().forEach(function (warn) {
		console.warn(warn.toString());
	});
	console.log(result.css);
});