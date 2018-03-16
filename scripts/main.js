//$(document).ready(function(){
//    $(".project-links").hover(function(){
//        $(this).addClass("animated zoomIn");
//    })
//    
//});
//                  


//
//$(window).load(function() {
//		// Animate loader off screen
//    $(".se-pre-con").fadeOut("slow");
////    callback to delete thing with class .se-pre-con
//});

//window.onload = function(){
    $(document).ready(function(){

        $('#mouseoverReveal').css('opacity', 0);

        $('#mouseoverReveal').waypoint(function()
            {
            $('#mouseoverReveal').addClass('fadeInLeft');
            $('#mouseoverReveal').css('opacity',1);},
            {offset:'50%'});
     }); 
//}

