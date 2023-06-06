jQuery(function ($) {
    "use strict";

	var $window = $(window);
    var windowsize = $(window).width();
    var $root = $("html, body");
    var $body = $("body");

    /* Scroll Function
    ============================================== */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
		   $('#header .navbar').addClass('header-fix');
		} else {
		   $('#header .navbar').removeClass('header-fix');
		}
	});

	$(".navbar-nav li").hover(function() {
		var isHovered = $(this).is(":hover");
		if (isHovered) {
		  $(this).children("ul").stop().slideDown(300);
		} else {
		  $(this).children("ul").stop().slideUp(300);
		}
	});

	/* Full Screen
    ============================================== */
    function resizebanner() {
        $(".fullscreen").css("height", $(window).height());
        $(".fullscreen").css("width", $(window).width());
    }
    $(window).resize(function () {
        resizebanner();
    });
    resizebanner();

	/* Owl Slider
	============================================== */
    $(".service-slider").owlCarousel({
		autoplay:true,
		loop:true,
		margin:20,
		nav: true,
		dots: false,
		navText: ['<i className="fa-solid fa-chevron-left"></i>','<i className="fa-solid fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:2
			},
			768:{
				items:4
			},
			992:{
				items:5
			},
			1200:{
				items:7
			}
		}
	})
    
	$(".features-slider").owlCarousel({
		autoplay:true,
		loop:true,
		margin:30,
		nav: true,
		dots: false,
		navText: ['<i className="fa-solid fa-chevron-left"></i>','<i className="fa-solid fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})

	$(".services-section-slider").owlCarousel({
		autoplay:false,
		loop:true,
		margin:30,
		nav: true,
		dots: false,
		navText: ['<i className="fa-solid fa-chevron-left"></i>','<i className="fa-solid fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
	$(".thumbs-slider").owlCarousel({
		autoplay:false,
		loop:true,
		margin:10,
		stagePadding: 20,
		nav: true,
		dots: false,
		navText: ['<i className="fa-solid fa-chevron-left"></i>','<i className="fa-solid fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1,
				stagePadding: 0,
			},
			480:{
				items:2
			},
			768:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});


	// Testimonial
	if($('.owl-testimonial').length) {
		$('.owl-testimonial').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			responsive:{
				0:{
					items:1,
					margin:20,
				},
				600:{
					items:2
				},
				1000:{
					items:2
				}
			}
		})
		var owl = $(".owl-carousel");
		owl.owlCarousel();
		$(".next-btn").click(function () {
			owl.trigger("next.owl.carousel");
		});
		$(".prev-btn").click(function () {
			owl.trigger("prev.owl.carousel");
		});
		$(".prev-btn").addClass("disabled");
		$(owl).on("translated.owl.carousel", function (event) {
			if ($(".owl-prev").hasClass("disabled")) {
				$(".prev-btn").addClass("disabled");
			} else {
				$(".prev-btn").removeClass("disabled");
			}
			if ($(".owl-next").hasClass("disabled")) {
				$(".next-btn").addClass("disabled");
			} else {
				$(".next-btn").removeClass("disabled");
			}
		});
	};
	

	
});


