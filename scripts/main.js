//window.load = function(){
//    var projectTitle = document.getElementsByClassName('project-mouseover');
//    
//    projectTitle.addEventListener("mouseover", function(){
//        projectTitle.style.opacity = "0.8";
//    })
//    
//};


$(document).ready(function() {      
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 880){
            $('.navbar').css("background-color","rgba(255,255,255,0.5)");
//            $('.my-style-intro').fadeIn("3500");
            $('.my-style-all p').fadeIn("3500");
         } else {
          $('.my-style-all p').fadeOut("slow");
//          $('.my-style-intro').fadeOut("slow");
         }
     });
});
