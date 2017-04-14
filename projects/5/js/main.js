


$(document).ready(function(){
	
		
				$("#form-za").submit(function(e) {

						var url = './js/sendmail.php';
						$.ajax({
							   type: "POST",
							   url: url,
							   data: $(this).serialize(), 
							   success: function(data)
							   {
									$('.block-form-za h2').hide();
									$('.block-form-za .forma').hide();
									$('.block-form-za .success').show();
							   }
							 });

						e.preventDefault(); 
				});	
				
				$("#form-za2").submit(function(e) {

						var url = './js/sendmail2.php';
						$.ajax({
							   type: "POST",
							   url: url,
							   data: $(this).serialize(), 
							   success: function(data)
							   {
									$('.block-form-za h2').hide();
									$('.block-form-za .forma').hide();
									$('.block-form-za .success').show();
							   }
							 });

						e.preventDefault(); 
				});	
				
				$("#form-popap").submit(function(e) {

						var url = './js/sendmail3.php';
						$.ajax({
							   type: "POST",
							   url: url,
							   data: $(this).serialize(), 
							   success: function(data)
							   {
									$('.block-form-za h2').hide();
									$('.block-form-za .forma').hide();
									$('.block-form-za .success').show();
							   }
							 });

						e.preventDefault(); 
				});	
				
			
				
				
	
	
		
		
		 var nav = $('.top-menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
	
	
	  var owl = $('#raboty');
        owl.owlCarousel({
            margin: 25,
			responsiveClass:true,
            loop:true,

			slideSpeed: 500,
	        autoplay: false,
	        autoplayTimeout: 4500,
            responsive: {
                0: {
                    items: 1
                },
				560: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        })
		
		
		  var owl = $('#testim');
        owl.owlCarousel({
            margin: 0,
			responsiveClass:true,
            loop:true,

			slideSpeed: 500,
	        autoplay: false,
	        autoplayTimeout: 4500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        })
		
		
		
		    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
	
	
		$('.btn-prod').click(function(){ 
					$('.block-form-za h2').show();
					$('.block-form-za .forma').show();
					$('.block-form-za .success').hide();
					$('input[type="text"]').val('');
				});
				
				$('#myElement').click(function(){ 
					$('.block-form-za h2').show();
					$('.block-form-za .forma').show();
					$('.block-form-za .success').hide();
					$('input[type="text"]').val('');
				});
	
  
   if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
  
  
  
  
  	$('.block-raboty a').lightBox();
	
	
	
});





  
  	$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top 
				}, 1000);
				return false;
			  }
			}
		  });
		});





