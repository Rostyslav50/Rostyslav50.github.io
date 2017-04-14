


$(document).ready(function(){
	
		
				$("#form-zvonok").submit(function(e) {

						var url = './js/sendmail.php';
						$.ajax({
							   type: "POST",
							   url: url,
							   data: $(this).serialize(), 
							   success: function(data)
							   {
									$('.form-bg .block-form').hide();
									$('.form-bg .success').show();
							   }
							 });

						e.preventDefault(); 
				});	
				
				$("#form-sumka").submit(function(e) {

						var url = './js/sendmail2.php';
						$.ajax({
							   type: "POST",
							   url: url,
							   data: $(this).serialize(), 
							   success: function(data)
							   {
									$('.form-bg .block-form').hide();
									$('.form-bg .success').show();
							   }
							 });

						e.preventDefault(); 
				});	
				
				$("#form-komplekt").submit(function(e) {

						var url = './js/sendmail3.php';
						$.ajax({
							   type: "POST",
							   url: url,
							   data: $(this).serialize(), 
							   success: function(data)
							   {
									$('.form-bg .block-form').hide();
									$('.form-bg .success').show();
							   }
							 });

						e.preventDefault(); 
				});	
				
				$('#myElement').click(function(){ 
					$('.form-bg .block-form').show();
					$('.form-bg .success').hide();
					$('input[type="text"]').val('');
				});
				
				$('#myElement2').click(function(){ 
					$('.form-bg .block-form').show();
					$('.form-bg .success').hide();
					$('input[type="text"]').val('');
				});
				
				$('#myElement3').click(function(){ 
					$('.form-bg .block-form').show();
					$('.form-bg .success').hide();
					$('input[type="text"]').val('');
				});
				
				
				
		$('.btn-pod').on('click', function(){
		var $this = $(this);
		$('.btn-pod').hide();
		$('.text-hid').show();
		return false;
		});
		
		
		$('.testimonials-foto a').lightBox();
	
});



		$(function(){

			var current_date = new Date();// текущая дата
				current_date.setDate(current_date.getDate())
				curDay = current_date.getDate(),
				curMonth = current_date.getMonth(),
				curYear = current_date.getFullYear();


			$('#counter1').countMe(curYear, curMonth, curDay+1, '#counter1');
			$('#counter2').countMe(curYear, curMonth, curDay+1, '#counter2');
	 
		})


  
  	$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top - 232
				}, 1000);
				return false;
			  }
			}
		  });
		});





