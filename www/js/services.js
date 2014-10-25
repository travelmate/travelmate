'use strict';

angular.module('starter.services', [])

.factory('HostService', function () {

    var hosts = [{
        id: 0,
        name: 'Jake D.',
        bio: 'Lives at the museum',
        expertise: ['coffee shops',
            'modernist bars',
            'urban jungles'
        ],
        rating: 3
    }, {
        id: 1,
        name: 'Howard M.',
        bio: 'Music festival goer.',
        expertise: ['coffee shops',
            'modernist bars',
            'urban jungles'
        ],
        rating: 5
    }, {
        id: 2,
        name: 'Kay M.',
        bio: 'Bar hopping enthusiast.',
        expertise: ['coffee shops',
            'modernist bars',
            'urban jungles'
        ],
        rating: 2
    }, {
        id: 3,
        name: 'Christina L.',
        bio: 'Keep Austin weird',
        expertise: ['coffee shops',
            'modernist bars',
            'urban jungles'
        ],
        rating: 4
    }];

    return {
        all: function () {
            return hosts;
        },
        get: function (hostId) {

            return hosts[hostId];
        }
    };
});