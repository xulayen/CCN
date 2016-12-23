var loadingP=document.getElementsByClassName('loading_percent')[0];
var loadingW=document.getElementsByClassName('loading')[0];
var menuWrap=document.getElementsByClassName('menu_wrap')[0];
var loader = new createjs.LoadQueue(false);
loader.loadManifest([
    "common/bg_head.png",
    "common/bg_body.png",
    "common/bd_xl.png",
    "common/bd_l.png",
    "common/bd_m.png",
    "common/bd_s.png",
    "common/bd_xs.png",
    "common/bg_line.png",
   "common/nav_1.png",
   "common/nav_2.png",
   "common/nav_3.png",
   "common/nav_4.png",
   "common/nav_5.png",
   "common/nav_6.png",
   "common/nav_1_l.png",
   "common/nav_2_l.png",
   "common/nav_3_l.png",
   "common/nav_4_l.png",
   "common/nav_5_l.png",
   "common/nav_6_l.png",
   "common/nav_b1.png",
   "common/nav_b2.png",
   "common/nav_b3.png",
   "common/nav_b4.png",
   "common/nav_line.png",
    "mcny/m_1.png",
    "mcny/m_2.png",
    "mcny/m_3.png",
    "mcny/m_4.png"
], true, "../../static/images/");

loader.addEventListener("progress", function(e){
    var proNum = Math.ceil(e.progress * 100);
    loadingP.innerText=proNum + "%";
});
loader.addEventListener("complete", function(){
    loadingW.style.display='none';
    menuWrap.style.display='block';
});



