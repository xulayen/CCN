function showActiveMask() {
    $(".mask,.active_wrap").show();
}
function showProvinceMask() {
    $(".mask,.option_wrap").show();
}
function showNoticeMask(){
    $(".mask,.notice_wrap").show();
}
function showResultMask(){
    setTimeout(function(){
        $(".mask,.result_wrap").show();
    },400);
}
function hideMask() {
    $(".mask,.active_wrap,.option_wrap,.notice_wrap").hide();
}
//$(function(){
//    $(".verify_form input").focus(function(){
//        $(this).scrollIntoView(false);
//    });
//});
$('.option_list li').click(function(){
    console.log($(this).text());
    $('.sel_prov_').val($(this).text());
    hideMask();
});