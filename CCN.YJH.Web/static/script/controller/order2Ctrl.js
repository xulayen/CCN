app.controller('orderCtrl', ['$scope', '$location', '$timeout', 'httpService', function ($scope, $location, $timeout, httpService) {
    var url = url_config.url;
    var order = {
        goodList: goodsAll
    };
    order.init = function () {
        getMyOrders();
        loadAdr();
    } ();

    function getMyOrders() {
        var data = {
            'action': '6',
            'userid': 'c786e011d1fb4a5996c7499e7ff28ecc'       //用户id
        };
        httpService.setting(url, data).then(function (data, status, headers, config) {
            var message = data.message;
            if (data.state == 0) {
                order.orderList = JSON.parse(data.data);
                for (var i in order.orderList) {
                    for (var j in order.goodList) {
                        var o = order.orderList[i];
                        var g = order.goodList[j];
                        if (g.id === o.GIFTID) {
                            o.giftname = g.name;
                            o.src = g.l_src;
                        }
                    }
                }
                console.log(order.orderList)
            } else {

            }
        }, function () {

        });
    };


    function loadAdr() {
        var data = {
            'action': '0',
            'userid': 'c786e011d1fb4a5996c7499e7ff28ecc'  //用户id写死
        };

        httpService.setting(url, data).then(function (data, status, headers, config) {
            var message = data.message;
            if (data.state == 0) {
                order.addrList = JSON.parse(data.data);
            } else {

            }
        }, function () {

        });
    };
    $scope.order = order;
} ]);