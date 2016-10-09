var CCN = function () {
    var ipScript = false; // 是否已经加载了获取ip的js

    /**
     * 获取操作系统
     * @returns {}
     */
    this.getOS = function () {
        var flag = "unknown";
        var agent = navigator.userAgent.toLowerCase();

        var supportOsList = [
            {keyword: "android", regStr: /android [\d.]+/gi},
            {keyword: "iphone os", regStr: /iphone os [\d_]+/gi},
            {keyword: "ipod", regStr: /ipod+/gi},
            {keyword: "ipad", regStr: /ipad+/gi},
            {keyword: "meego", regStr: /meego+/gi},
            {keyword: "windows phone", regStr: /windows phone [\d.]+/gi},
            {keyword: "windows nt", regStr: /windows nt [\d.]+/gi},
            {keyword: "macintosh", regStr: /macintosh+/gi},
            {keyword: "ubuntu", regStr: /ubuntu [\d.]+/gi},
        ];

        $.each(supportOsList, function (i, item) {
            if (agent.indexOf(item.keyword) >= 0) {
                flag = agent.match(item.regStr)[0];
                return false;
            }
            return true;
        });

        return flag;
    };

    /**
     * 获取浏览器信息
     * @returns {}
     */
    this.getBrowser = function () {
        var agent = navigator.userAgent.toLowerCase();
        var browser = "unknown";
        var supportBrowserList = [
            {keyword: "micromessenger", regStr: /micromessenger\/[\d.]+/gi},
            {keyword: "baidubrowser", regStr: /baidubrowser\/[\d.]+/gi},
            {keyword: "ucbrowser", regStr: /ucbrowser\/[\d.]+/gi},
            {keyword: "msie", regStr: /ie [\d.]+/gi},
            {keyword: "trident", regStr: /trident\/[\d.]+/gi},
            {keyword: "firefox", regStr: /firefox\/[\d.]+/gi},
            {keyword: "chrome", regStr: /chrome\/[\d.]+/gi},
            {keyword: "safari", regStr: /safari\/[\d.]+/gi}
        ];

        $.each(supportBrowserList, function (i, item) {
            if (agent.indexOf(item.keyword) >= 0) {
                browser = agent.match(item.regStr)[0];
                return false;
            }
            return true;
        });

        return browser;
    };


    var importBaiduMap = function () {
        var domId = 'baidumap';
        var $dom = document.getElementById(domId);
        if ($dom) { // 不再重复加载
            return;
        }

        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript = document.createElement("script");
        oScript.type = "text/javascript";
        oScript.src = "http://api.map.baidu.com/getscript?v=2.0&ak=h0TUcYNeBhgQEszetmwSHCjwehewx56S";
        oScript.async = false; // 同步
        oScript.id = domId;
        oHead.appendChild(oScript);
    }

    /**
     * 通过百度地图获取地理位置
     * @param {} _cb_success
     * @param {} _cb_error
     * @returns {}
     */
    var getGeoByBaiduMap = function (_cb_success, _cb_error) {
        console.log('getGeoByBaiduMap');
        importBaiduMap();
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                _cb_success({
                    latitude: r.point.lat,
                    longitude: r.point.lng,
                    map: 'baidu'
                });
            } else {
                _cb_error('failed');
            }
        }, {enableHighAccuracy: true});
    }


    /**
     * 获取地理位置
     * @param {} _cb_success  成功回调
     * @param {} _cb_error 失败回调
     * @returns {}
     */
    this.getGeo = function (_cb_success, _cb_error) {
        var nav = window.navigator;
        var error = {code: -1, message: '无法获取当前位置'}
        if (nav != null) {
            var geoloc = nav.geolocation;
            if (geoloc != null) {
                //if (this.getBrowser().indexOf('chrome') >= 0) {// 如果是谷歌浏览器，使用百度定位
                //    getGeoByBaiduMap(_cb_success, _cb_error);
                //    return;
                //}
                //else
                { // 使用原始定位方式
                    geoloc.getCurrentPosition(function (position) {
                        if (position.coords !== undefined) {
                            _cb_success({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                map: 'browser'
                            });
                        }
                        ;
                    }, function (error) {
                        // 定位失败了，用百度再定位一次
                        getGeoByBaiduMap(_cb_success, _cb_error);
                    });
                }

            } else { // 浏览器不支持定位
                _cb_error(error);
            }
        } else {
            _cb_error(error);
        }
    }


    /**
     * 获取IP地址
     * @param {} _cb_success 回调
     * @param {} _cb_error 回调
     * @returns {}
     */
    this.getIp = function (_cb_success, _cb_error) {
        if (ipScript) {
            if (window.returnCitySN !== undefined) {
                _cb_success(window.returnCitySN);
            } else {
                _cb_error('获取IP失败');
            }
        } else {
            $.ajax({
                url: "http://pv.sohu.com/cityjson",
                dataType: "script",
                success: function (res) {
                    ipScript = true;
                    _cb_success(window.returnCitySN);
                },
                error: function () {
                    _cb_error('获取IP失败');
                }
            });
        }
    }


    importBaiduMap();
}