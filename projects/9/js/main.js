


$(document).ready(function(){
	
		
				$("#forma-regist").submit(function(e) {

						var url = './js/sendmail.php';
						$.ajax({
							   type: "POST",
							   url: url,
							   data: $(this).serialize(), 
							   success: function(data)
							   {
									window.location.href = "./spasibo.html";
									$('input[type="text"]').val('');
							   }
							 });

						e.preventDefault(); 
				});	
				
				$("#forma-popap").submit(function(e) {

						var url = './js/sendmail.php';
						$.ajax({
							   type: "POST",
							   url: url,
							   data: $(this).serialize(), 
							   success: function(data)
							   {
									window.location.href = "./spasibo.html";
									$('input[type="text"]').val('');
							   }
							 });

						e.preventDefault(); 
				});	
				
				$("#forma-popap2").submit(function(e) {

						var url = './js/sendmail2.php';
						$.ajax({
							   type: "POST",
							   url: url,
							   data: $(this).serialize(), 
							   success: function(data)
							   {
									window.location.href = "./spasibo.html";
									$('input[type="text"]').val('');
							   }
							 });

						e.preventDefault(); 
				});	
	

				
				
				$('.remodal-close').click(function(){ 
					$('.remodal .block-form').show();
					$('.remodal .success').hide();
					$('input[type="text"]').val('');
				});
				
		
		
				$(".mask1").inputmask('+99(999)999-99-99');
				
			
				
		

				var owl = $('#history-images');
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
							items: 2
						},
						1024: {
							items: 4
						}
					}
				})
				
				var owl = $('#speakers-slide');
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
							items: 2
						},
						1024: {
							items: 4
						}
					}
				})
				
						var owl = $('#program-slide');
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
						
						
				
				
				
				
	
		
				$('.foto-history .item a').lightBox();
			
				
				$('.testimonial-single').click(function(e){
					var data = $(this).data('video');
					$('.video-inner').html('<iframe width="100%" height="500" src="'+ data +'" frameborder="0" allowfullscreen </iframe>');
					$('#open-video').click();
					$(".video-inner iframe")[0].src += "&autoplay=1";
					

				});
				$('.remodal-close').click(function(e){
					$('.video-inner iframe').remove();
				});
			
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

		
		




