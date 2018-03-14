setSize();
window.addEventListener("resize", setSize, false);
window.addEventListener("orientationchange", setSize, false);
function setSize() {
    var html = document.getElementsByTagName('html')[0];
    var width = html.clientWidth;
    var height=html.clientHeight;
    var ratio=width/height;
    if(ratio>0.8){
		html.style.fontSize = width / 18 + "px";
    }else if(ratio>0.69){
        html.style.fontSize = width / 19.8 + "px";
    }else if(ratio>0.67){
        html.style.fontSize = width / 19.6 + "px";
    }else if(ratio>0.65){
        html.style.fontSize = width / 19.2 + "px";
    }else if(ratio>0.60){
        html.style.fontSize = width / 18 + "px";
    }else if(ratio>0.55){
        html.style.fontSize = width / 17 + "px";
    }else{
        html.style.fontSize = width / 16 + "px";
    }
}