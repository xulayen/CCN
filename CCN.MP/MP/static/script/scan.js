$(function () {
    var WH = document.getElementsByTagName('html')[0].clientHeight;
    $('body,.scan_both_wrap,.record_result').height(WH);
    
});
function scanShow(){
    var isCurrent=$('.tab_scan').hasClass('tab_current');
    if(!isCurrent){
        $('.tab_record').removeClass('tab_current');
        $('.tab_scan').addClass('tab_current');
    }
    setTimeout(function(){
        $('.scan_both_wrap').removeClass('move_right');
    },50);
}
function recordShow(){
    var isCurrent=$('.tab_record').hasClass('tab_current');
    if(!isCurrent){
        $('.tab_scan').removeClass('tab_current');
        $('.tab_record').addClass('tab_current');
        setTimeout(function(){
            $('.scan_both_wrap').addClass('move_right');
        },50);
    }
}
var rrTimer=null;
function rrShow(){
    clearTimeout(rrTimer);
    $('.record_result').show();
    setTimeout(function(){
        $('.record_result').addClass('rr_move_left');
    },50);
}
function rrHide(){

    setTimeout(function(){
        $('.record_result').removeClass('rr_move_left');
        rrTimer=setTimeout(function(){
            $('.record_result').hide();
        },400);
    },50);
}
function change(){
    var val = $(".scan_bottom_input").val().replace(/\D/,'');
    $(".scan_bottom_input").val(val);
    if(val.length==16){
        $('.scan_bottom_btn').addClass('scan_bottom_btn_sure');
    }else{
        $('.scan_bottom_btn').removeClass('scan_bottom_btn_sure');
    }
}
function changeFocus(){
    var val = $(".scan_bottom_input").val().replace(/\D/,'');
    $(".scan_bottom_input").val(val);
    console.log(val);
    if(val.length==16){
        $('.scan_bottom_btn').addClass('scan_bottom_btn_sure');
    }else{
        $('.scan_bottom_btn').removeClass('scan_bottom_btn_sure');
    }
}