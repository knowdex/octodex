octoDex.controller("blogPostCtrl", function ($scope,$http,appConfig) {

    $scope.sendBlog = function(){
        $http({
            method: 'POST',
            url: appConfig.backendURL + '/static/api/postBlog.php/',
            data: {
                newPhoto: $scope.newPhoto,
                newAuthor: $scope.newAuthor,
                newAuthorPhoto: $scope.newAuthorPhoto,
                newBlogTitle: $scope.newBlogTitle,
                newShortBlogInfo: $scope.newShortBlogInfo,
                newBlogInfo: $scope.newBlogInfo
            }
        }).then(function (response) { //success

            console.log("Success");

        }, function (response) {

            console.log(response.data,response.status);
        });

        //Resets form
        $scope.newPhoto = null;
        $scope.newAuthor = null;
        $scope.newAuthorPhoto = null;
        $scope.newBlogTitle = null;
        $scope.newShortBlogInfo = null;
        $scope.newBlogInfo = null;
    }
});
