(function($){

	$.fn.dcSlickForms = function(options) {

		var defaults = {
			classError: 'error',
			classForm: 'slick-form',
			align: 'left',
			animateError: true,
			animateD: 10,
			ajaxSubmit: true
		};

		var options = $.extend(defaults, options);
		   
		return this.each(function(options){
			
			var formAction = $(this).attr('action');
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			var textError = $('#v-error', this).val();
			var textEmail = $('#v-email', this).val();
			var $error = $('<span class="error"></span>');
			var $form = this;
			var $loading = $('<div class="loading"><span></span></div>');
			var errorText = '* Required Fields';
			$('input',$form).focus(function(){
				$(this).addClass('focus');
			});
			$('input',$form).blur(function(){
				$(this).removeClass('focus');
			});
			$('.nocomment').hide();
			$('.defaultText',this).dcDefaultText();
			$('.'+defaults.classForm+' label').hide();
			
			$(this).submit(function(){

				formReset($form);
				$('.defaultText',$form).dcDefaultText({action: 'remove'});

				$('.required',$form).each(function(){
					var label = $(this).attr('title');
					var inputVal = $(this).val();
					var $parentTag = $(this).parent();
					if(inputVal == ''){
						$parentTag.addClass('error').append($error.clone().text(textError));
					}
			
					if($(this).hasClass('email') == true){
						if(!emailReg.test(inputVal)){
							$parentTag.addClass('error').append($error.clone().text(textEmail));
						}
					}
				});

				if ($('.error',$form).length) {
					$('.btn-submit',this).before($error.clone().text(textError));
				} else {
					if(defaults.ajaxSubmit == true){
						var $response = $(this).next();
						$(this).addClass('submit').after($loading.clone());
						$('.defaultText',$form).dcDefaultText({action: 'remove'});
						$.post(formAction, $(this).serialize(),function(data){
							$('.loading').fadeOut().remove();
							$response.html(data).fadeIn();
							$('fieldset',this).slideUp();
						});
					} else {
						$form.submit();
					}
				}

				return false;
			});
	
			$('input, textarea').focus(function(){
				var $parent = $(this).parent();
				$parent.addClass('focus');
				$parent.removeClass('error');
				
			});
			$('input, textarea').blur(function(){
				var $parent = $(this).parent();
				var checkVal = $(this).attr('title');
				if (!$(this).val() == checkVal){
					$(this).removeClass('defaulttextActive');
				}
				$parent.removeClass('error focus');
				$('span.error',$parent).hide();
			});
			
			function formReset(obj){
				$('li',obj).removeClass('error');
				$('span.error',obj).remove();
			}
		});
	};
})(jQuery);

(function($){

	$.fn.dcDefaultText = function(options) {
	
		var defaults = {
			action: 'add',
			classActive: 'defaultTextActive'
		};

		var options = $.extend(defaults, options);
  
		return this.each(function(options){
			
			if(defaults.action == 'add'){
			
				$(this).focus(function(srcc) {
					if ($(this).val() == $(this)[0].title) {
						$(this).removeClass(defaults.classActive);
						$(this).val('');
					}
				});
				
				$(this).blur(function() {
					if ($(this).val() == "") {
						$(this).addClass(defaults.classActive);
						$(this).val($(this)[0].title);
					}
				});
				$(this).addClass(defaults.classActive).blur();
			}
			
			if(defaults.action == 'remove'){
			
				var checkVal = $(this).attr('title');
				if ($(this).val() == checkVal){
					$(this).val('');
				}
					
			}
		});
	};
})(jQuery);