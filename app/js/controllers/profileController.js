angular.module('app')
    .controller('ProfileController', function($scope, CurrentUser) {
      $scope.user = CurrentUser.user();

      $scope.models5 = {
        selected: null,
        lists: {
          A: [{
              Auteur: 'Maxime',
              photo: 'maxime.jpg',
              Competence: "Apprendre à scier",
              categorie: 'Bricolage',
              Commentaire: 'Je ne sais pas scier droit. Quelqu\'un peut m\'aider ?',
              Contrepartie: 'Un dîner',
            }
          ],
          B: [{
            Auteur: 'Philippe',
            photo: 'philippe.jpg',
            Competence: "Travaux forestiers",
            Categorie: 'Bricolage',
            Commentaire: 'Une vraie force de la nature (Pierre - Nogent-le-Rotrou)',
          },
          {
            Auteur: 'Clément',
            photo: 'clement.jpg',
            Competence: "Menuiserie",
            Categorie: 'Bricolage',
            Commentaire: 'Des mains d\'une extrême précision (Marie - Margon)',
          }
        ]
        }
      };

      $scope.models6 = {
        selected: null,
        lists: {
          A: [{
            Auteur: 'Maxime',
            photo: 'maxime.jpg',
            Competence: "Cuisine",
            categorie: 'Bricolage',
            Commentaire: 'Maxime est le roi de la patate !',
          }
          

          ],
          B: [{
            Auteur: 'Margot',
            photo: 'margot.jpg',
            Competence: "Rata",
            categorie: 'Cuisine',
            Commentaire: 'J\'aimerais apprendre à faire le rata beauceron.',
            Contrepartie: 'Une soretie à la chasse',
          }
          ],
        }
      };





    });
