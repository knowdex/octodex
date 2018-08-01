octoDex.controller("coursesListCtrl", function ($scope, $http, appConfig) {
    $scope.coursesList;

    $http({
        method: 'GET',
        url: appConfig.backendURL + '/static/api/getCourses.php/',

    }).then(function (response) {
        $scope.coursesList = response.data;
        console.log($scope.coursesList);

    }, function (response) {
        console.log(response.data,response.status);
    });
});
