'use strict';

angular.module('aimWebsiteApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
    $scope.scrollTo =function(id)
    {
    	$location.hash(id);
    	$anchorScroll();
  
    }

  });
