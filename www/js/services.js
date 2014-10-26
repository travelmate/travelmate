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
        bio: "As a native of Austin, I've been exploring the outdoors here for all my life. I always wanted to learn how to surf growing up, but I didn't think I'd be able to because of living in Texas. A few years back, I discovered urban surfing at the Rio Vista River Dam in San Marcos. I was stoked to finally be able to surf, and I started showing all my friends. Now I want to show this wonderful place to strangers!",
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
        description: 'Car Enthusiast',
        //cover: './img/cover/Surfing.jpeg',
        bio: "My dad taught me everything I know about cars. When I was little, I learned how to do simple repair jobs, and I went to car shows every weekend. Since then, I've always loved teaching people how to do anything with cars whether it be a repair job, how to drive, or even how to pick out the nice cars at shows. I can't wait to show you how to do the same!",
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
        bio: "I've been an artist my entire life! I started drawing when I was very little, and I've continued to love art since then. Any type of art inspires me, but what I love the most is grafitti. It lets you express yourself in a way that everyone who drives by will see! I would love to share my passion with you!",
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
