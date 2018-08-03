octoDex.controller("loginCtrl", function ($scope,$http,appConfig) {
    $scope.userLogin = function(){

        var user_data= 'user_email=' + $scope.oldEmail + '&user_password=' + $scope.oldPassword;
        console.log(user_data);

        $http({
            method: 'POST',
            url: appConfig.backendURL + '/static/api/login.php/',
            data: user_data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data) { //success
            console.log(data);
            if ( data.trim() === 'correct') {
                window.location.href = '#/index';
            } else {
                console.log("Username or password is incorrect");
            }
        });

        //Resets form
        // $scope.newPhoto = null;
        // $scope.newProduct = null;
        // $scope.newDescription = null;
        // $scope.newPrice = null;

    }
});
