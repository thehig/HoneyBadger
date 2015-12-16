/// <reference path="../../typings/meteor/ironrouter.d.ts" />

// Use the template named "layout" as the basic template.
// Subsequent templates will be inserted into the {{> yield}}
Router.configure({
	layoutTemplate: 'layout'
});

// Default route
Router.route('/', {
    template: 'home'
});

Router.route('home');
Router.route('about');
Router.route('game');