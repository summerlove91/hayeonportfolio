window.load = function(){
    var projectTitle = document.getElementsByClassName('project-mouseover');
    
    projectTitle.addEventListener("mouseover", function(){
        projectTitle.style.opacity = "0.8";
    })
    
}