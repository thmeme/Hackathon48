angular.module('app')
    .controller('MainController', function($scope) {
      $scope.connexion = true;
      $scope.signIn = function(){
        $scope.connexion = false;
      };
    });

    
