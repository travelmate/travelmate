angular.module('starter.controllers', [])

.controller('WelCtrl', function($scope, $rootScope) {
  $scope.setCity = function (place) {
    $rootScope.city = place;
    //console.log(place);
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
})

.controller('Messages', function($scope, $timeout, $ionicScrollDelegate){

    var alternate,
        isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

    $scope.sendMessage = function(){
        alternate = !alternate;
        $scope.messages.push({
            userId: alternate ? '12345' : '54321',
            photo: alternate ? 'http://graph.facebook.com/1218369214/picture?width=120' : 'http://graph.facebook.com/556575560/picture?width=120',
            text: $scope.data.message
        });
        delete $scope.data.message;
        $ionicScrollDelegate.scrollBottom(true);
    }

    $scope.inputUp = function(){
        if(isIOS) $scope.data.keyboardHeight = 216;
        $timeout(function(){
            $ionicScrollDelegate.scrollBottom(true);
        }, 300);

    }
    $scope.inputDown = function(){
        if(isIOS) $scope.data.keyboardHeight = 0;
        $ionicScrollDelegate.resize();
    }

    $scope.data = {};
    $scope.myId = '12345';
    $scope.messages = ["asdf"];
 });

