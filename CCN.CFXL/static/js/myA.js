var app = angular.module('myApp', ['ngResource']);
app.factory('HttpHelper', ['$http', '$q', function ($http, $q) {
    return {
        getData: function (url, data) {
            var deferred = $q.defer();
            $http({
                url: url,
                method: 'POST'
            }).success(function (data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            }).error(function (data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            });
            return deferred.promise;
        }
    }
}]);
app.controller('myCtrl1', ['$scope', '$http', 'HttpHelper', function ($scope, $http, HttpHelper) {

}]);
app.directive('mySelect', function (HttpHelper) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "city.html",
        link: function (scope, element, attr) {
            pcc = {
                pname: '选择省份',
                cname: '选择城市',
                rname: '选择区域',
                pselecting: false,
                pselected: false,
                cselecting: false,
                cselected: false,
                rselecting: false,
                rselected: false,
                plist: [],
                clist: [],
                rlist: [],
                isPred: [],
                isCred: [],
                isRred: []
            };
            pcc.getP = function () {
                pcc.plist = pcc.clist = pcc.rlist = null;
                pcc.plist = [];
                pcc.pselecting = true;
                pcc.pselected = false;
                pcc.cselecting = false;
                pcc.cselected = false;
                pcc.rselecting = false;
                pcc.rselected = false;
                pcc.pname = '选择省份';
                pcc.cname = '选择城市';
                pcc.rname = '选择区域';
                pcc.isPred = [];
                //HttpHelper.getData('../../static/js/province.js').then(function (data, status, headers, config) {
                //    angular.forEach(data, function (obj, index) {
                //        pcc.plist.push(obj);
                //    });
                //}, function (data, status, headers, config) {
                //    //alert('network error');
                //});
                var data=proData;
                angular.forEach(data, function (obj, index) {
                    pcc.plist.push(obj);
                });
            };
            pcc.selectPItem = function (p, id) {
                pcc.pname = p.ProName;
                pcc.PID = p.ProID;
                pcc.pselecting = false;
                pcc.pselected = true;
                pcc.isPred = [];
                pcc.isPred[id] = "true";
            };


            pcc.getC = function () {
                if (pcc.pname !== "选择省份") {
                    pcc.plist = pcc.clist = pcc.rlist = null;
                    pcc.clist = [];
                    pcc.cselecting = true;
                    pcc.cselected = false;
                    pcc.rselecting = false;
                    pcc.rselected = false;
                    pcc.cname = '选择城市';
                    pcc.rname = '选择区域';
                    pcc.isCred = [];
                    //HttpHelper.getData('../../static/js/city.js').then(function (data, status, headers, config) {
                    //    angular.forEach(data, function (obj, index) {
                    //        if (obj.ProID == pcc.PID) {
                    //            pcc.clist.push(obj);
                    //        }
                    //    });
                    //}, function (data, status, headers, config) {
                    //    //alert('network error');
                    //});
                    var data=cityData;
                    angular.forEach(data, function (obj, index) {
                        if (obj.ProID == pcc.PID) {
                            pcc.clist.push(obj);
                        }
                    });
                }
            };
            pcc.selectCItem = function (c, id) {
                pcc.cname = c.CityName;
                pcc.CID = c.CityID;
                pcc.cselecting = false;
                pcc.cselected = true;
                pcc.isCred = [];
                pcc.isCred[id] = "red";
            };
            pcc.getR = function () {
                if (pcc.pname !== "选择省份" && pcc.cname !== "选择城市") {
                    pcc.plist = pcc.clist = pcc.rlist = null;
                    pcc.rlist = [];
                    pcc.rselecting = true;
                    pcc.rselected = false;
                    pcc.rname = '选择区域';
                    pcc.isRred = [];
                    //HttpHelper.getData('../../static/js/region.js').then(function (data, status, headers, config) {
                    //    angular.forEach(data, function (obj, index) {
                    //        if (obj.CityID == pcc.CID) {
                    //            pcc.rlist.push(obj);
                    //        }
                    //    });
                    //}, function (data, status, headers, config) {
                    //    //alert('network error');
                    //});
                    var data=regionData;
                    angular.forEach(data, function (obj, index) {
                        if (obj.CityID == pcc.CID) {
                            pcc.rlist.push(obj);
                        }
                    });
                }
            };
            pcc.selectRItem = function (r, id) {
                pcc.rname = r.DisName;
                pcc.rselecting = false;
                pcc.rselected = true;
                pcc.isRred = [];
                pcc.isRred[id] = "red";
            };
            scope.pcc = pcc;

        }
    }
});
