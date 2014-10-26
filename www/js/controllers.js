angular.module('starter.controllers', [])

.controller('WelCtrl', function($scope, $rootScope) {
  $scope.setCity = function (place) {
    $rootScope.city = place;
    console.log(place);
  };
})

// A simple controller that fetches a list of data from a service
.controller('HostIndexCtrl', function($scope, $rootScope, HostService) {
  $scope.city = $rootScope.city;
  $scope.hosts = HostService.all();
})

// A simple controller that shows a tapped item's data
.controller('HostDetailCtrl', function($scope, $stateParams, HostService) {
  $scope.host = HostService.get($stateParams.hostId);
});
