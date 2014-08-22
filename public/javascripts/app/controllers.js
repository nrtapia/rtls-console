function AllChe($scope, $http) {
  $http.get('/che/all').
    success(function(data, status, headers, config) {
      $scope.items = data.items;
    });
}