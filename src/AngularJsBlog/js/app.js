/* chapter6/app.js */

'use strict';
/* App Module */

var blogApp = angular.module('blogApp', [
	'ngRoute',
	'blogControllers',
	'blogServices'
]);

blogApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'partials/main.html',
				controller: 'BlogCtrl'
			}).when('/blogPost/:id', {
				templateUrl: 'partials/blogPost.html',
				controller: 'BlogViewCtrl'
			});
		$locationProvider.html5Mode(false).hashPrefix('!');

}]);