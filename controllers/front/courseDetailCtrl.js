octoDex.controller("courseDetailCtrl",['$location','$anchorScroll',function ($location,$anchorScroll) {
    var c = this;

    c.$onInit = function () {
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