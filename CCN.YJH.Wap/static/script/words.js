$(function(){
    var oContent=document.getElementsByClassName('words_content')[0];
    oContent.ontouchstart=function(){
        $('.user_words').blur();
    };
    $('.user_words').focus(function(){
        $('.words_speak').css({position:'absolute'});
    });
    $('.user_words').blur(function(){
        $('.words_speak').css({position:'fixed'});
    });
});
function sendMessage(){
    var userWords=$('.user_words').val().trim();
    if(userWords!==''&&userWords!=='填写留言'){
        var userName='老张汽修店老张汽修店老张汽修店';
        var now=new Date();
        var nowTime=formTime(now);
        $('.words_content_main').append('<div class="words_list_user clearfix "><div class="words_list_title">'+
        ' <img src="../../static/images/home/words_user.png" alt="" class="img_words_user"/>' +
        '<span class="list_title_user">'+userName+'</span><span style="letter-spacing: 0;margin-left:0.3rem;">' +nowTime+
        '</span></div><div class="words_list_body">'+userWords+' </div></div>');
    }
    $('.user_words').val('').focus();
}
function formTime(date) {
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    return m + '/' + d + '/' +h+':'+minute;
}