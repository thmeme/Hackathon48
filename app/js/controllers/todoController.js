angular.module('app')
  .controller('TodoController', function($scope) {
    /* Here is your main controller */


    $scope.models1 = {
      selected: null,
      lists: {
        A: [{
            Auteur: 'Brigitte',
            photo: '',
            Annonce: "Un peu de peinture",
            categorie: 'Bricolage',
            content: 'J\'ai besoin d\'un coup de main pour repeindre une porte.',
            Contrepartie: 'Une sortie au cinéma',
          },
          {
            Auteur: 'Michel',
            photo: '',
            Annonce: "Un p'tit coup de marteau",
            categorie: 'Bricolage',
            content: 'Je suis trop petit pour accrocher un cadre.',
            Contrepartie: 'Une sortie au théâtre',
          },
          {
            Auteur: 'Annie',
            photo: '',
            Annonce: "Besoin de gros bras",
            categorie: 'Bricolage',
            content: 'Je dois descendre une armoire dans la cave',
            Contrepartie: 'Un dîner',
          },
          {
            Auteur: 'Sabrina',
            photo: '',
            Annonce: "Des p'tits trous !",
            categorie: 'Bricolage',
            content: 'Je voudrais percer le carrelage de ma salle de bain. J\'ai besoin de conseils.',
            Contrepartie: 'Une sortie à la patinoire',
          },
          {
            Auteur: 'Sandrine',
            photo: '',
            Annonce: "Au courant",
            categorie: 'Bricolage',
            content: 'Je dois ajouter une prise dans un mur. Help me !',
            Contrepartie: 'Une sortie au cinéma',
          }
        ],
        B: [{}]
      }
    };
    $scope.models2 = {
      selected: null,
      lists: {
        A: [{
            Auteur: 'Pierre',
            photo: '',
            Annonce: "Pour apprendre",
            categorie: 'Cuisine',
            content: 'Je voudrais apprendre à faire un couscous.',
            Contrepartie: 'Une sortie cinéma',
          },
          {
            Auteur: 'Thomas',
            photo: '',
            Annonce: "Je recrute !",
            categorie: 'Cuisine',
            content: 'Je dois organiser un dîner pour trente personnes. Je cherche des volontaires pour un coup de main.',
            Contrepartie: 'Une sortie au musée du Louvre',
          },
          {
            Auteur: 'Caroline',
            photo: '',
            Annonce: "Pâtes",
            categorie: 'Cuisine',
            content: 'Je cherche des recettes origionales pour cuisiner les pâtes. Je préfère les travaux manuels pour apprendre.',
            Contrepartie: 'Une sortie au zoo de Beauval',
          },
          {
            Auteur: 'Manu',
            photo: '',
            Annonce: "Saussices",
            categorie: 'Cuisine',
            content: 'J\'aimerais apprendre à cuisiner les saussices de montagne. Un volontaire ?',
            Contrepartie: 'Une sortie cinéma',
          },
          {
            Auteur: 'Valentine',
            photo: '',
            Annonce: "friteuse",
            categorie: 'Cuisine',
            content: 'J\'ai besoin d\'une friteuse pour le 15 juin.',
            Contrepartie: 'Une sortie au théâtre',
          }
        ],
        B: [{}]
      }
    };

    $scope.models3 = {
      selected: null,
      lists: {
        A: [{
            Auteur: 'Emma',
            photo: '',
            Annonce: "Aidez mes rosiers !",
            categorie: 'Jardinnage',
            content: 'Il faudrait tailler mes rosiers mais je ne sais pas comment faire.',
            Contrepartie: 'Un dîner',
          },
          {
            Auteur: 'Margot',
            photo: '',
            Annonce: "Pelouse",
            categorie: 'Jardinnage',
            content: 'Je n\'ai pas le temps de tondre ma pelouse. J\'ai besoin d\'aide.',
            Contrepartie: 'Un pique-nique',
          },
          {
            Auteur: 'Patrick',
            photo: '',
            Annonce: "Créativité",
            categorie: 'Jardinnage',
            content: 'Je cherche de bonnes idées pour planter des fleurs dans le jardin.',
            Contrepartie: 'Un bowling',
          },
          {
            Auteur: 'Sarah',
            photo: '',
            Annonce: "La main verte",
            categorie: 'Jardinnage',
            content: 'Je suis à la recherche de bonnes idées pour décorer mon balcon. Soyez créatif !',
            Contrepartie: 'Une sortie dans un musée',
          },
          {
            Auteur: 'Jade',
            photo: '',
            Annonce: "plantes aromatiques",
            categorie: 'Jardinnage',
            content: 'Persil, basilic, etc. comment faire pousser tout ça en apartement.',
            Contrepartie: 'Un dîner',
          }
        ],
        B: [{}]
      }
    };








  });
