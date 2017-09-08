
$(window).load(function() {
		// Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
//    callback to delete thing with class .se-pre-con
});

$(function() {
//fadeIn's, navbar tracking page (ID), popup
  // Do our DOM lookups beforehand
  var navContainer = $(".nav-container");
  var nav = $("nav");

  var navWaypoint = new Waypoint({
      element: navContainer,
      handler: function(direction) {
          console.log("working")
//      	nav.toggleClass('sticky', direction=='down');
        if (direction == 'down') {
            navContainer.css({ 'height':nav.outerHeight() });
        }
        else {
            navContainer.css({ 'height':'auto' });
        }
    }
  });

});

var $myPicture = $('.my-picture');

$myPicture.waypoint(function (direction){
    console.log(direction)
    if (direction == 'down'){
        $myPicture.addClass('my-picture-animate');
        $('body').css("color", "pink")
//        to animate, add a class that uses css animations, or use jQuery .animate() function here to edit settings. Example:right: 0px / -= 50px
//        add contact form
    } else {
        $myPicture.removeClass('my-picture-animate');
            }
    }
);
        


