(function ($) {

	"use strict";

	// Sticky nav
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 1) {
			$('.header').addClass("sticky");
		} else {
			$('.header').removeClass("sticky");
		}
	});

	// Sticky sidebar
	$('#sidebar').theiaStickySidebar({
		additionalMarginTop: 150
	});

    // Header button explore
    $('a[href^="#"].btn_explore').on('click', function (e) {
			e.preventDefault();
			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 800, 'swing', function () {
				window.location.hash = target;
			});
		});

	// WoW - animation on scroll
	var wow = new WOW(
	  {
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true,       // act on asynchronously loaded content (default is true)
		callback:     function(box) {
		  // the callback is fired every time an animation is started
		  // the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	);
	wow.init();

	/*  video popups */
	$('.video').magnificPopup({type:'iframe'});	/* video modal*/

	/*  Image popups */
	$('.magnific-gallery').each(function () {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
				beforeOpen: function () {
					// just a hack that adds mfp-anim class to markup
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeOnContentClick: true,
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});
	});

	// tooltips
	 $('[data-toggle="tooltip"]').tooltip();

	// Accordion
	function toggleChevron(e) {
		$(e.target)
			.prev('.card-header')
			.find("i.indicator")
			.toggleClass('ti-minus ti-plus');
	}
		function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".indicator")
            .toggleClass('ti-minus ti-plus');
    }
    // Accordion 2 (updated v1.2)
	$('.accordion_2').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);
		function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".indicator")
            .toggleClass('ti-minus ti-plus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);


	// Input field effect
	(function () {
		if (!String.prototype.trim) {
			(function () {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function () {
					return this.replace(rtrim, '');
				};
			})();
		}
		[].slice.call(document.querySelectorAll('input.input_field, textarea.input_field')).forEach(function (inputEl) {
			// in case the input is already filled..
			if (inputEl.value.trim() !== '') {
				classie.add(inputEl.parentNode, 'input--filled');
			}

			// events:
			inputEl.addEventListener('focus', onInputFocus);
			inputEl.addEventListener('blur', onInputBlur);
		});
		function onInputFocus(ev) {
			classie.add(ev.target.parentNode, 'input--filled');
		}
		function onInputBlur(ev) {
			if (ev.target.value.trim() === '') {
				classie.remove(ev.target.parentNode, 'input--filled');
			}
		}
	})();

	// Selectbox
	$(".selectbox").selectbox();

	// Check and radio input styles
	$('input.icheck').iCheck({
		checkboxClass: 'icheckbox_square-grey',
		radioClass: 'iradio_square-grey'
	});

	// Sticky filters
	$(window).bind('load resize', function () {
		var width = $(window).width();
		if (width <= 991) {
			$('.sticky_horizontal').stick_in_parent({
				offset_top: 50
			});
		} else {
			$('.sticky_horizontal').stick_in_parent({
				offset_top: 73
			});
		}
	});

	$('ul#cat_nav li a').on('click', function () {
		$('ul#cat_nav li a.active').removeClass('active');
		$(this).addClass('active');
	});

})(window.jQuery);
