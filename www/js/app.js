angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('welcome', {
      url: '/welcome',
      templateUrl: 'templates/welcome.html'
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // the host tab has its own child nav-view and history
    .state('tab.host-index', {
      url: '/hosts',
      views: {
        'hosts-tab': {
          templateUrl: 'templates/host-index.html',
          controller: 'HostIndexCtrl'
        }
      }
    })

    .state('tab.host-detail', {
      url: '/host/:hostId',
      views: {
        'hosts-tab': {
          templateUrl: 'templates/host-detail.html',
          controller: 'HostDetailCtrl'
        }
      }
    })

    .state('tab.find', {
      url: '/find',
      views: {
        'find-tab': {
          templateUrl: 'templates/find.html'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');

});

