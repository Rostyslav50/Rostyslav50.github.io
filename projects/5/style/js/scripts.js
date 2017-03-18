$(function() {

	$.fn.superbgimage.options = {
		randomtransition: 2,
		z_index: -1,
		slideshow: 1,
		slide_interval: 4000,
		randomimage: 1,
		speed: 'slow'
	};

	$('#thumbs').superbgimage().hide();

});

ddsmoothmenu.init({
	mainmenuid: "menu",
	orientation: 'h',
	classname: 'menu',
	contentsource: "markup"
})

$(function() {
$('.flickr img, .blog a img, #container a img, .content a img').css("opacity","1.0");	
$('.flickr img, .blog a img, #container a img, .content a img').hover(function () {										  
$(this).stop().animate({ opacity: 0.75 }, "fast"); },	
function () {			
$(this).stop().animate({ opacity: 1.0 }, "fast");
});
});

$('.opacity').transify({opacityOrig:.80, percentHeight:'100%'});

$(document).ready(function(){
			$("a[rel^='prettyPhoto']").prettyPhoto({autoplay_slideshow: false, overlay_gallery: false, social_tools:false, deeplinking: false, theme:'pp_default', slideshow:5000});
		});

$(document).ready(function(){

$(".togglebox").hide();

$("h2").click(function(){

$(this).toggleClass("active").next(".togglebox").slideToggle("slow");
return true;
});
});

$(document).ready(function() {

	$(".tab_content").hide();
	$("ul.tabs li:first").addClass("active").show();
	$(".tab_content:first").show();
	

	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});

});

 $(document).ready(function() {
        $('.box, .carousel ul li').mouseenter(function(e) {

            $(this).children('a').children('span').fadeIn(200);
        }).mouseleave(function(e) {

            $(this).children('a').children('span').fadeOut(200);
        });
    });