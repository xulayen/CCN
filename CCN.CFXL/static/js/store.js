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

})
function showMask(){
    setTimeout(function(){
        $(".mask").show();
    },400);
}
function hideMask(){
    $(".mask").hide();
}