$(".oil-used").click(function(){
    $(".oil-mask").show();

});
$(".oil-list li:not(:last)").click(function(){
    $(".oil-used").val($(this).text());
    $(".oil-mask").hide();
});
$(".oil-list .input-text").focus(function(){
    $(this).val("");
    $(this).css({"background":"#fff"});
}).blur(function(){
    $(".oil-used").val($(this).val());
    $(".oil-mask").hide();
});
//$(".full-verify").click(function () {
//    $(".verify-page .mask").show().click(function () {
//        $(this).hide();
//    });
//});
$(".scan-search-input").bind("input propertychange", function () {
    if ($(this).val().search(/^[0-9]{16}$/) !== -1) {
        $(".scan-search-btn").css({"background": "#ffd200", "border": "1px solid #ffd200"}).bind("click",function () {
            location.href='share.html';
        });
    }else{
        $(".scan-search-btn").css({"background": "#a8a9ad", "border": "1px solid #a8a9ad"}).unbind("click");
    }
});
$(".active-hundred  .mask").click(function(){
    $(this).hide();
});
function luckyShow(){
    $(".active-hundred  .mask").show();
}