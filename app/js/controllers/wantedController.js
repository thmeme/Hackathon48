angular.module('app')
  .controller('WantedController', function($scope) {
    /* Here is your main controller */


    $scope.models4 = {
      selected: null,
      lists: {
        A: [{
            Auteur: 'Jordan',
            photo: 'jordan.jpg',
            Competence: "Electricité, peinture",
            Categorie: 'Bricolage',
            Commentaire: 'J\'ai vraiment apprécié le moment passé. Une belle rencontre et du beau travail (Martine - Paris).',
          },
          {
            Auteur: 'Nailletine',
            photo: 'nailletine.jpg',
            Competence: "Décoration, peinture",
            Categorie: 'Bricolage',
            Commentaire: 'Le travail est très soigné (David - La Loupe).',
          },
          {
            Auteur: 'Brigitte',
            photo: 'brigitte.jpg',
            Competence: "Plomberie, chauffage",
            Categorie: 'Bricolage',
            Commentaire: 'Les bon tuyaux dans les bons trous. Merci Brigitte (Robert - La Ferté-Vidame).',
          },
          {
            Auteur: 'Philippe',
            photo: 'philippe.jpg',
            Competence: "Travaux forestiers",
            Categorie: 'Bricolage',
            Commentaire: 'Une vraie force de la nature (Pierre - Nogent-le-Rotrou)',
          }
        ],
        B: [{
          Auteur: 'Maxime',
          photo: 'maxime.jpg',
          Competence: "Il pleut",
          Categorie: 'Bricolage',
          Commentaire: 'Je voudrais changer une gouttière.',
        }]
      }
    };

    $scope.jardin = true;

    $scope.openJardin = function () {
      $scope.jardin = false;
      $scope.bricol = false;
      $scope.cuisine = false;
    };


    $scope.openBricol = function () {
      $scope.jardin = true;
      $scope.bricol = true;
      $scope.cuisine = false;
    };
    $scope.openCuisine = function () {
      $scope.jardin = true;
      $scope.bricol = false;
      $scope.cuisine = true;
    };


  });
