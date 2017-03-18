;(function () {
	
	'use strict';


	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("<i></i>Phone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};


	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			titleSrc: 'title',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true,

				duration: 300,
				easing: 'ease-in-out',

				
				opener: function(openerElement) {
			
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					
					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeIn animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '50%' } );


	};


	// Document on load.
	$(function(){
		loaderPage();
		magnifPopup();
		
		// Animations
		contentWayPoint();
		
		

	});


}());

$(document).ready(function() {

	$("body").css("display", "none");

    $("body").fadeIn(2000);
    $("body").stop().animate({
    	opacity: 1
    });


	$("a.transition").click(function(event){

		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);		

	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});