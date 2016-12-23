/**
 * Created by xiechen on 2016/3/30.
 */
r5e.controller('verifyCtrl',['$scope','$interval', function ($scope,$interval) {
    var v={};
    $scope.v=v;
    v.tt='获取';
    v.paraevent = true;
    v.timedMsg = function () {
        t();
    };
    function t() {
        if( v.paraevent) {
            v.c = 60;
            v.timedMsg=undefined;
            v.timer = $interval(function () {
                v.c--;
                v.tt = v.c + '秒后重发';
                v.paraevent=false;
                if (v.c <= 0) {
                    $interval.cancel(v.timer);
                    v.tt = '重新发送';
                    v.paraevent=true;
                    v.timedMsg=t;
                }
            }, 1000,1000);
        };
    };
}]);