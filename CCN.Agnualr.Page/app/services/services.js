var services = angular.module('CCN.Angular.Page.services', ['ngResource']);
/**
* 提交后台获取数据的服务
**/
services.factory('httpService', ['$resource', '$http', '$q',
		function ($resource, $http, $q) {
		    return {
		        setting: function (url, jsonData) {
		            var deferred = $q.defer();
		            var data = '';
		            angular.forEach(jsonData, function (val, key) {
		                data += key + '=' + val + '&';
		            });
		            $http({
		                method: 'POST',
		                url: url,
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
        send: function (mobile) {
            var deferred = $q.defer();
            httpService.setting('../../../ajax/GetMobileCode.ashx', { "mobile": mobile, "action": "MobileVerifyCode" }).then(function (data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            });
            return deferred.promise;
        },
        check: function (mobile, verify) {
            var deferred = $q.defer();
            httpService.setting('../../../ajax/VerififyMobileCode.ashx', { "mobile": mobile, "mobilecode": verify }).then(function (data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            });
            return deferred.promise;
        }
    };
} ]);


/**
*用户信息服务
*/
services.factory('UserService', ['httpService', '$q', function (httpService, $q) {
    return {
        user: function (mobile) {
            var deferred = $q.defer();
            httpService.setting('../../../ajax/GetUser.ashx', { "mobile": mobile }).then(function (data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            });
            return deferred.promise;
        },
        login: function (u, p) {
            var deferred = $q.defer();
            httpService.setting('../../../ajax/MemberLogin.ashx', { "uname": u, "pwd": p }).then(function (data, status, headers, config) {
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
            angular.element(document).Action({ errorElement: '.error' });
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
        layer_: function () {
            var t=arguments[0] || 2000;
            layer.msg('加载中', {icon: 16,time:t});
        }


    }
} ]);