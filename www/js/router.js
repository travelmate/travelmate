var app = angular.module('starter');

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "index.html"
    })
    .state('app.welcome', {
      url: "/app/welcome",
      views: {
        'travelMate': { 
          templateUrl: "welcome.html"
        }
      }
    })

  $urlRouterProvider.otherwise('/app/welcome');
});

console.log("Router loaded");
