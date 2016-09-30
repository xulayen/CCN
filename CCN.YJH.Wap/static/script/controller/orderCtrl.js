app.controller('cartCtrl',['$scope','$location','$timeout',function($scope,$location,$timeout){
    cart={};
    cart.isLoading=false;
    //返回上一页面
    var urls=$location.absUrl();
    var b=urls.search('back')+5;
    var c=urls.search('&');
    cart.back=urls.slice(b,c);
    if(cart.back=='true'){
        cartPopShow();
    }
    //返回上一页面结束
    //兑换商品
    cart.exchangeR=function(){
        $('.pop_box').hide();
        cart.isLoading=true;
        $timeout(function(){
            cart.isLoading=false;
            $('.exchange_result').show();
        },1000);
    }
    //兑换商品结束
    $scope.cart=cart;
}]);