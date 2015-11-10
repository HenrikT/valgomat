app.controller('pageController', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams) {

    $scope.pageId = $routeParams.pageId || 1;

    $scope.nextPage = function() {
        $scope.pageId = (++$scope.pageId);
        $location.path("/page/" + $scope.pageId);
    };

    $scope.previousPage = function() {
        history.go(-1);return true;
    };
}]);