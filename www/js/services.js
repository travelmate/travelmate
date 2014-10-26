'use strict';

angular.module('starter.services', [])

.factory('HostService', function () {

    var hosts = [
      {
        id: 0,
        price: 20,
        time: 5,
        name: 'Jake Davis',
        description: 'Urban Surfer',
        //cover: './img/cover/Bars.jpg',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
        image: './img/Jake.jpg',
        cover: './img/surfer.jpg',
        expertise: ['music',
            'art',
            'urban jungles'
        ],
        rating: 3,
        numReviews: 7
      }, 
      {
        id: 1,
        price: 50,
        time: 1,
        name: 'Howard Markis',
        description: 'Brews Beer',
        //cover: './img/cover/Surfing.jpeg',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
        image: './img/Howard.jpg',
        cover: './img/car.jpg',
        expertise: ['coffee shops',
            'modernist bars',
            'museums'
        ],
        rating: 5,
        numReviews: 8
      },
      {
        id: 2,
        price: 100,
        time: 2,
        name: 'Kay McKinney',
        description: 'nighttime graffiti',
        //cover: './img/cover/Graffiti.jpg',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
        image: './img/Kay.jpg',
        cover: './img/art.jpg',
        expertise: ['pub crawls',
            'modernist bars',
            'urban jungles'
        ],
        rating: 2,
        numReviews: 13
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
