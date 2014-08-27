app.controller('listCheController', ['$scope', '$http', function($scope, $http) {
	$http.get("/che/all")
       .success(function(response) {
          $scope.subtitle = "CHE LIST";
	  $scope.items = response;
        })
        .error(function(data, status, headers, config) { 	
	   console.info("ERROR", data, status); 
	});
}]);