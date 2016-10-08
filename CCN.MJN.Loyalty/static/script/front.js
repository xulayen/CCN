$(function(){
    $('.store_label,.pwd_label,.tel_label,.code_label').click(function(){
        $(this).siblings('input').focus();
    });
    $('.error_value').click(function(){
        $(this).addClass('none');
        $(this).siblings('._label').removeClass('none');
        $(this).siblings('input').focus();
    });
    $('.reg_error').click(function(){
        $(this).addClass('none');
        $(this).siblings('.input_wrap').removeClass('none');
        $(this).parent('.form_group').find('input').focus();
    });
    //页面横竖屏时控制页面的大小  登录页面 获取密码页面 页面集合
    function changeSize(){
        var htmlH=$(window).height();
        var htmlW=$(window).width();
        htmlH=htmlH>htmlW?htmlH:(htmlW/htmlH-0.52)*htmlW;
        var ratio=htmlW/htmlH;
        if(ratio<0.8){
            $('.loginPage,.getPwdPage,.gatherPage').height(htmlH);
        }
    }
    changeSize();
    window.addEventListener("resize", changeSize, false);
});

//页面跳转
function jump(h){
    location.href = h;
}
function jumpTo(){
    location.replace('gatherPage/index.html');
}

//弹出层位于页面中间偏上20px;
var nowTop=0;
function showPop(){
    nowTop = document.body.scrollTop;
    $('.mask,.pop_all').show();
    var popH=$('.pop_all').height();
    var itemWapH=$('.item_wrap').height();
    var IMT=0;
    var marginTop=-popH/2-20;
    if(itemWapH<popH){
        IMT=(popH-itemWapH)/2;
    }
    $('.item_wrap').css({'margin-top':IMT});
    $('.pop_all').css({'margin-top':marginTop});
}

function showNotice(){
    nowTop = document.body.scrollTop;
    $('.mask,.reg_notice_wrap').show();
}
function showScanPop(){
    $('.mask,.scan_pop').show();
}
function showPwdNotice(){
    $('.mask,.reg_notice').show();
}
function showSeek(){
    $('.mask,.pop_seek').show();
}
function hideMask(){
    $(".mask,.pop_all,.reg_notice,.scan_pop,.pop_seek").hide();
    $(window).scrollTop(nowTop);
}