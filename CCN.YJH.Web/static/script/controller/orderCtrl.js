app.controller('cartCtrl',['$scope','$location','$timeout',function($scope,$location,$timeout){
    cart={};
    cart.isLoading=false;

    //兑换商品
    cart.exchangeR=function(){
        $('.pop_box').hide();
        cart.isLoading=true;
        $timeout(function(){
            cart.isLoading=false;
            $('.exchange_result').show();
        },1000);
    };
    //兑换商品结束
    $scope.cart=cart;
} ]);





$(function ()
{
    GetUserInfo();

    GetOrderList();

});

function GetOrderList() {
    var orderli = "";

    $("#div_order").html('');

    var data = {
        'action': '6',
        'userid': 'c786e011d1fb4a5996c7499e7ff28ecc',       //用户id
    };

    $.ajax({
        type: "get",
        url: url_config.url,
        data: data,
        dataType: "json",
//        dataType: "jsonp",
//        jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
        success: function (data)
        {
            
            var message = data.message;
            if (data.state == 0)
            {
                var json = JSON.parse(data.data);

                var lis = "";

                for (var i = 0; i < json.length; i++) {
                    
                    var t_entity = json[i];
                    var i_giftid = t_entity.GIFTID;
                    var i_giftname = "";  
                    var i_giftsrc = "";

                    for (var j = 0; j < goodsAll.length; j++) {
                        var j_giftid = goodsAll[j].id;

                        if(j_giftid == i_giftid){
                            i_giftname = goodsAll[j].name;
                            i_giftsrc = goodsAll[j].m_src;
                        }

                    }
                   
                    var bk_rul = '../../../static/images/mall/goods/'+ i_giftsrc +'.png';

                    lis += '<div class="order_list"><img style="width: 340px;height: 224px;margin-left: 70px;" src="'+ bk_rul +'" /><img src="../../static/images/order_trans.png" alt="" class="order_status" /><div class="order_name">订单号：'+ t_entity.ORDERSNO +'</div></div>';

                }

                $("#div_order").html(lis);

            } else
            {

            }
        },
        error: function (e)
        {
        }
    });



}
