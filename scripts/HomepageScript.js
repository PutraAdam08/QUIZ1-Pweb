
var intervalID=0;
function fadeout(){
    intervalID = setInterval(hide, 50);
}

function fadein(){
    intervalID = setInterval(show, 50);
}


function hide(){
    var opacity=0;
    var elem1=document.getElementById("unfade");
    var elem2=document.getElementById("fade");
    opacity = Number(window.getComputedStyle(elem1).getPropertyValue("opacity"));
      
    if(opacity>0){
        opacity=opacity-0.1;
            elem1.style.opacity=opacity;
    }
        else{
            clearInterval(intervalID);
            elem1.style.display = "none";
            elem2.style.display = "block";
            intervalID = 0;
            fadein();

            
    }
    
}

function show(){
    var opacity= 0;
    var elem2=document.getElementById("fade");
    opacity = Number(window.getComputedStyle(elem2).getPropertyValue("opacity"));
    if(opacity<1){
        opacity=opacity+0.1;
            elem2.style.opacity=opacity;
    }
        else{
            clearInterval(intervalID);            
    }
}
