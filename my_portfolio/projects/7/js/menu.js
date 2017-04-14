jQuery(document).ready(function(){
 
    var touch = jQuery('#touch-menu');
    var menu = jQuery('.menu_top');
 
    jQuery(touch).click(function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    jQuery(window).resize(function(){
        var w = jQuery(window).width();
        if(w > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
 
});