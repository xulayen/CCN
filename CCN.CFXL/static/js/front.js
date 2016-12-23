$(function(){
    $(".oil_used").click(function(){
        $(".oil_wrap").show();
    });
    $(".oil_list li:not(:last)").click(function(){
        $(".oil_used").val($(this).text());
        $(".oil_wrap").hide();
    });
    $(".oil_input").blur(function(){
        $(".oil_used").val($(this).val());
        $(".oil_wrap").hide();
    });
    $(".footer").click(function(){
        location.href = "gift.html";
    });
    var winH=$(window).height();
    $(".page1_on,.page2_on").height(winH);
    $(".input_tel").focus(function(){
        $(".btn_help,.link_store,.active_rule").click(function(){
            $('#pageAll').css('top',-1*winH);
        });
    })
})

var nowTop=0;
function showActiveMask(){
    nowTop = document.body.scrollTop;
    $('#pageAll').css('top',-1*nowTop);
    $('#pageAll').css('position','fixed');
    $('.mask').css('position','fixed');
    $(".mask,.active_wrap").show();
}
function showStoreMask(){
    nowTop = document.body.scrollTop;
    $('#pageAll').css('top',-1*nowTop);
    $('#pageAll').css('position','fixed');
    $('.mask').css('position','fixed');
    $(".mask,.store_wrap").show();
}
function showHelpMask(){
    nowTop = document.body.scrollTop;
    $('#pageAll').css('top',-1*nowTop);
    $('#pageAll').css('position','fixed');
    $('.mask').css('position','fixed');
    $(".mask,.help_wrap").show();
}
function showOptionMask(){
    nowTop = document.body.scrollTop;
    $('#pageAll').css('top',-1*nowTop);
    $('#pageAll').css('position','fixed');
    $('.mask').css('position','fixed');
    $(".mask,.option_wrap").show();
}
function showBookMask(){
    nowTop = document.body.scrollTop;
    $('#pageAll').css('top',-1*nowTop);
    $('#pageAll').css('position','fixed');
    $('.mask').css('position','fixed');
    $(".mask,.book_wrap").show();
}
function hideMask(){
    $('#pageAll').css('top','0');
    $('#pageAll').css('position','relative');
    $('.mask').css('position','absolute');
    $(".mask,.active_wrap,.store_wrap,.help_wrap,.option_wrap,.book_wrap").hide();
    $(window).scrollTop(nowTop);
}
$('.option_list li').click(function(){
    $('.sel_pro_').text($(this).text()).addClass('sel_end');
    hideMask();
});