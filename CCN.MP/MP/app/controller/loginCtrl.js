app.controller('loginCtrl', ['$scope', 'instance', 'windowService', '$location', 'httpService', '$http','$timeout', function ($scope, instance, windowService, $location, httpService, $http,$timeout) {
    var login={
        carName:'爱车品牌',
        selectShow:false,   //是否点击选择按钮
        formChange:false,     //表单变色的开关
        carChange:false,         //变成车的开关
        transCar:false,      //移动车和表单
        transSelect:false,  //移动列表
        blurShow:false,     //选择框模糊
        formBlur:false,   //表单模糊
        otherCar:'',         //输入其他车品牌
        blurTimer:'',          //选择框模糊效果定时器
        carList:['奥迪','奔驰','宝马','大众/斯柯达','别克/雪佛兰/凯迪拉克']
    };
    $('body')[0].ontouchmove = function (ev) {
        ev.preventDefault();
    };
    login.sShow=function(){
        login.selectShow=true;
        login.formBlur=true;
        $timeout(function(){
            login.formChange=true;
            $timeout(function(){
                login.carChange=true;
                $timeout(function(){
                    login.transCar=true;
                    login.blurTimer=$timeout(function(){
                        login.transSelect=true;
                        login.blurTimer=$timeout(function(){
                            login.blurShow=true;
                        },592);
                    },630);
                },500);
            },300);
        },50);
    };
    login.sHide=function(c){
        if(c.trim()!=''){
            login.carName=c;
            $timeout.cancel(login.blurTimer);
            login.blurShow=false;
            $timeout(function(){
                login.transSelect=false;
                $timeout(function(){
                    login.transCar=false;
                    $timeout(function(){
                        login.carChange=false;
                        $timeout(function(){
                            login.formChange=false;
                            login.formBlur=false;
                            $timeout(function(){
                                login.selectShow=false;
                            },400);
                        },50);
                    },500);
                },300);
            },50);
        }else{
            $('#selec_other').focus();
        }
    };
    $scope.login = login;
} ]);