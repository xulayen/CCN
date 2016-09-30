app.controller('cartCtrl',['$scope','$location','$timeout',function($scope,$location,$timeout){
    cart={};
    cart.isLoading=false;
    //返回前一页面
    var urls=$location.absUrl();
    var b=urls.search('back')+5;
    var c=urls.search('&');
    cart.back=urls.slice(b,c);
    if(cart.back=='true'){
        cartPopShow();
    }
    //返回前一页面结束
    //购物车兑换结果
    cart.exchangeR=function(){
        $('.pop_box').hide();
        cart.isLoading=true;
        $timeout(function(){
            cart.isLoading=false;
            $('.exchange_result').show();
        },1000);
    };
    //购物车兑换结果结束
    //删除购物车内商品
    cart.deleteGoods=function(){
        var ocart=document.getElementsByClassName('cart_delete');
        var otrash=document.getElementsByClassName('cart_list');
        var ind;      //删除购物车的序号
        for(var i=0;i<ocart.length;i++){
            ocart[i].index=i;
            ocart[i].onclick=function(){
                ind=this.index;
                startMove(otrash[ind],{left:400},300,'easeOut',function(){
                    startMove(otrash[ind],{height:0},300,'easeOut');
                });
            };
        }
    };
    cart.deleteGoods();
    //删除购物车内商品结束
    $scope.cart=cart;
}]);