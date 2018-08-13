octoDex.controller("productoCtrl", function ($scope,$http,appConfig) {

    $scope.sendProduct = function(){
        $http({
            method: 'POST',
            url: appConfig.backendURL + '/static/api/postProduct.php/',
            data: {
                newPhoto: $scope.newPhoto,
                newProduct: $scope.newProduct,
                newDescription: $scope.newDescription,
                newPrice: $scope.newPrice
            }
        }).then(function (response) { //success

            console.log("Success");

        }, function (response) {

            console.log(response.data,response.status);
        });

        //Resets form
        $scope.newPhoto = null;
        $scope.newProduct = null;
        $scope.newDescription = null;
        $scope.newPrice = null;

    }
});
