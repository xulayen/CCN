$(function(){
    var a=84;
    circle(a);        //画圆
    tabSwitch();      //选项卡切换
    banner();          //广告轮播
    changeSize();      //设置屏幕高度
    window.addEventListener("resize", changeSize, false); //横竖屏切换时设置屏幕高度
});
function jumpTo(url){               //跳转页面
    location.href=url;
}
function changeSize(){        //改变横屏高度
    var htmlH=document.documentElement.clientHeight;
    var htmlW=document.documentElement.clientWidth;
    htmlH=htmlH>htmlW?htmlH:(htmlW/htmlH-0.52)*htmlW;
    var ratio=htmlW/htmlH;
    if(ratio<0.8){
        $('.homePage').height(htmlH);
    }
}
function circle(a){               //设置进度条
    var oHtmlW=document.documentElement.clientWidth;
    var oHtmlH=document.documentElement.clientHeight;
    var oWrap=document.getElementsByClassName('progress_wrap')[0];
    var oPercent=document.getElementsByClassName('percent_digi')[0];
    var p=0;
    $.circleProgress.defaults.size = oWrap.offsetWidth*0.9;
    if(oHtmlW>oHtmlH){
        $.circleProgress.defaults.thickness = 44;
    }else{
        $.circleProgress.defaults.thickness = 24;
    }
    $('#circle').circleProgress({
        value: 0.72,
        startAngle:((7*0.98*Math.PI)/9),
        fill: {
            gradient: ["#ed2312","#f89d05", "#ffd200"]
        },
        animation:{
            duration: 1500,
            easing: 'circleProgressEasing'
        },
        emptyFill:'transparent'
    });
    $('#circle').circleProgress({ value: 0.0072*(a+2) });
    $('#circle').bind('circle-animation-progress',function(event, animationProgress, stepValue){
        p=parseInt(parseFloat(animationProgress)*a);
        oPercent.innerHTML=p;
    });
}
function tabSwitch(){                //当季积分  全国排名的切换
    var oLine=document.getElementsByClassName('switch_line')[0];
    var oLeft=document.getElementsByClassName('switch_l')[0];
    var oRight=document.getElementsByClassName('switch_r')[0];
    var oSwitchL=document.getElementsByClassName('switch_onL')[0];
    var oSwitchR=document.getElementsByClassName('switch_onR')[0];
    var oBlock=document.getElementsByClassName('switch_block')[0];
    var l=oLine.offsetWidth-oBlock.offsetWidth;
    window.addEventListener("resize", function(){
        l=oLine.offsetWidth-oBlock.offsetWidth;
        if(oBlock.offsetLeft==0){
            a=60;
            circle(a);
        }else{
            a=84;
            oBlock.style.left=l+'px';
            circle(a);
        }
    }, false);
    oSwitchL.ontouchend=function(){
        startMove(oBlock,{left:0},300,'easeOut');
        oLeft.style.fontSize='0.76rem';
        oRight.style.fontSize='0.6rem';
        oLeft.style.color='#fff';
        oRight.style.color='#ccc';
        $('.ratio_son').text('1800KL');
        $('.ratio_parent').text('/3000KL');
        a=60;
        circle(a);
    };
    oSwitchR.ontouchend=function(){
        startMove(oBlock,{left:l},300,'easeOut');
        oLeft.style.fontSize='0.6rem';
        oRight.style.fontSize='0.76rem';
        oLeft.style.color='#ccc';
        oRight.style.color='#fff';
        $('.ratio_son').text('10800KL');
        $('.ratio_parent').text('/12000KL');
        a=84;
        circle(a);
    }
}
function banner(){                        //图片轮播
    var oBannerBox=document.getElementsByClassName('banner_box')[0];
    var oBanner=oBannerBox.getElementsByClassName('banner')[0];
    var oBannerNav=oBannerBox.getElementsByClassName('banner_nav')[0];
    var aLi=oBanner.getElementsByTagName('li');
    var oHtmlW=document.documentElement.clientWidth;
    var oldL=aLi.length;
    var i;
    var downX=0;
    var downLeft=0;
    var iNow=0;
    var autoMove=null;
    var newLi='';
    for(i=0;i<aLi.length;i++){
        newLi+='<li></li>';
    }
    oBannerNav.innerHTML=newLi;
    var aNewLi=oBannerNav.getElementsByTagName('li');
    aNewLi[0].className='current';
    oBannerNav.style.marginLeft=-(oBannerNav.offsetWidth)/2+'px';
    oBanner.innerHTML+=oBanner.innerHTML;
    for(i=0;i<oldL*2;i++){
        aLi[i].style.width=oHtmlW+'px';
    }
    oBanner.style.width=oldL*2*oHtmlW+'px';

    window.addEventListener("resize",function(){             //屏幕切换
        oHtmlW=document.documentElement.clientWidth;
        for(i=0;i<oldL*2;i++){
            aLi[i].style.width=oHtmlW+'px';
        }
        oBanner.style.width=oldL*2*oHtmlW+'px';
    }, false);
    oBanner.ontouchstart=function(ev){
        clearInterval(autoMove);
        var touchs=ev.changedTouches[0];
        downX=touchs.pageX;
        downLeft=this.offsetLeft;
        var downTime=Date.now();
        oBanner.ontouchmove=function(ev){
            ev.preventDefault();
            var touchs=ev.changedTouches[0];
            if(iNow==0&&touchs.pageX>downX){
                downLeft=-oldL*oHtmlW;
                iNow=oldL;
            }else if(iNow==oldL&&touchs.pageX<downX){
                iNow=0;
                downLeft=0;
            }
            this.style.left=touchs.pageX-downX+downLeft+'px';
        };
        oBanner.ontouchend=function(ev){
            var touchs=ev.changedTouches[0];
            if(Math.abs(touchs.pageX-downX)>oHtmlW/2||Date.now()-downTime<300&&Math.abs(downX-touchs.pageX)>30){
                if(touchs.pageX<downX){
                    iNow++;
                }else{
                    iNow--;
                }
            }
            startMove(this,{left:-iNow*oHtmlW},400,'easeOut');
            for(var j=0;j<oldL;j++){
                aNewLi[j].className='';
            }
            aNewLi[iNow%oldL].className='current';
            oBanner.ontouchmove=null;
            oBanner.ontouchend=null;
            autoMove=setInterval(fnMove,2400);
        }
    };
    autoMove=setInterval(fnMove,2400);
    function fnMove(){
        iNow++;
        if(iNow==oldL+1){
            oBanner.style.left=0;
            iNow=1;
        }
        for(var j=0;j<oldL;j++){
            aNewLi[j].className='';
        }
        aNewLi[iNow%oldL].className='current';
        startMove(oBanner,{left:-iNow*oHtmlW},400,'easeOut');
    }
}
function bannerShow(){              //显示广告
    var oMask=document.getElementsByClassName('mask')[0];
    var oBannerBox=document.getElementsByClassName('banner_box')[0];
    var oHtml=document.getElementsByTagName('html')[0];
    var oArrow=document.getElementsByClassName('arrow')[0];
    var oArrowTop=document.getElementsByClassName('arrow_top')[0];
    var hRem=parseInt(oHtml.style.fontSize);
    oArrowTop.style.top=8.4*hRem+'px';
    $('.mask').show();
    startMove(oMask,{opacity:50},400,'easeOut');
    startMove(oArrow,{top:8.4*hRem},400,'easeOut',function(){
        $('.arrow').hide();
        $('.arrow_top').show();
    });
    startMove(oBannerBox,{top:0},400,'easeOut');
    window.addEventListener("resize",function(){  //屏幕切换
        hRem=parseInt(oHtml.style.fontSize);
        oArrowTop.style.top=8.4*hRem+'px';
    }, false);
}
function bannerHide(){                   //隐藏广告
    var oMask=document.getElementsByClassName('mask')[0];
    var oBannerBox=document.getElementsByClassName('banner_box')[0];
    var oHtml=document.getElementsByTagName('html')[0];
    var oArrow=document.getElementsByClassName('arrow')[0];
    var oArrowTop=document.getElementsByClassName('arrow_top')[0];
    var hRem=parseInt(oHtml.style.fontSize);
    oArrow.style.top=0.9*hRem+'px';
    startMove(oArrowTop,{top:0.9*hRem},300,'easeOut',function(){
        $('.arrow_top').hide();
        $('.arrow').show();
    });
    startMove(oMask,{opacity:0},300,'easeOut');
    startMove(oBannerBox,{top:-11*hRem},300,'easeOut',function(){
        $('.mask').hide();
    });
}