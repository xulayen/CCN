app.controller('detailCtrl',['$scope','$location','$timeout',function($scope,$location,$timeout){
    detail={};
    detail.isLoading=false;
    //返回上一页
    var urls=$location.absUrl();
    var b=urls.search('back')+5;
    var c=urls.search('&');
    detail.back=urls.slice(b,c);
    if(detail.back=='true'){
        popShow();
    }
    //返回上一页结束
    //获取数据，加载图片
    detail.oid=urls.slice(-3);
    detail.Id=Number(urls.slice(-3))-1;
    detail.good=goodsAll[detail.Id];
    detail.ImgAll=detailImg[detail.Id].src;
    detail.ImgList=[];
    var a=0;
    detail.addImg=function(){
        for (var i = a; i < a+3; i++) {
            if(i<detail.ImgAll.length){
                (function(i){
                    $timeout(function(){
                        detail.ImgList.push(detail.ImgAll[i]);
                    },(i%3)*100)
                })(i)
            }
        }
        a+=3;
    };
    detail.addImg();
    //获取数据，加载图片结束
    //页面滚动加载图片
    window.onscroll=function(){
        var bheight = document.documentElement.clientHeight;
        var sheight = document.body.scrollHeight || document.documentElement.scrollHeight;
        var stop = document.body.scrollTop || document.documentElement.scrollTop;
        if(sheight-stop<=bheight+200){//当滚动条到顶部的距离等于滚动条高度减去窗口高度时
            detail.addImg();
        }
    };
    //页面滚动加载图片结束
    //商品兑换
    detail.exchangeR=function(){
        $('.pop_box').hide();
        detail.isLoading=true;
        $timeout(function(){
            detail.isLoading=false;
            $('.exchange_result').show();
        },1000);
    };
    //商品兑换结束
    //加入购物车
    var n=0;
    detail.add_cart=function(){
        n++;
        $('.cart_num').html(n);
        $('.cart_num').addClass('cart_num_ani');
        setTimeout(function(){
            $('.cart_num').removeClass('cart_num_ani');
        },200);
    };
    //加入购物车结束
    $scope.detail=detail;
}]);