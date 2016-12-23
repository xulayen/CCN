/**
* Angularjs环境下分页
* name: tm.pagination
* Version: 1.0.0
*/
angular.module('ShellWT.pagination', []).directive('tmPagination', [function () {
    return {
        restrict: 'EA',
        template: '<div class="page-list">' +
        '<ul class="pagination" ng-show="conf.totalItems > 0">' +
        '<li ng-class="{disabled: conf.currentPage == 1}" ng-click="prevPage()"><span>&laquo;</span></li>' +
        '<li ng-repeat="item in pageList track by $index" ng-class="{active: item == conf.currentPage, separate: item == \'...\'}" ' +
        'ng-click="changeCurrentPage(item)">' +
        '<span>{{ item }}</span>' +
        '</li>' +
        '<li ng-class="{disabled: conf.currentPage == conf.numberOfPages}" ng-click="nextPage()"><span>&raquo;</span></li>' +
        '</ul>' +
        '<div class="page-total" ng-show="conf.totalItems > 0">' +
        '第<input type="text" ng-model="jumpPageNum"  ng-keyup="jumpToPage($event)"/>页 ' +
        '每页<select ng-model="conf.itemsPerPage" ng-options="option for option in conf.perPageOptions " ng-change="changeItemsPerPage()"></select>' +
        '/共<strong>{{ conf.totalItems }}</strong>条' +
        '</div>' +
        '<div class="no-items" ng-show="conf.totalItems <= 0">暂无数据</div>' +
        '</div>',
        replace: true,
        scope: {
            conf: '='
        },
        link: function (scope, element, attrs) {
            // 变更当前页
            scope.changeCurrentPage = function (item) {
                if (item == '...') {
                    return;
                } else {
                    scope.conf.currentPage = item;
                }
            };
            // 定义分页的长度必须为奇数 (default:9)
            scope.conf.pagesLength = parseInt(scope.conf.pagesLength) ? parseInt(scope.conf.pagesLength) : 9;
            if (scope.conf.pagesLength % 2 === 0) {
                // 如果不是奇数的时候处理一下
                scope.conf.pagesLength = scope.conf.pagesLength - 1;
            }

            // conf.erPageOptions
            if (!scope.conf.perPageOptions) {
                scope.conf.perPageOptions = [10, 15, 20, 30, 50];
            }

            // pageList数组
            function getPagination() {
                // conf.currentPage
                scope.conf.currentPage = parseInt(scope.conf.currentPage) ? parseInt(scope.conf.currentPage) : 1;
                // conf.totalItems
                scope.conf.totalItems = parseInt(scope.conf.totalItems);

                // conf.itemsPerPage (default:15)
                // 先判断一下本地存储中有没有这个值
                if (scope.conf.rememberPerPage) {
                    if (!parseInt(localStorage[scope.conf.rememberPerPage])) {
                        localStorage[scope.conf.rememberPerPage] = parseInt(scope.conf.itemsPerPage) ? parseInt(scope.conf.itemsPerPage) : 15;
                    }

                    scope.conf.itemsPerPage = parseInt(localStorage[scope.conf.rememberPerPage]);


                } else {
                    scope.conf.itemsPerPage = parseInt(scope.conf.itemsPerPage) ? parseInt(scope.conf.itemsPerPage) : 15;
                }

                // numberOfPages
                scope.conf.numberOfPages = Math.ceil(scope.conf.totalItems / scope.conf.itemsPerPage);

                // judge currentPage > scope.numberOfPages
                if (scope.conf.currentPage < 1) {
                    scope.conf.currentPage = 1;
                }

                if (scope.conf.currentPage > scope.conf.numberOfPages) {
                    scope.conf.currentPage = scope.conf.numberOfPages;
                }

                // jumpPageNum
                scope.jumpPageNum = scope.conf.currentPage;

                // 如果itemsPerPage在不在perPageOptions数组中，就把itemsPerPage加入这个数组中
                var perPageOptionsLength = scope.conf.perPageOptions.length;
                // 定义状态
                var perPageOptionsStatus;
                for (var i = 0; i < perPageOptionsLength; i++) {
                    if (scope.conf.perPageOptions[i] == scope.conf.itemsPerPage) {
                        perPageOptionsStatus = true;
                    }
                }
                // 如果itemsPerPage在不在perPageOptions数组中，就把itemsPerPage加入这个数组中
                if (!perPageOptionsStatus) {
                    scope.conf.perPageOptions.push(scope.conf.itemsPerPage);
                }

                // 对选项进行sort
                scope.conf.perPageOptions.sort(function (a, b) {
                    return a - b
                });

                scope.pageList = [];
                if (scope.conf.numberOfPages <= scope.conf.pagesLength) {
                    // 判断总页数如果小于等于分页的长度，若小于则直接显示
                    for (i = 1; i <= scope.conf.numberOfPages; i++) {
                        scope.pageList.push(i);
                    }
                } else {
                    // 总页数大于分页长度（此时分为三种情况：1.左边没有...2.右边没有...3.左右都有...）
                    // 计算中心偏移量
                    var offset = (scope.conf.pagesLength - 1) / 2;
                    if (scope.conf.currentPage <= offset) {
                        // 左边没有...
                        for (i = 1; i <= offset + 1; i++) {
                            scope.pageList.push(i);
                        }
                        scope.pageList.push('...');
                        scope.pageList.push(scope.conf.numberOfPages);
                    } else if (scope.conf.currentPage > scope.conf.numberOfPages - offset) {
                        scope.pageList.push(1);
                        scope.pageList.push('...');
                        for (i = offset + 1; i >= 1; i--) {
                            scope.pageList.push(scope.conf.numberOfPages - i);
                        }
                        scope.pageList.push(scope.conf.numberOfPages);
                    } else {
                        // 最后一种情况，两边都有...
                        scope.pageList.push(1);
                        scope.pageList.push('...');

                        for (i = Math.ceil(offset / 2); i >= 1; i--) {
                            scope.pageList.push(scope.conf.currentPage - i);
                        }
                        scope.pageList.push(scope.conf.currentPage);
                        for (i = 1; i <= offset / 2; i++) {
                            scope.pageList.push(scope.conf.currentPage + i);
                        }

                        scope.pageList.push('...');
                        scope.pageList.push(scope.conf.numberOfPages);
                    }
                }

                if (scope.conf.onChange) {
                    scope.conf.onChange();
                }
                scope.$parent.conf = scope.conf;
            }

            // prevPage
            scope.prevPage = function () {
                if (scope.conf.currentPage > 1) {
                    scope.conf.currentPage -= 1;
                }
            };
            // nextPage
            scope.nextPage = function () {
                if (scope.conf.currentPage < scope.conf.numberOfPages) {
                    scope.conf.currentPage += 1;
                }
            };

            // 跳转页
            scope.jumpToPage = function () {
                scope.jumpPageNum = scope.jumpPageNum.replace(/[^0-9]/g, '');
                if (scope.jumpPageNum !== '') {
                    scope.conf.currentPage = scope.jumpPageNum;
                }
            };

            // 修改每页显示的条数
            scope.changeItemsPerPage = function () {
                // 清除本地存储的值方便重新设置
                if (scope.conf.rememberPerPage) {
                    localStorage.removeItem(scope.conf.rememberPerPage);
                }
            };

            scope.$watch(function () {
                var newValue = scope.conf.currentPage + ' ' + scope.conf.totalItems + ' ';
                // 如果直接watch perPage变化的时候，因为记住功能的原因，所以一开始可能调用两次。
                //所以用了如下方式处理
                if (scope.conf.rememberPerPage) {
                    // 由于记住的时候需要特别处理一下，不然可能造成反复请求
                    // 之所以不监控localStorage[scope.conf.rememberPerPage]是因为在删除的时候会undefind
                    // 然后又一次请求
                    if (localStorage[scope.conf.rememberPerPage]) {
                        newValue += localStorage[scope.conf.rememberPerPage];
                    } else {
                        newValue += scope.conf.itemsPerPage;
                    }
                } else {
                    newValue += scope.conf.itemsPerPage;
                }
                return newValue;

            }, getPagination);

        }
    };
} ])
;






/*弹窗选择门店 sel_end sel_ing*/
angular.module('ShellHelixHX.PopUpsChooseStore', []).directive('popUps', ['httpService', 'formInitialize', 'instance', '$location', function (httpService, formInitialize, instance, $location) {
    return {
        restrict: 'EA',
        template: '<div class="store_wrap">' +
                '<span class="panel_close" onclick="hideMask();"></span>' +
                '<div class="pop_panel">' +
                '<div class="pop_head">' +
                '门店详情</div>' +
                '<div class="store_body">' +
                '<form action="#" method="post">' +
                '<ul class="sel_name">' +
                '<li class="sel_no" ng-class="{sel_ing:pcc.pselecting,sel_end:pcc.pselected}" ng-click="pcc.getP()"  ng-bind="pcc.pname"></li>' +
                '<li class="sel_no" ng-class="{sel_ing:pcc.cselecting,sel_end:pcc.cselected}" ng-click="pcc.getC()" ng-bind="pcc.cname"></li>' +
                '<li class="sel_no" ng-class="{sel_ing:pcc.sselecting,sel_end:pcc.sselected}" ng-click="pcc.getS()" ng-bind="pcc.sname"></li>' +
                '</ul>' +
                '<div class="sel_notice">' +
                '<h3 class="sel_title">' +
                '请选择</h3>' +
                '</div>' +
                '<ul class="sel_city_list">' +
                '<li ng-repeat="t in pcc.plist" ng-click="pcc.selectPItem(t)" ng-bind="t.NAME"></li>' +
                '</ul>' +
                '<ul class="sel_city_list">' +
                '<li ng-repeat="t in pcc.clist" ng-click="pcc.selectCItem(t)" ng-bind="t.NAME"></li>' +
                '</ul>' +
                '<ul class="sel_store_list">' +
                '<li ng-repeat="t in pcc.slist" ng-click="pcc.selectSItem(t)" ng-bind="t.NAME"></li>' +
                '</ul>' +
                '<ul class="store_result" ng-class="{hide:!pcc.currentStore}">' +
                '<li style="display:none;">门店编码：<span ng-bind="pcc.currentStore.ID"></span></li>' +
                '<li>门店名称：<span ng-bind="pcc.currentStore.NAME"></span></li>' +
                '<li>门店地址：<span ng-bind="pcc.currentStore.ADDRESS"></span></li>' +
                '</ul>' +
                '</form>' +
                '</div>' +
                '</div>' +
                '</div>',
        replace: true,
        scope: {
            rightNow: '='
        },
        link: function (scope, element, attrs) {
            var pcc = {
                pname: '选择城市',
                cname: '选择区域',
                sname: '选择门店',
                pselecting: false,
                pselected: false,

                cselecting: false,
                cselected: false,

                sselecting: false,
                sselected: false,
                currentStore: null
            };
            scope.pcc = pcc;

            pcc.getP = function myfunction() {
                pcc.plist = pcc.clist = pcc.slist = pcc.currentStore = null;
                var d = { action: "6" };
                pcc.pname = '选择城市';
                pcc.cname = '选择区域';
                pcc.sname = '选择门店';
                pcc.pid = null;
                pcc.pselecting = false;
                pcc.pselected = false;
                pcc.cselecting = false;
                pcc.cselected = false;
                pcc.sselecting = false;
                pcc.sselected = false;
                httpService.setting('../../server/Helix.ashx', d).then(function (data, status, headers, config) {
                    pcc.plist = JSON.parse(data.data).Result;
                    pcc.pselecting = true;
                }, function (reason) {
                    alert(reason);
                });
            };
            pcc.selectPItem = function (p) {
                pcc.pname = p.NAME;
                pcc.pid = p.ID;
                pcc.pselected = true;
            };



            pcc.getC = function myfunction() {
                if (pcc.pid) {
                    pcc.plist = pcc.clist = pcc.slist = pcc.currentStore = null;
                    var d = { action: "6", pname: pcc.pname };
                    pcc.cname = '选择区域';
                    pcc.sname = '选择门店';
                    pcc.cselecting = false;
                    pcc.cselected = false;
                    pcc.sselecting = false;
                    pcc.sselected = false;

                    httpService.setting('../../server/Helix.ashx', d).then(function (data, status, headers, config) {
                        pcc.clist = JSON.parse(data.data).Result;
                        pcc.cselecting = true;
                    }, function (reason) {
                        alert(reason);
                    });
                }
            };
            pcc.selectCItem = function (c) {
                pcc.cname = c.NAME;
                pcc.cid = c.ID;
                pcc.cselected = true;



            };



            pcc.getS = function myfunction() {
                if (pcc.pname != '选择城市' && pcc.cname != '选择区域') {
                    pcc.plist = pcc.clist = pcc.slist = pcc.currentStore = null;
                    pcc.sname = '选择门店';
                    pcc.sselecting = false;
                    pcc.sselected = false;
                    var d = { action: "7", pname: pcc.pname, cname: pcc.cname };
                    console.log(d);

                    httpService.setting('../../server/Helix.ashx', d).then(function (data, status, headers, config) {
                        pcc.slist = JSON.parse(data.data).Result;
                        pcc.sselecting = true;

                    }, function (reason) {
                        alert(reason);
                    });
                }
            };
            pcc.selectSItem = function (s) {
                pcc.sname = s.NAME;
                pcc.sid = s.ID;
                pcc.sselected = true;
                pcc.slist = null;
                pcc.currentStore = s;
            };



        }
    }
} ]).directive('popUps2', ['httpService', 'formInitialize', 'instance', '$location', function (httpService, formInitialize, instance, $location) {
    return {
        restrict: 'EA',
        template:
                '<div class="">' +
                '<ul class="sel_name">' +
                '<li class="sel_no" ng-class="{sel_ing:pcc.pselecting,sel_end:pcc.pselected}" ng-click="pcc.getP()"  ng-bind="pcc.pname" onclick="showOptionMask()"></li>' +
                '<li class="sel_no" ng-class="{sel_ing:pcc.cselecting,sel_end:pcc.cselected}" ng-click="pcc.getC()" ng-bind="pcc.cname" onclick="showOptionMask()"></li>' +
                '<li class="sel_no" ng-class="{sel_ing:pcc.sselecting,sel_end:pcc.sselected}" ng-click="pcc.getS()" ng-bind="pcc.sname" onclick="showOptionMask()"></li>' +
                '</ul>' +
                '<ul class="gift_result" ng-class="{hide:!pcc.currentStore}">' +
                '<li style="display:none;">门店编码：<span ng-bind="pcc.currentStore.ID"></span></li>' +
                '<li>门店名称：<span ng-bind="pcc.currentStore.NAME"></span></li>' +
                '<li>门店地址：<span ng-bind="pcc.currentStore.ADDRESS"></span></li>' +
                '</ul>' +
                '    <!-- 遮罩层黑背景-->' +
                '<div class="mask" onclick="hideMask()">' +
                '</div>' +
                '    <!-- 选择省份弹窗-->' +
                '<div class="option_wrap">' +
                '<span class="panel_close" onclick="hideMask();"></span>' +
                '<div class="pop_panel">' +
                '<div class="pop_head">' +
                ' 请选择</div>' +
                '<div class="option_body">' +
                '<ul class="option_list">' +
                '<li ng-repeat="t in pcc.plist" ng-click="pcc.selectPItem(t)" ng-bind="t.NAME"></li>' +
                '</ul>' +
                '<ul class="option_list">' +
                '<li ng-repeat="t in pcc.clist" ng-click="pcc.selectCItem(t)" ng-bind="t.NAME"></li>' +
                '</ul>' +
                '<ul class="option_list">' +
                '<li ng-repeat="t in pcc.slist" ng-click="pcc.selectSItem(t)" ng-bind="t.NAME"></li>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>',
        replace: true,
        scope: {
            rightNow: '='
        },
        link: function (scope, element, attrs) {
            var pcc = {
                pname: '选择城市',
                cname: '选择区域',
                sname: '选择门店',
                pselecting: false,
                pselected: false,

                cselecting: false,
                cselected: false,

                sselecting: false,
                sselected: false,
                currentStore: null
            };
            scope.pcc = pcc;

            pcc.getP = function myfunction() {
                pcc.plist = pcc.clist = pcc.slist = pcc.currentStore = null;
                instance.reserveStoreid = null;
                var d = { action: "6" };
                pcc.pname = '选择城市';
                pcc.cname = '选择区域';
                pcc.sname = '选择门店';
                pcc.pid = null;
                pcc.pselecting = false;
                pcc.pselected = false;
                pcc.cselecting = false;
                pcc.cselected = false;
                pcc.sselecting = false;
                pcc.sselected = false;
                httpService.setting('../../server/Helix.ashx', d).then(function (data, status, headers, config) {
                    pcc.plist = JSON.parse(data.data).Result;
                    pcc.pselecting = true;
                }, function (reason) {
                    alert(reason);
                });
            };
            pcc.selectPItem = function (p) {
                pcc.pname = p.NAME;
                pcc.pid = p.ID;
                pcc.pselected = true;
                hideMask();
            };



            pcc.getC = function myfunction() {
                if (pcc.pid) {
                    instance.reserveStoreid = null;
                    pcc.plist = pcc.clist = pcc.slist = pcc.currentStore = null;
                    var d = { action: "6", pname: pcc.pname };
                    pcc.cname = '选择区域';
                    pcc.sname = '选择门店';
                    pcc.cselecting = false;
                    pcc.cselected = false;
                    pcc.sselecting = false;
                    pcc.sselected = false;

                    httpService.setting('../../server/Helix.ashx', d).then(function (data, status, headers, config) {
                        pcc.clist = JSON.parse(data.data).Result;
                        pcc.cselecting = true;
                    }, function (reason) {
                        alert(reason);
                    });
                }
            };
            pcc.selectCItem = function (c) {
                pcc.cname = c.NAME;
                pcc.cid = c.ID;
                pcc.cselected = true;
                hideMask();


            };



            pcc.getS = function myfunction() {
                if (pcc.pname != '选择城市' && pcc.cname != '选择区域') {
                    instance.reserveStoreid = null;
                    pcc.plist = pcc.clist = pcc.slist = pcc.currentStore = null;
                    pcc.sname = '选择门店';
                    pcc.sselecting = false;
                    pcc.sselected = false;
                    var d = { action: "7", pname: pcc.pname, cname: pcc.cname };
                    console.log(d);

                    httpService.setting('../../server/Helix.ashx', d).then(function (data, status, headers, config) {
                        pcc.slist = JSON.parse(data.data).Result;
                        pcc.sselecting = true;

                    }, function (reason) {
                        alert(reason);
                    });
                }
            };
            pcc.selectSItem = function (s) {
                pcc.sname = s.NAME;
                pcc.sid = s.ID;
                pcc.sselected = true;
                hideMask();
                pcc.currentStore = s;
                instance.reserveStoreid = s.ID;
                pcc.slist = null;
                console.log(instance.reserveStoreid);
            };



        }
    }
} ]).directive('viderFrame', ['httpService', 'formInitialize', 'instance', '$location', function (httpService, formInitialize, instance, $location) {
    return {//http://v.qq.com/iframe/player.html?vid=j0306qgwjhn&tiny=0&auto=0
        restrict: 'EA',
        template:
        '<iframe id="viderFrame" frameborder="0" width="100%" height="100%" src="http://player.youku.com/embed/XMTYxNjk0MzA4MA" allowfullscreen ></iframe>',
        replace: true,
        scope: {
            rightNow: '='
        },
        link: function () {

        }
    }
} ]);



/*弹窗活动规则*/
angular.module('ShellHelixHX.ActiveRule', []).directive('activeRule', ['httpService', 'formInitialize', 'instance', '$location', function (httpService, formInitialize, instance, $location) {
    return {
        restrict: 'EA',
        template: '<div class="active_wrap">' +
                    '<div class="pop_panel active_panel">' +
                    '<div class="pop_head">' +
                    '活动规则</div>' +
                    '<div class="active_body">' +
                    '<h3>' +
                    '一、活动时间</h3>' +
                    '<p>' +
                    '即日起至2016年9月</p>' +
                    '<h3>' +
                    '二、活动咨询</h3>' +
                    '<p>' +
                    '咨询热线：021-26095506</p>' +
                    '<p>' +
                    '工作时间：周一至周日9:00—21:00</p>' +
                    '<h3>' +
                    '三、活动声明及注意事项</h3>' +
                    '<ol>' +
                    '<li>1、活动主办方：壳牌（中国）有限公司。</li>' +
                    '<li>2、凡自愿参与本活动的，即视为同意本活动规则所述的各项规定，并同意注册手机接收来自壳牌喜力的活动提醒、优惠及其他相关讯息。</li>' +
                    '<li>3、活动时间以主办方网络服务器时间为准。</li>' +
                    '<li>4、前往壳牌喜力指定门店内购买才可参与本次活动，咨询活动服务热线或查看门店列表了解可参与门店。</li>' +
                    '<li>5、本次活动仅限购买壳牌4升装喜力超凡、HX8产品的用户，填写正确完整的个人手机号码（限中国大陆地区移动、联通、电信运营商），验证通过后即可参与活动，每位用户仅有一次活动参与机会。</li>' +
                    '<li>6、壳牌4升装喜力超凡、HX8产品标签内的防伪码具有唯一性，每个防伪码在活动期间只能领取一次奖品。如一个防伪码参与活动且领取过奖品后，再次参与活动均视为无效扫码，将不产生任何有效数据。</li>' +
                    '<li>7、如发现有用户在活动中使用任何不正当的手段（包括但不限于软件作弊、通过系统漏洞、利用黑客工具等）参与活动，活动主办方有权取消其活动参与资格，并有权撤回其所获不当获益，具体认定以主办方判定为准。' +
                    '</li>' +
                    '<li>8、活动过程中，如出现不可抗力或情势变更的情况（包括但不限于重大灾害事件、活动受政府机关指令需要停止举办或调整的、活动遭受严重网络攻击或因系统故障需要暂停举办等），活动主办方可依相关法律法规的规定主张免责。' +
                    '</li>' +
                    '<li>9、活动主办方可以根据本活动的实际举办情况对活动规则进行变动或调整，相关变动或调整将公布在活动页面上，并于公布时即时生效。</li>' +
                    '</ol>' +
                    '<div class="copyright">' +
                    '本次活动最终解释权归壳牌（中国）有限公司所有</div>' +
                    '</div>' +
                    '</div>' +
                    '<button type="button" onclick="hideMask();" class="active_close">' +
                    '关闭</button>' +
                    '</div>',
        replace: true,
        scope: {
            rightNow: '='
        },
        link: function (scope, element, attrs) {
            var pop = {};
            scope.pop = pop;




        }
    }
} ]);
