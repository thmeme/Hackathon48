angular.module('app')
  .controller('TodoController', function($scope) {
    /* Here is your main controller */

    $scope.models1 = {
      selected: null,
      lists: {
        A: [{
            Auteur: 'Brigitte',
            photo: 'brigitte.jpg',
            Annonce: "Aidez mes rosiers !",
            categorie: 'Jardinnage',
            content: 'Il faudrait tailler mes rosiers mais je ne sais pas comment faire.',
            Contrepartie: 'Un dîner',
          },
          {
            Auteur: 'Margot',
            photo: 'margot.jpg',
            Annonce: "Pelouse",
            categorie: 'Jardinnage',
            content: 'Je n\'ai pas le temps de tondre ma pelouse. J\'ai besoin d\'aide.',
            Contrepartie: 'Un pique-nique',
          },
          {
            Auteur: 'Sully',
            photo: 'sully.jpg',
            Annonce: "Créativité",
            categorie: 'Jardinnage',
            content: 'Je cherche de bonnes idées pour planter des fleurs dans le jardin.',
            Contrepartie: 'Un bowling',
          },
          {
            Auteur: 'Sarah',
            photo: 'sarah.jpg',
            Annonce: "La main verte",
            categorie: 'Jardinnage',
            content: 'Je suis à la recherche de bonnes idées pour décorer mon balcon. Soyez créatif !',
            Contrepartie: 'Une sortie dans un musée',
          },
          {
            Auteur: 'Jade',
            photo: 'jade.jpg',
            Annonce: "plantes aromatiques",
            categorie: 'Jardinnage',
            content: 'Persil, basilic, etc. comment faire pousser tout ça en apartement.',
            Contrepartie: 'Un dîner',
          }
        ],
        B: [{}]
      }
    };
    $scope.models2 = {
      selected: null,
      lists: {
        A: [{
            Auteur: 'Emma',
            photo: 'emma.jpg',
            Annonce: "Un peu de peinture",
            categorie: 'Bricolage',
            content: 'J\'ai besoin d\'un coup de main pour repeindre une porte.',
            Contrepartie: 'Une sortie au cinéma',
          },
          {
            Auteur: 'Michel',
            photo: 'michel.jpg',
            Annonce: "Un p'tit coup de marteau",
            categorie: 'Bricolage',
            content: 'Je suis trop petit pour accrocher un cadre.',
            Contrepartie: 'Une sortie au théâtre',
          },
          {
            Auteur: 'Annie',
            photo: 'annie.jpg',
            Annonce: "Besoin de gros bras",
            categorie: 'Bricolage',
            content: 'Je dois descendre une armoire dans la cave',
            Contrepartie: 'Un dîner',
          },
          {
            Auteur: 'Sabrina',
            photo: 'sabrina.jpg',
            Annonce: "Des p'tits trous !",
            categorie: 'Bricolage',
            content: 'Je voudrais percer le carrelage de ma salle de bain. J\'ai besoin de conseils.',
            Contrepartie: 'Une sortie à la patinoire',
          },
          {
            Auteur: 'cendrine',
            photo: 'cendrine.jpg',
            Annonce: "Au courant",
            categorie: 'Bricolage',
            content: 'Je dois ajouter une prise dans un mur. Help me !',
            Contrepartie: 'Une sortie au cinéma',
          }
        ],
        B: [{}]
      }
    };

    $scope.models3 = {
      selected: null,
      lists: {
        A: [{
            Auteur: 'victor',
            photo: 'victor.jpg',
            Annonce: "Pour apprendre",
            categorie: 'Cuisine',
            content: 'Je voudrais apprendre à faire un couscous.',
            Contrepartie: 'Une sortie cinéma',
          },
          {
            Auteur: 'Thomas',
            photo: 'thomas.jpg',
            Annonce: "Je recrute !",
            categorie: 'Cuisine',
            content: 'Je dois organiser un dîner pour trente personnes. Je cherche des volontaires pour un coup de main.',
            Contrepartie: 'Une sortie au musée du Louvre',
          },
          {
            Auteur: 'Caroline',
            photo: 'caroline.jpg',
            Annonce: "Pâtes",
            categorie: 'Cuisine',
            content: 'Je cherche des recettes origionales pour cuisiner les pâtes. Je préfère les travaux manuels pour apprendre.',
            Contrepartie: 'Une sortie au zoo de Beauval',
          },
          {
            Auteur: 'Manu',
            photo: 'manu.jpg',
            Annonce: "Saussices",
            categorie: 'Cuisine',
            content: 'J\'aimerais apprendre à cuisiner les saussices de montagne. Un volontaire ?',
            Contrepartie: 'Une sortie cinéma',
          },
          {
            Auteur: 'Valentine',
            photo: 'valentine.jpg',
            Annonce: "friteuse",
            categorie: 'Cuisine',
            content: 'J\'ai besoin d\'une friteuse pour le 15 juin.',
            Contrepartie: 'Une sortie au théâtre',
          }
        ],
        B: [{}]
      }
    };

    $scope.models4 = {
      selected: null,
      lists: {
        A: [{
            Auteur: 'Jordan',
            photo: 'jordan.jpg',
            Competences: "Electricité, peinture",
            Categorie: 'Bricolage',
            Commentaire: 'J\'ai vraiment apprécié le moment passé. Une belle rencontre et du beau travail (Martine - Paris).',
          },
          {
            Auteur: 'Nailletine',
            photo: 'nailletine.jpg',
            Competence: "Décoration, sculpture, peinture",
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
        B: [{}]
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
