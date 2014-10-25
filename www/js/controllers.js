angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('HostIndexCtrl', function($scope, HostService) {
  // "Hosts" is a service returning mock data (services.js)
  $scope.hosts = HostService.all();
})


// A simple controller that shows a tapped item's data
.controller('HostDetailCtrl', function($scope, $stateParams, HostService) {
  // "Hosts" is a service returning mock data (services.js)
  $scope.host = HostService.get($stateParams.hostId);
});
