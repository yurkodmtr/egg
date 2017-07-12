"use strict";

var eggScript = function(){

	/* remove placeholder */
	var removePlaceholder = function () { 
	    $('input,textarea').focus(function () {
	        $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
	    }).blur(function () {
	        $(this).attr('placeholder', $(this).data('placeholder'));
	    });
	}

	/* back to top */
	var backToTopClick = function () {
	    $('.back_to_top').click(function () {
	        $('html,body').animate({
	            scrollTop: 0
	        }, 500);
	        return false;
	    });
	}
	var backToTopScroll = function () {
	    if ($('.back_to_top').length > 0) {
	        var scrollTop = $(window).scrollTop();
	        if (scrollTop > 200) {
	            $('.back_to_top').show();
	        } else {
	            $('.back_to_top').fadeOut();
	        }
	    }
	}

	/* smoothScroll to anchor */
	var smoothScroll = function () {
	    $('a[href*="#"]:not([href="#"])').click(function () {
	        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	            if (target.length) {
	                $('html, body').animate({
	                    scrollTop: target.offset().top
	                }, 1000);
	                return false;
	            }
	        }
	    });
	}



	$(document).ready(function(){
		removePlaceholder();
		backToTopClick();
		smoothScroll();

		$('.select select').selectric();
	});

	$(window).load(function(){  
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:false,
		    responsive:{
		        0:{
		            items:2
		        },
		        768:{
		            items:4
		        },
		        1350:{
		            items:6
		        }
		    }
		});
	});

	$(window).scroll(function(){
		backToTopScroll();
	});
}

eggScript();

