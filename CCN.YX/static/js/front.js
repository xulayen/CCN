/**
 * Created by xiechen on 2016/4/14.
 */
$(function () {
    //首页底部菜单栏切换
    $(".inspect").bind("click", function () {
        $(".origin_import").removeClass("transLarge_s").addClass("transSmall");
        $(".origin").toggleClass("transLarge");
        $(this).removeClass("transLarge").addClass("transSmall");
        $(".inspect_import").removeClass("transSmall").addClass("transLarge_s");
    });
    $(".origin").bind("click", function () {
        $(".inspect_import").removeClass("transLarge_s").addClass("transSmall");
        $(".inspect").toggleClass("transLarge");
        $(this).removeClass("transLarge").addClass("transSmall");
        $(".origin_import").removeClass("transSmall").addClass("transLarge_s");
    });
    //追溯信息入口
        $(".origin_import_btn").click(function (){
            location.href = "originPage.html";
        });
    //检验信息入口
        $(".inspect_import_btn").click(function () {
            location.href = "inspectPage.html";
        });
    //手风琴展开时panel-head所作改变
        $('.panel-collapse').on('show.bs.collapse', function () {
            $(this).prev().removeClass("panel_hide_bg").addClass("panel_show_bg");
        }).on('hide.bs.collapse', function () {
            $(this).prev().removeClass("panel_show_bg").addClass("panel_hide_bg");
        });
      //页面脚部的显示和隐藏
      var s= setInterval(function () {
            var doch=$(document).height();
            var windh=$(window).height();
            if(doch > windh ){
                $(".origin_foot").fadeIn(10);

            }else{
                $(".origin_foot").fadeOut(10);
            }
        },0);
    //点击向下箭头时，页面滚动
        $(".down_arrow").click(function (e) {
            window.scrollBy(0, 300);
        });

    //产品介绍中的英文，数字，标点符号匹配出来竖排——原生js方法 （跳转到其它页面时，控制台报错，但不影响效果）
    //var intro = document.getElementsByClassName('product_intro')[0];
    //intro.innerHTML=intro.innerHTML.replace(/([^\u4e00-\u9fa5])/g,function($1){
    //    return "<b>"+$1+"</b>";
    //});
    //产品介绍中的英文，数字，标点符号匹配出来竖排——jQuery方法 （后台交互可能有影响，可把下列代码注释，显示上面原生js）
    $(".product_name").html($(".product_name").text().replace(/([^\u4e00-\u9fa5])/g,function($1){
        return "<b>"+$1+"</b>";
    }));
    $(".product_number").html($(".product_number").text().replace(/([^\u4e00-\u9fa5])/g,function($1){
        return "<b>"+$1+"</b>";
    }));
    $(".product_date").html($(".product_date").text().replace(/([^\u4e00-\u9fa5])/g,function($1){
        return "<b>"+$1+"</b>";
    }));
    $(".product_type").html($(".product_type").text().replace(/([^\u4e00-\u9fa5])/g,function($1){
        return "<b>"+$1+"</b>";
    }));
    $(".product_norms").html($(".product_norms").text().replace(/([^\u4e00-\u9fa5])/g,function($1){
        return "<b>"+$1+"</b>";
    }));
    $("#spa").html($("#spa").text().replace(/([^\u4e00-\u9fa5])/g,function($1){
        return "<b>"+$1+"</b>";
    }));
    //控制字数竖排
    var len=$("#spa").text().length;
    var w=parseInt(len/10)-0.2;
    if(w>0){
        $("#spa").css({"width":w+"rem","right":(w-1)+"rem"});
    }else{
        $("#spa").css({"width":"0.8rem","right":"0rem"});
    }
});




























