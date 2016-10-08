app.controller('seekCtrl', ['$scope', 'instance', 'windowService', '$location', 'httpService', '$http', function ($scope, instance, windowService, $location, httpService, $http) {
    $scope.foot();
    var calendar = new LCalendar();
    calendar.init({
        'trigger': '#start', //标签id
        'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': new Date().getFullYear() -30+ '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(), //最小日期
        'maxDate': new Date().getFullYear() +10+ '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
    });
    var calendar2 = new LCalendar();
    calendar2.init({
        'trigger': '#end', //标签id
        'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': new Date().getFullYear() -30+ '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(), //最小日期
        'maxDate': new Date().getFullYear() +10+ '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
    });
} ]);