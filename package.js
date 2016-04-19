Package.describe({
	name: 'templ:tree',
	version: '0.0.3',
	summary: 'Realy fully customizable, and reactive trees of directories, comments and any other...',
	git: 'https://github.com/meteor-templ/tree',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	
	api.use('mongo');
	api.use('ecmascript');
	api.use('random');
	
	api.use('stevezhu:lodash@4.6.1');
	api.use('aldeed:collection2@2.9.0');
	api.use('dburles:collection-helpers@1.0.4');
	api.use('templ:dimentum@0.0.3');
	api.use('shuttler:graphs@0.0.16');
	api.use('peerlibrary:blaze-components@0.18.0');
	api.use('peerlibrary:reactive-field@0.1.0');
	api.use('templ:tools@0.0.0');
	
	api.addFiles('Tree.html', 'client');
	api.addFiles('Tree.js', 'client');
	api.addFiles('States.js', 'client');
	
	api.export('Templ', 'client');
});