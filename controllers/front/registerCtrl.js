octoDex.controller("registerCtrl", function ($scope,$http, appConfig) {

    $scope.registerUser = function(){
        console.log($scope.userName);
        console.log($scope.userType);
        $http({
            method: 'POST',
            url: appConfig.backendURL + '/static/api/postRegister.php/',
            data: {
                newName: $scope.userName,
                newLastName: $scope.userLastName,
                newEmail: $scope.userEmail,
                newFaculty: $scope.userFaculty,
                newType: $scope.userType,
                newPhone: $scope.userPhone,
                newPassword: $scope.userPassword
            }
        }).then(function (response) { //success

            console.log("Success");

        }, function (response) {

            console.log(response.data,response.status);
        });

    };
});
