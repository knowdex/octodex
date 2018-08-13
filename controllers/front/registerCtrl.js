octoDex.controller("registerCtrl", function ($scope,$http, appConfig) {

    $scope.registerUser = function(){
        $scope.success = false;
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
            $scope.success = true;


        }, function (response) {

            console.log(response.data,response.status);
        });

        //Resets form
        $scope.userName = null;
        $scope.userLastName = null;
        $scope.userEmail = null;
        $scope.userFaculty = null;
        $scope.userType = null;
        $scope.userPhone = null;
        $scope.userPassword = null;
        $scope.confirmPassword = null;
    };

});
