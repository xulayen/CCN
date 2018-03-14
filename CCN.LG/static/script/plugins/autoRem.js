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


window.onresize = function () {
	var h = $(window).height();
	var u = navigator.userAgent;
	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
	if(h <= window.screen.availHeight/2){
		$('.bg_bottom').css({'display':'none'});
		}else{
		    $('.bg_bottom').css({'display':'block'});
		}
	 }
}
$('input').on('focus',function(){
 $('.bg_bottom').hide();
})
$('input').on('blur',function(){
 $('.bg_bottom').show();
})