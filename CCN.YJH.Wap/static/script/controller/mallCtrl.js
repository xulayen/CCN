app.controller('mallCtrl',['$scope','$timeout','$filter','$location',function($scope,$timeout,$filter,$location){
    var orderBy = $filter('orderBy');
    goods={};
    goods.goodsList=[];
    goods.goodsAllList=goodsAll; //goodsAll:为物品json goodsAllList:暂存放所有物品数据
    goods.goodsLists=goodsAll;
    //开始时先产生8张图片
    goods.addImgNew=function(){
        for (var i = 0; i < 8; i++) {
            if(i<goods.goodsLists.length) {
                goods.goodsList.push(goods.goodsLists[i]);
            }
        }
    };
    goods.addImgNew();
    //开始时先产生8张图片结束
    //页面滚动时添加图片
    var a=8;
    goods.addImg=function(){
        for (var i = a; i < a+8; i++) {
            if(i<goods.goodsLists.length){
                (function(i){
                    $timeout(function(){
                        goods.goodsList.push(goods.goodsLists[i]);
                    },100)
                })(i)
            }
        }
        a+=8;
    };
    //页面滚动时添加图片结束
    //打开筛选、排序遮罩层
    var oMallL=document.getElementsByClassName('mall_bottom_left')[0];
    var oMallR=document.getElementsByClassName('mall_bottom_right')[0];
    oMallL.ontouchend=function(){
        goods.openMask('classify');
    };
    oMallR.ontouchend=function(){
        goods.openMask('order');
    };
    goods.openMask=function(obj){
        $('.mall_bottom,.nav_left,.mall_right').css({'position':'absolute'});
        $('.mall_content').addClass('blur');
        $('.'+obj).show();
    };
    //打开筛选、排序遮罩层结束
    //关闭排序，筛选遮罩层
    goods.closeMask=function(){
        $('.classify,.order').hide();
        $('.mall_bottom,.nav_left,.mall_right').css({'position':'fixed'});
        $('.mall_content').removeClass('blur');
    };
    //关闭排序，筛选遮罩层结束
    //物品排序功能开始
    goods.classifyF='';
    goods.classifyName='排序';
    goods.orderName='';
    goods.changeOrder=function(value,name){
        goods.orderName=value;
        goods.classifyName=name;
        if(value!=''){
            goods.goodsLists=orderBy(goods.goodsLists,value,false);
        }
        goods.closeMask();
        goods.goodsList=[];
        a=8;
        goods.addImgNew();
    };
    //物品排序功能结束
    //物品分类功能开始
    goods.filterName='分类';
    var t;
    goods.changeFilter=function(value,name){
        if(value=='all'){
            t=(goods.goodsAllList.filter(function(item, index, array){
                return item;
            }));
        }else if(value=='life'){
            t=(goods.goodsAllList.filter(function(item, index, array){
                return item.type=='1';
            }));
        }else if(value=='tool'){
            t=(goods.goodsAllList.filter(function(item, index, array){
                return item.type=='2';
            }));
        }else if(value=='new'){
            t=(goods.goodsAllList.filter(function(item, index, array){
                var newD='2015-09-06';   //判断最新时间划线
                return  new Date(item.date).getTime()>=new Date(newD).getTime();
            }));
        }else if(value=='change'){
            t=(goods.goodsAllList.filter(function(item, index, array){
                return Number(item.point)>5000;
            }));
        }
        goods.filterName=name;
        if(goods.orderName!=''){
            goods.goodsLists=orderBy(t,goods.orderName,false);
        }else{
            goods.goodsLists=t;
        }
        a=8;
        goods.goodsList=[];
        goods.addImgNew();
        goods.closeMask();
    };
    //物品分类功能开始结束
    //切换商品视图
    goods.isBig=true;
    goods.isBCurrent='';
    goods.isSCurrent='_';
    //切换商品视图结束
    window.onscroll=function(){
        var bheight = document.documentElement.clientHeight;
        var sheight = document.body.scrollHeight || document.documentElement.scrollHeight;
        var stop = document.body.scrollTop || document.documentElement.scrollTop;
        if(sheight-stop<=bheight+200){//当滚动条到顶部的距离等于滚动条高度减去窗口高度时
            goods.addImg();
        }
    };
    //搜索框显示
    var nowTop=0;
    goods.searchShow=function(){
        nowTop = document.body.scrollTop;
        var oMask=document.getElementsByClassName('mall_mask')[0];
        var oSearchBox=document.getElementsByClassName('mall_search')[0];
        goods.filterName='分类';
        $('.mall_content').css('top',-1*nowTop);
        $('.mall_content').css('position','fixed');
        $('.mall_mask,.mall_search').show();
        startMove(oMask,{opacity:60},200,'linear',function(){
            startMove(oSearchBox,{top:0},200,'linear',function(){
                $('.search_input').focus();
            });
        });
    }
    //搜索框显示结束
    //搜索框消失
    goods.searchHide=function(){
        var oMask=document.getElementsByClassName('mall_mask')[0];
        var oSearchBox=document.getElementsByClassName('mall_search')[0];
        var oHtml=document.getElementsByTagName('html')[0];
        var hRem=parseInt(oHtml.style.fontSize);
        startMove(oSearchBox,{top:-6*hRem},10,'linear');
        startMove(oMask,{opacity:0},200,'easeOut',function(){
            $('.mall_mask,.mall_search').hide();
        });
        $('.mall_content').css('top','0');
        $('.mall_content').css('position','absolute');
        $(window).scrollTop(nowTop);
    }
    //搜索框消失结束
    //清除搜索框内容
    goods.clearSearch=function(){
        goods.searchG='';
        $('.search_input').focus();
    }
    //清除搜索框内容结束
    //搜索商品
    goods.searchGoods=function(){
        if(goods.searchG==undefined||goods.searchG.trim()==''||goods.searchG==='请输入商品名称'){
            goods.searchG='请输入商品名称';
            $('.search_input').focus();
        }else{
            t=(goods.goodsAllList.filter(function(item, index, array){
                return item.name.match(goods.searchG)!=null;
            }));
            if(goods.orderName!=''){
                goods.goodsLists=orderBy(t,goods.orderName,false);
            }else{
                goods.goodsLists=t;
            }
            a=8;
            goods.goodsList=[];
            goods.addImgNew();
            goods.searchHide();
        }
    }
    //搜索商品结束
    $scope.goods=goods;
}]);