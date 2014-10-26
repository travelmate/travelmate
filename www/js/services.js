'use strict';

angular.module('starter.services', [])

.factory('HostService', function () {

    var hosts = [
      {
        id: 0,
        name: 'Jake Davis',
        description: 'Lives at the museum',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
        image: './img/Jake.jpg',
        expertise: ['music',
            'art',
            'urban jungles'
        ],
        rating: 3
      }, 
      {
        id: 1,
        name: 'Howard Markis',
        description: 'Music festival goer.',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
        image: './img/Howard.jpg',
        expertise: ['coffee shops',
            'modernist bars',
            'museums'
        ],
        rating: 5
      },
      {
        id: 2,
        name: 'Kay McKinney',
        description: 'Bar hopping enthusiast.',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
        image: './img/Kay.jpg',
        expertise: ['pub crawls',
            'modernist bars',
            'urban jungles'
        ],
        rating: 2
      },
      {
        id: 3,
        name: 'Christina Lora',
        description: 'Keep Austin weird',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
        image: './img/Christina.jpg',
        expertise: ['outdoors',
            'biking',
            'meditation'
        ],
        rating: 4
      }
    ];

  return {
      all: function () {
          return hosts;
      },
      get: function (hostId) {

          return hosts[hostId];
      }
  };
});
