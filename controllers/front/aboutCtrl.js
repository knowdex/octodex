octoDex.controller("aboutCtrl", function () {
    var c = this;

    c.$onInit = function () {
        // All js loading by this page
        $('#carousel').owlCarousel({
            center: true,
            items: 2,
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                    dots:false
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });
    }
});