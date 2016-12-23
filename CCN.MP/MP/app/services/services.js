var services = angular.module('ShellWT.services', ['ngResource']);
/**
* 提交后台获取数据的服务
**/
services.factory('httpService', ['$resource', '$http', '$q', '$templateCache',
		function ($resource, $http, $q, $templateCache) {
		    return {
		        setting: function (url, jsonData) {
		            var deferred = $q.defer();
		            var data = '';
		            method = (url.indexOf('http') > -1) ? 'JSONP' : 'POST';
		            angular.forEach(jsonData, function (val, key) {
		                data += key + '=' + val + '&';
		            });
		            $http({
		                method: method,
		                url: url,
		                cache: $templateCache,
		                data: data,
		                headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
		            }).success(function (data, status, headers, config) {
		                deferred.resolve(data, status, headers, config);
		            }).error(function (data, status, headers, config) {
		                deferred.reject("network error");
		            });
		            return deferred.promise;
		        }
		    };
		} ]);


/**
*发送验证码专用服务
**/
services.factory('SendMobileCodeService', ['httpService', '$q', function (httpService, $q) {
    return {
        send: function (mobile, storid) {
            var deferred = $q.defer();
            httpService.setting('../../server/Helix.ashx', { "mobile": mobile, "action": "0", "storid": storid }).then(function (data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            });
            return deferred.promise;
        },
        check: function (mobile, verify) {
            var deferred = $q.defer();
            httpService.setting('../../server/Helix.ashx', { "mobile": mobile, "mobilecode": verify }).then(function (data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            });
            return deferred.promise;
        }
    };
} ]);

/*
*中间桥梁服务，方便同级controller之间通信
*/
services.factory('instance', [function () {
    return {};
} ]);

/*
*表单初始化服务
*/
services.factory('formInitialize', [function () {
    return {
        Initialize: function () {
            angular.element(document).Action({ isOneByOne: true });
        }
    };
} ]);

/*
辅助服务
*/
services.factory('windowService', ['$location', function ($location) {
    return {
        alert: function (content) {
            functionHelper.alert(angular.element("#modalTip"), content);
        },
        queryString: function (key) {
            return functionHelper.GetQueryString(key);
        },
        IsIntrusion: function () {
            try {
                var md5_ = angular.uppercase(this.queryString('md5'));
                var url = $location.absUrl();
                url = url.substring(0, url.lastIndexOf('&'));
                return (md5_ != angular.uppercase($.md5(url)));
            } catch (e) {
                return false;
            }
        },
        InitializeObj: function (obj) {
            for (var p in obj) {
                if (Object.prototype.toString.call(obj[p]) === "[object Array]") {
                    obj[p] = [];
                }

                if (Object.prototype.toString.call(obj[p]) === "[object Boolean]") {
                    obj[p] = false;
                }

                if (Object.prototype.toString.call(obj[p]) === "[object Number]") {
                    obj[p] = 0;
                }
                if (Object.prototype.toString.call(obj[p]) === "[object Object]") {
                    obj[p] = {};
                }
                if (Object.prototype.toString.call(obj[p]) === "[object RegExp]") {
                    obj[p] = /^&/;
                }
                if (Object.prototype.toString.call(obj[p]) === "[object String]") {
                    obj[p] = '';
                }
                if (Object.prototype.toString.call(obj[p]) === "[object Undefined]") {
                    obj[p] = undefined;
                }

                if (Object.prototype.toString.call(obj[p]) === "[object Null]") {
                    obj[p] = null;
                }

                if (Object.prototype.toString.call(obj[p]) === "[object Function]") {
                    obj[p] = null;
                }
            }
            return obj;
        },
        __getClass: function (object) {
            return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
        },
        closeWindow: function () {
            if (confirm('是否要关闭微信浏览器？')) {
                try {
                    WeixinJSBridge.call('closeWindow');
                } catch (e) {
                    console.error('不是微信浏览器！');
                }
            }
        },
        isWeChat: function () {
            try {
                var ua = window.navigator.userAgent.toLowerCase();
                if (ua.match(/micromessenger/i) == 'micromessenger') {
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                return false;
            }
        },
        trim: function (str) {
            return str.replace(/(^\s*)|(\s*$)/g, "");
        },
        encode: function (o) {
            return functionHelper.encode(o);
        },
        decode: function (o) {
            return functionHelper.decode(o);
        }
    }
} ]);