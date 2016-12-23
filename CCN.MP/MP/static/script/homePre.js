$("body").height($(window).height());
var loader = new createjs.LoadQueue(false);
var progress = $(".loading .pro span");
loader.loadManifest([
    "bg_start.png",
    "home_h.png",
    "home_gift.png",
    "home_blur.png",
    "logo.png",
    "QRcode.png",
    "scan.png",
    "back.png",
    "f_car.png",
    "f_envel.png",
    "bg_login.png",
    "f_tel.png",
    "bg_scan.png",
    "loading.gif"
], true, "../../static/images/");

loader.addEventListener("progress", function(e){
    var proNum = Math.ceil(e.progress * 100);
    progress.html(  proNum + "%");
    setTimeout(function(){
        progress.html("100%");
        $(".loading").hide();
        $(".home_start").show();
        $(".img_start").addClass("home_scale");
        var startTimer=null;
        startTimer=setTimeout(function(){
            $(".home_start").fadeOut("1000",function(){
                $(".home_contain").fadeIn("500");
            });
        },3000);
        $(".home_start").click(function(){
            clearTimeout(startTimer);
            $(this).fadeOut("600",function(){
                $(".home_contain").fadeIn("600");
            });
        });
    },1000);
});
loader.addEventListener("complete", function(){
});




