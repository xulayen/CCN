function jumpTo(a){
    //加参数是为了防止浏览器缓存，安卓机不跳转页面
    var n=parseInt(Math.random()*1000000);
    window.location.href=a+'.html?u='+n;
}
function PageTop(){
    $('body').animate({
        'scrollTop':0
    },300);
}