var app = angular.module('valgomat', [
	'ngRoute',
	'ngAnimate'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/page/:pageId', {
            controller: 'pageController',
            templateUrl: function(params) {
				if(params.pageId < 6) {
					return 'html/page' + params.pageId + '.html';
				} else if(params.pageId >= 6 && params.pageId < 26) {
					return 'html/questions.html';
				} else {
					return 'html/results.html';
				}
            }
        })
        .otherwise({
        	redirectTo: '/page/1'
        });
});