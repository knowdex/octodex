octoDex.controller("courseDetailCtrl",['$scope', '$http', 'appConfig', '$location', '$anchorScroll', '$routeParams', function ($scope, $http, appConfig, $location, $anchorScroll, $routeParams) {
    var c = this;

    c.$onInit = function () {
        $scope.courseId = $routeParams.id;
        $scope.coursesInfo;

            console.log($scope.courseId );
        $http({
            method: 'POST',
            url: appConfig.backendURL + '/static/api/getCoursesDetail.php/',
            data: {
                id: $scope.courseId
            }

        }).then(function (response) {
            $scope.coursesInfo = response.data[0];
            console.log(response.data[0]);

        }, function (response) {
            console.log(response.data,response.status);
        });

        //NOTHING BELOW THIS LINE!
        $('#accordion_lessons').on('hidden.bs.collapse shown.bs.collapse', c.toggleChevron);
        // Secondary nav scroll
        var $sticky_nav= $('.secondary_nav');
        $sticky_nav.find('a').on('click', function(e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            $('html, body').animate({
                'scrollTop': $target.offset().top - 150
            }, 800, 'swing');
        });
        $sticky_nav.find('ul li a').on('click', function () {
            $sticky_nav.find('ul li a.active').removeClass('active');
            $(this).addClass('active');
        });
    };

    c.toggleChevron = function(e) {
        $(e.target)
            .prev('.card-header')
            .find("i.indicator")
            .toggleClass('ti-minus ti-plus');
    };
}]);
