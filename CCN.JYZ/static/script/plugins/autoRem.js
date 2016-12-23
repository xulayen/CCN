setSize();
window.addEventListener("resize", setSize, false);
window.addEventListener("orientationchange", setSize, false);
function setSize() {
    var html = document.getElementsByTagName('html')[0];
    var width = html.clientWidth;
    //width = width > 540 ? 540 : width;
    var height=html.clientHeight;
    var ratio=width/height;
    html.style.fontSize = width / 18.75 + "px";
    if(ratio>0.8){
        return;
    }else if(ratio>0.68){
        html.style.fontSize = width / 21.5+ "px";
    }else if(ratio>0.65){
        html.style.fontSize = width / 20.5 + "px";
    }else if(ratio>0.635){
        html.style.fontSize = width / 19.5 + "px";
    }else if(ratio>0.6){
        html.style.fontSize = width / 18.75 + "px";
    }else if(ratio>0.55){
        html.style.fontSize = width / 16.75 + "px";
    }else{
        html.style.fontSize = width / 15.75 + "px";
    }
}