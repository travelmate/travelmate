angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {    
        if(window.cordova){
            cordova.plugins && cordova.plugins.Keyboard && cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }        
    });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('welcome', {
      url: '/welcome',
      templateUrl: 'templates/welcome.html',
      controller: 'WelCtrl'
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.message', {
      url: '/message',
      views: {
        'hosts-tab': {
          templateUrl: 'templates/message.html',
          controller: 'Messages'
        }
      }
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

