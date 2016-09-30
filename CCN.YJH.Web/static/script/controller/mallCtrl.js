app.controller('mallCtrl', ['$scope', '$timeout', '$filter', '$location', function ($scope, $timeout, $filter, $location) {
    var orderBy = $filter('orderBy');
        $scope.floor=1;
    goods = {};
    goods.goodsAllList = goodsAll; //goodsAll:为物品json goodsAllList:暂存放所有物品数据
    goods.goodsLists = goodsAll;
    goods.countNow=1;
    goods.countSum=Math.ceil(goods.goodsLists.length/6);
  
    //页面滚动显示当前位置
    $('.goods_wrap')[0].onscroll=function(){
        goods.wrapScrollT=$(this).scrollTop();
        goods.countNow=Math.ceil(goods.wrapScrollT/600);
        if(goods.countNow==0){
            goods.countNow=1;
        }
       $('.page_count_now').text(goods.countNow);
     
    }
    //页面滚动显示当前位置结束
    goods.pageScrollL=function(){
        var tt=$('.goods_wrap').scrollTop();
        $('.goods_wrap').scrollTop(tt+600);
    }
    goods.pageScrollT=function(){
        var tt=$('.goods_wrap').scrollTop();
        $('.goods_wrap').scrollTop(tt-600);
    }
    //打开筛选、排序下拉菜单开始
    goods.pullShow = function (obj) {
        $('.' + obj).show();
    }
    goods.pullHide = function (obj) {
        $('.' + obj).hide();
    }
    //物品排序功能开始
    goods.classifyF = '';
    goods.classifyName = '排序方式';
    goods.orderName = '';
    goods.changeOrder = function (value, name) {
        goods.orderName = value;
        goods.classifyName = name;
        if (value != '') {
            goods.goodsLists = orderBy(goods.goodsLists, value, false);
        }
        goods.countSum=Math.ceil(goods.goodsLists.length/6);
        $('.goods_wrap').scrollTop('0');
    };
    //物品排序功能结束
    //物品分类功能开始
    goods.filterName = '选择类型';
    goods.life = [];
    goods.tool = [];
    goods.news = [];
    goods.exchange = [];
    angular.forEach(goods.goodsAllList, function (obj, index) {
        if (obj.type == '1') {
            goods.life.push(obj);
        }
        if (obj.type == '2') {
            goods.tool.push(obj);
        }
        if (obj.new==true) {
            goods.news.push(obj);
        }
    });
    goods.changeFilter = function (value, name) {
        goods.searchG='';
        goods.t = [];
        if (value == 'all') {
            goods.t = goods.goodsAllList;
        } else if (value == 'life') {
            goods.t = goods.life;
        } else if (value == 'tool') {
            goods.t = goods.tool;
        } else if (value == 'new') {
            goods.t = goods.news;
        } 
        goods.filterName = name;
        if (goods.orderName != '') {
            goods.t = orderBy(goods.t, goods.orderName, false);
        }
        goods.goodsLists_=goods.t;
        if(goods.selExchange){
            goods.t=goods.t.filter(function(item){
                return item.point>=5000;
            })
        }
        goods.goodsLists=goods.t;
        goods.countSum=Math.ceil(goods.goodsLists.length/6);
        $('.goods_wrap').scrollTop('0')
    };
    //物品分类功能开始结束
    goods.selExchange=false;
    //我能兑换开始
    goods.exchange=function(){
        goods.selExchange=!goods.selExchange;
        if(goods.orderName == ''&&goods.filterName == '选择类型'&&goods.searchObj==undefined){
            goods.goodsLists_=goods.goodsAllList;
        }
        
        if(goods.selExchange){
             goods.goodsLists=goods.goodsLists_.filter(function(item){
                 return item.point>=5000;
            });
        }else{
            goods.goodsLists=goods.goodsLists_;
        }
        goods.countSum=Math.ceil(goods.goodsLists.length/6);
    }
     //我能兑换结束
    //搜索商品
    String.prototype.trim = function () {
        return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }
    goods.searchGoods = function () {
        var oGoodsNo = document.getElementById('goodsNo');
        goods.searchObj = [];
        if (goods.searchG == undefined || goods.searchG.trim() == '' || goods.searchG === '请填写您想要搜索的商品') {
            $('.input_search').focus();
        } else {
            angular.forEach(goods.goodsAllList, function (obj, index) {
                if (obj.name.search(goods.searchG) !== -1) {
                    goods.searchObj.push(obj);
                }
            });
            if (goods.searchObj.length > 0) {
                if (goods.orderName != '') {
                    goods.goodsLists = orderBy(goods.searchObj, goods.orderName, false);
                } else {
                    goods.goodsLists = goods.searchObj;
                }
                goods.countSum=Math.ceil(goods.goodsLists.length/6);
                goods.filterName = '选择类型';
                goods.classifyName = '排序方式';
                goods.selExchange=false;
                goods.goodsLists_=goods.goodsLists;
            } else {
                $('.goods_no').show();
                oGoodsNo.style.opacity = 100;
                oGoodsNo.style.filter = 'alpha(opacity:100)';
                $timeout(function () {
                    startMove(oGoodsNo, { opacity: 0 }, 800, 'easeOut', function () {
                        $('.goods_no').hide();
                    });
                }, 1500)
            }
        }
        $('.goods_wrap').scrollTop('0');
    }
    //搜索商品结束
    $scope.goods = goods;
} ]);


$(function () {
    GetUserInfo();
})
