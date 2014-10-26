'use strict';

angular.module('starter')

.directive('googleplace', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, model) {
            var options = {
                types: ['(cities)'],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
            google.maps.event.addListener(scope.gPlace, 'place_changed', function () {
                scope.$apply(function () {
                    model.$setViewValue(element.val());
                });
            });
        }
    };
})

.directive('stars', function () {
    return {
        restrict: 'E',
        scope: {
            rating: '@rating'
        },
        template: '<div class="stars"></div>',
        link: function (scope, element, attrs, model) {
            var rating = parseFloat(scope.rating, 10);

            for (var i = 0; i < Math.floor(rating); i++) {
                var star = document.createElement('i');
                star.className = 'ion-ios7-star';
                element[0].appendChild(star);
            }

            if (rating - Math.floor(rating) > 0) {
                var star = document.createElement('i');
                star.className = 'ion-ios7-star-half';
                element[0].appendChild(star);
            }
        }
    };
});