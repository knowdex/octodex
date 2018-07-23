octoDex.controller("homeCtrl", function ($scope, $rootScope, $location, $http, $window, $timeout) {
    console.log("This is the homeCtrl");
    $scope.people;

    $http({
        method: 'GET',
        url: '/api/get.php'
    }).then(function (response) {
        console.log(response);
        $scope.people = response.data;
    }, function (response) {
        console.log(response.data,response.status);
    });
});
