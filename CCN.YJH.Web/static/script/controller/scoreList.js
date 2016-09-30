$(function () {

    GetUserInfo();

    $("#div_pointlist").html('');

    $.ajax({
        type: "get",
        url: url_config.url,
        data: {
            'action': '7',
            userid: 'c786e011d1fb4a5996c7499e7ff28ecc'
        },
        dataType: "json",
        //        dataType: "jsonp",
        //        jsonp: "callback", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
        success: function (data) {

            var message = data.message;
            if (data.state == 0) {

                var json = JSON.parse(data.data);

                var lis = "";
                $.each(json, function (idx, obj) {

                    var operator = obj.OPERATOR;
                    if (operator == "1") {
                        lis += '<div class="slai-cell"><div class="slai-cell-cnt"><img src="../../static/images/right_arrow.png"><div class="slai-cell-cnt-z"><p>' + obj.CHANGETIME + '</p><p>兑换积分：' + obj.AMOUNT + '</p></div><div class="slai-cell-cnt2"><p>' + obj.REMARK + '</p></div></div></div>';
                    }
                    else {
                        lis += '<div class="slai-cell"><div class="slai-cell-cnt"><img src="../../static/images/left_arrow.png"><div class="slai-cell-cnt-x"><p>' + obj.CHANGETIME + '</p><p>兑换积分：' + obj.AMOUNT + '</p></div><div class="slai-cell-cnt2"><p>' + obj.REMARK + '</p></div></div></div>';
                    }

                });

                $("#div_pointlist").html(lis);

            } else {
            }
        },
        error: function (e) {
        }
    });





})



//获取个人信息，包括：姓名、手机号、总积分
function GetUserInfo() {
    var data = {
        'action': '8',
        'userid': 'c786e011d1fb4a5996c7499e7ff28ecc'       //用户id
    };

    $.ajax({
        type: "get",
        url: url_config.url,
        data: data,
        dataType: "json",
//        dataType: "jsonp",
//        jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
        success: function (data){

            var message = data.message;
            if (data.state == 0) {
                var json = JSON.parse(data.data);

                $("#txt_points").html("门店积分："+ json[0].USERPOINTS+"分");
                $("#txt_mobile").html("联系方式："+json[0].MOBILE+"");
                
            } else {

            }
        },
        error: function (e)
        {
        }
    });
}
