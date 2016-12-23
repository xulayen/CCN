$(function(){
    pageShow();    //页面显示
    arrowAni();    //箭头动画
});
function pageShow(){
    $('.login_wrap,.login_top').height($(window).height());
    var pageTimer=setInterval(showPage,200);
    var $cnt=$('.login_wrap');
    function showPage(){
        if($cnt.height()==$(window).height()){
            $cnt.show();
            clearInterval(pageTimer);
            $('.oil').addClass('fadeInLeft');
            pageScroll();  //页面滚动
        }
    }
}
function pageScroll(){
    var myScroll;
    myScroll = new IScroll('#wrapper', {
        scrollX: false,
        scrollY: true,
        momentum: false,
        disableMouse:true,
        disablePointer:true,
        bounce:false,
        snap: true,
        snapThreshold:0,
        click:true,
        probeType: 3
    });
    myScroll.on('scroll', updatePosition);
    myScroll.on('scrollEnd', updatePosition);
    function updatePosition () {
        var percent=parseFloat(parseInt(myScroll.y)/(myScroll.maxScrollY*5)).toFixed(2);
        var p=1-percent;
        p=p<=0.8?0.8:p;
        var curPage=myScroll.currentPage.pageY;
        if(percent==0.00){
            $('.arrow_box').show().css({top:'auto',bottom:'0.4rem'}).removeClass('reverse');
        }else if(percent==0.20){
            $('.arrow_box').show().css({top:'0.3rem',bottom:'auto'}).addClass('reverse');
        }else{
            $('.arrow_box').hide()
        }
        $('.oil').removeClass('fadeInLeft').css({'transform':'scale('+p+')','-webkit-transform':'scale('+p+')'});
    }
}

function arrowAni(){
    var oArrow=document.getElementById('arrow');
    var aImg=oArrow.getElementsByTagName('img');
    var len=aImg.length;
    setTimeout(function(){
        for(var i=0;i<len;i++){
            $(aImg[i]).addClass('ani');
        }
    },600);
    setInterval(function(){
        for(var i=0;i<len;i++){
            ImgShow(i);
        }
    },1500);
    function ImgShow(i){
        setTimeout(function(){
            $(aImg[i]).removeClass('ani').fadeOut('100',function(){
                setTimeout(function(){
                    $(aImg[i]).addClass('ani').show();
                },50);
            });
        },300);
    }
}

/* 输入框只能输入数字*/
function change(target){
    var $input=$("."+target);
    var val = $input.val().replace(/\D/,'');
    $input.val(val);
}
/* 输入框只能输入数字结束*/

function ruleShow(){      //活动规则显示
    $('.mask_active').show();
}
function ruleHide(){    //活动规则隐藏
    $('.mask_active').hide();
}
function noticeShow(){
    $('.mask_notice').show().find('.box_notice').addClass('zoomIn');
}
function noticeHide(){
    $('.mask_notice').hide();
}