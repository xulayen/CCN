$(function(){
    var a=90;
    circle(a);
});
function tabSwitchL(){          //季度目标
    startMove($('.switch_slip')[0],{left:0},300,'easeOut');
    $('.switch_r')[0].style.fontSize = '16px';
    $('.switch_l')[0].style.fontSize = '20px';
    $('.switch_r')[0].style.color = '#999';
    $('.switch_l')[0].style.color = '#ccc';

    $("#k1").html("1500KL");
    $("#k2").html("/3000KL");
    circle(50);
}
function tabSwitchR(){           //年度晋升
    startMove($('.switch_slip')[0],{left:66},300,'easeOut');
    $('.switch_r')[0].style.fontSize='20px';
    $('.switch_l')[0].style.fontSize = '16px';
    $('.switch_r')[0].style.color = '#ccc';
    $('.switch_l')[0].style.color = '#999';
    $("#k1").html("10800KL");
    $("#k2").html("/12000KL");
    circle(90);
}
function jumpTo(url){               //跳转页面
    location.href=url;
}
function circle(a){                  //设置进度条进度
    $('#circle').circleProgress({
        value: 0.72,
        thickness:30,
        size:328,
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
        var p=parseInt(parseFloat(animationProgress)*a);
        $('.percent_digi').text(p);
    });
}
function bannerShow(){
    $('.mask').show();
    $('.arrow_top')[0].style.top='300px';
    startMove($('.arrow_down')[0],{top:300},300,'easeOut',function(){
        $('.arrow_down').hide();
        $('.arrow_top').show();
    });
    startMove($('.home_banner')[0],{top:0},300,'easeOut');
}
function bannerHide(){
    $('.arrow_down')[0].style.top='50px';
    startMove($('.arrow_top')[0],{top:50},300,'easeOut',function(){
        $('.arrow_top').hide();
        $('.arrow_down').show();
    });
    startMove($('.home_banner')[0],{top:-400},300,'easeOut');
    $('.mask').hide();
}
















