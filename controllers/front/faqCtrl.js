octoDex.controller("faqCtrl",['$location','$anchorScroll', function ($location,$anchorScroll) {
    var c = this;

    c.$onInit = function () {
        // Faq section (updated v1.2)
        $('#faq_box a[href^="#"]').on('click', function () {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top -185
                    }, 800);
                    return false;
                }
            }
        });
        function toggleChevron(e) {
            $(e.target)
                .prev('.card-header')
                .find("i.indicator")
                .toggleClass('ti-minus ti-plus');
        }
        // Accordion 2 (updated v1.2)
        $('.accordion_2').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);
    }
}]);
