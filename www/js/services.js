angular.module('starter.services', [])

.factory('PetService', function() {

  var pets = [
    { id: 0, title: 'Jake D.', description: 'Lives at the museum', rating: 3 },
    { id: 1, title: 'Howard M.', description: 'Music festival goer.', rating: 5 },
    { id: 2, title: 'Kay M.', description: 'Bar hopping enthusiast.', rating: 2 },
    { id: 3, title: 'Christina L.', description: 'Keep Austin weird', rating: 4 }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {

      return pets[petId];
    }
  }
});
