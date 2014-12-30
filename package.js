'use strict';

var where = 'client';  // where to install: 'client' or 'server'. For both, pass nothing.

Package.describe({
	name: 'kaoskeya:bootstrap-material-design-less',
	summary: 'FezVrasta\'s Bootstrap theme implementing Google\'s Material (Paper) Design using LESS',
	version: '0.0.1',
	git: 'https://github.com/fezvrasta/bootstrap-material-design.git'
});

Package.onUse(function(api) {
	api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
	api.use('nemo64:bootstrap@3.3.1_1');
	api.use('jquery');
	api.use('less');

	api.addFiles([
		// we bundle all font files, but the client will request only one of them via the CSS @font-face rule
		'dist/fonts/Material-Design-Icons.eot',  // IE8 or older
		'dist/fonts/Material-Design-Icons.svg',  // SVG fallback for iOS < 5 - http://caniuse.com/#feat=svg-fonts, http://stackoverflow.com/a/11002874/126903
		'dist/fonts/Material-Design-Icons.ttf',  // Android Browers 4.1, 4.3 - http://caniuse.com/#feat=ttf
		'dist/fonts/Material-Design-Icons.woff', // Supported by all modern browsers
		'less/*.less',           // includes @font-face rules to load the Roboto font
		'dist/js/material.js',
		'dist/js/ripples.js',
		'kaoskeya:bootstrap-material-design-less.js'
	], where);
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('kaoskeya:bootstrap-material-design-less');
	api.addFiles('kaoskeya:bootstrap-material-design-less-tests.js');
});
