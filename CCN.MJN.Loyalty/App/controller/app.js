app.controller('gatherCtrl', ['$scope', 'instance', 'windowService', '$location', 'httpService', '$http', function ($scope, instance, windowService, $location, httpService, $http) {
    $scope.jump = function (routPath) {
        if(routPath ==='QRcode'|| routPath ==='manage'|| routPath ==='changePwd'){
            $location.path(routPath);
        }else{
            $location.path(routPath).replace();
        }
    };
    //页面页脚的切换
    $scope.foot=function(){
        var index=document.getElementsByClassName('foot')[0].innerHTML;
        index=Number(index);
        var lis=document.getElementsByClassName('page_foot')[0].getElementsByTagName('li');
        for(var i=0;i<lis.length;i++){
            if(lis[i].getElementsByClassName('page_foot_info')[0].className.search(/current_info/gi)!==-1&&i!==index){
                lis[i].getElementsByTagName('img')[0].src="../../../static/images/icon/icon"+(i+1)+"_.png";
                lis[i].getElementsByClassName('page_foot_info')[0].className="page_foot_info";
            }
        }
        lis[index].getElementsByTagName('img')[0].src="../../../static/images/icon/icon"+(index+1)+".png";
        lis[index].getElementsByClassName('page_foot_info')[0].className="page_foot_info "+"current_info";
    };
} ]) .config(function ($routeProvider) {
        $routeProvider.
            when('/activity', {
                templateUrl: 'tpl/activity.html',
                controller: 'activityCtrl'
            }).
            when('/scan', {
                templateUrl: 'tpl/scan.html',
                controller: 'scanCtrl'
            }).
            when('/scanMilk', {
                templateUrl: 'tpl/scanMilk.html',
                controller: 'scanMilkCtrl'
            }).
            when('/seek', {
                templateUrl: 'tpl/seek.html',
                controller: 'seekCtrl'
            }).
            when('/store', {
                templateUrl: 'tpl/store.html',
                controller: 'storeCtrl'
            }).
            when('/QRcode', {
                templateUrl: 'tpl/QRcode.html',
                controller: 'QRcodeCtrl'
            }).
            when('/changePwd', {
                templateUrl: 'tpl/changePwd.html',
                controller: 'changePwdCtrl'
            }).
            when('/manage', {
                templateUrl: 'tpl/manage.html',
                controller: 'manageCtrl'
            }).
            otherwise({
                redirectTo: '/activity'
            })
    });
