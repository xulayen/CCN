setSize();
window.addEventListener("resize", setSize, false);
window.addEventListener("orientationchange", setSize, false);
function setSize() {
    var html = document.getElementsByTagName('html')[0];
    var width = html.clientWidth;
    var height=html.clientHeight;
    html.style.fontSize = width / 18 + "px";
    var ratio=width/height;
    if(ratio>0.8){
        return;
    }else if(ratio>0.69){
        html.style.fontSize = width / 20.6 + "px";
    }else if(ratio>0.65){
        html.style.fontSize = width / 19.5 + "px";
    }else if(ratio>0.635){
        html.style.fontSize = width / 18.75 + "px";
    }else if(ratio>0.6){
        html.style.fontSize = width / 18 + "px";
    }else if(ratio>0.55){
        html.style.fontSize = width / 16 + "px";
    }else{
        html.style.fontSize = width / 15 + "px";
    }
}