Package.describe({
	name: 'templ:tree',
	version: '0.0.0',
	summary: 'Easy generation of tree structures.',
	git: 'https://github.com/meteor-templ/tree',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	
	api.use('mongo');
	api.use('ecmascript');
	api.use('less');
	api.use('random');
	
	api.use('stevezhu:lodash@4.6.1');
	api.use('aldeed:collection2@2.9.0');
	api.use('matb33:collection-hooks@0.8.1');
	api.use('dburles:collection-helpers@1.0.4');
	api.use('templ:dimentum@0.0.3');
	api.use('shuttler:graphs@0.0.15');
	api.use('peerlibrary:blaze-components@0.18.0');
	
	api.addFiles('Tree.html', 'client');
	api.addFiles('Tree.js', 'client');
});