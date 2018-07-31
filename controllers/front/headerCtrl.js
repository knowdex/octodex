octoDex.controller("headerCtrl", function () {
    var c = this;

    c.$onInit = function () {
        // Mobile Mmenu
        var $menu = $("nav#menu").mmenu({
                "extensions": ["pagedim-black"],
                counters: false,
                keyboardNavigation: {
                    enable: true,
                    enhance: true
                },
                navbar: {
                    title: 'MENU'
                },
                navbars: [{position: 'bottom', content: ['<a href="#0">© 2017 Udema</a>']}]
            },
            {
                // configuration
                clone: true,
                classNames: {
                    fixedElements: {
                        fixed: "menu_2",
                        sticky: "sticky"
                    }
                }
            });
        var $icon = $("#hamburger");
        var API = $menu.data("mmenu");
        $icon.on("click", function () {
            API.open();
        });
        API.bind("open:finish", function () {
            setTimeout(function () {
                $icon.addClass("is-active");
            }, 100);
        });
        API.bind("close:finish", function () {
            setTimeout(function () {
                $icon.removeClass("is-active");
            }, 100);
        });
        $('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350);

    }
});