app.controller('addressCtrl',['$scope','$location',function($scope,$location){
    address={};
    // //返回前一页面
    address.id=$location.absUrl().slice(-3);
    address.back=function(){
        if(address.id=='ned'){
            main.jumpTo('cart',address.id,true);
        }else{
            main.jumpTo('detail',address.id,true);
        }
    };
    //返回前一页面结束
    //地址修改
    address.modify=function(){
        $('.pop_modify').show();
    };
    //添加地址
    address.add_address=function(){
        $('.pop_add').show();
    };
    //修改后关闭页面
    address.closeModify=function(){
        $('.pop_modify,.pop_add').hide();
    };
    //删除地址
    address.deleteAd=function(){
        var otrash=document.getElementsByClassName('delete_address');
        var oAddress=document.getElementsByClassName('address_list');
        console.log(otrash);
        var ind;      //删除购物车的序号
        for(var i=0;i<otrash.length;i++){
            otrash[i].index=i;
            otrash[i].onclick=function(){
                console.log(this);
                ind=this.index;
                startMove(oAddress[ind],{opacity:0},300,'easeOut',function(){
                    startMove(oAddress[ind],{height:0},300,'easeOut');
                });
            };
        }
    };
    address.deleteAd();
    //删除地址结束
    $scope.address=address;
}]);