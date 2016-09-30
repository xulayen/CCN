var app = angular.module('CCN.Angular.Page', ['ngRoute', 'CCN.Angular.Page.services', 'CCN.Angular.Page.pagination']);
app.controller('mainController', ['$scope', 'formInitialize', 'httpService', function ($scope, formInitialize, httpService) {
    // 配置分页基本参数
    $scope.paginationConf = {
        currentPage: 1,
        itemsPerPage: 5,
        perPageOptions: [5, 20, 50]
    };


    $scope.Data = [
        {"id": "1", "name": "刘备", "age": "52", "role": "0"},
        {"id": "2", "name": "关于", "age": "22", "role": "0"},
        {"id": "3", "name": "张飞", "age": "25", "role": "0"},
        {"id": "4", "name": "赵云", "age": "24", "role": "0"},
        {"id": "5", "name": "魏延", "age": "26", "role": "0"},
        {"id": "6", "name": "董卓", "age": "28", "role": "0"},
        {"id": "7", "name": "吕布", "age": "30", "role": "0"},
        {"id": "8", "name": "貂蝉", "age": "31", "role": "0"},
        {"id": "9", "name": "西施", "age": "32", "role": "0"},
        {"id": "10", "name": "庞统", "age": "33", "role": "0"},
        {"id": "11", "name": "诸葛亮", "age": "34", "role": "0"},
        {"id": "12", "name": "黄忠", "age": "35", "role": "0"},
        {"id": "13", "name": "司马懿", "age": "36", "role": "0"},
        {"id": "14", "name": "龙骑士", "age": "25", "role": "1"},
        {"id": "15", "name": "神灵武士", "age": "25", "role": "1"}
    ];


    /***************************************************
     * 当页码和页面记录数发生变化时监控后台查询
     * 如果把currentPage和itemsPerPage分开监控的话则会触发两次后台事件。
     **************************************************/
    $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', function () {
        var postData = {
            current: $scope.paginationConf.currentPage,
            count: $scope.paginationConf.itemsPerPage
        };
        var paging = new Paging("paging", $scope.Data, postData);
        $scope.paginationConf.totalItems =  $scope.Data.length;
        $scope.items = paging.currentData();
        //httpService.setting('server/queryLog.ashx', postData).then(
        //       function (data, status, headers, config) {
        //           $scope.paginationConf.totalItems = data.count;
        //           console.log(data)
        //           $scope.items = data.rows;
        //       });
    });

    $scope.t = 1000;

}]);


