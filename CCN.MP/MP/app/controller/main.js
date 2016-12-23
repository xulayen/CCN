var app = angular.module('ShellWT', ['ngRoute', 'ShellWT.services']);
app.controller('configCtrl', ['$scope', 'instance', 'windowService', '$location', 'httpService', '$http', function ($scope, instance, windowService, $location, httpService, $http) {
    var config = {
        //厂家编号
        facid: '0000',
        clientLog: new Image(), //方便客户端写入错误日志
        uri: windowService.queryString('uri'),
        storage: localStorage,
        result: [
        //默认答复   
            {syscode: '000', message: 'NetWork Error!', show: '网络繁忙', "tip": "", "img": "../../static/images/face-3.png", type: 'Default', flag: "1", "des": "默认答复" },

        //发送验证码

            {syscode: '002', message: '手机号码已经参与过本次活动（不允许参加）', show: '手机号码已经参与过本次活动（不允许参加）', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

            { syscode: '003', message: '参数为空或者值错误', show: '参数为空或者值错误', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

            { syscode: '004', message: 'Dll组件加载失败', show: 'Dll组件加载失败', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

            { syscode: '005', message: '手机格式不正确', show: '手机格式不正确', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

            { syscode: '006', message: '授权帐号密码错误', show: '授权帐号密码错误', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

            { syscode: '007', message: '加油站格式不正确', show: '加油站格式不正确', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

            { syscode: '008', message: 'DLL组件未配置', show: 'DLL组件未配置', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

            { syscode: '009', message: '授权时间不在许可范围之内', show: '授权时间不在许可范围之内', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

            { syscode: '101', message: 'IP地址不在授权范围', show: 'IP地址不在授权范围', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

            { syscode: '105', message: '手机号码格式错误', show: '手机号码格式错误', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

            { syscode: '201', message: '加油站不存在', show: '加油站不存在', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

            { syscode: '10000', message: '发送失败', show: '发送失败', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

            { syscode: '10001', message: '发送成功', show: '发送成功', "tip": "", "img": "", type: 'SendMessages', flag: "1", "des": "发送验证码" },

        //提交表单

            {syscode: '001', message: '手机号码未参与本次活动（允许参加）', show: '手机号码未参与本次活动（允许参加）', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '002', message: '手机号码已经参与过本次活动（不允许参加）', show: '您已参与过本次活动', "tip": "叫上朋友一起来抢好礼吧！", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '003', message: '参数为空或者值错误', show: '参数为空或者值错误', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '004', message: 'Dll组件加载失败', show: 'Dll组件加载失败', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '005', message: '手机格式不正确', show: '手机格式不正确', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '006', message: '授权帐号密码错误', show: '授权帐号密码错误', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '007', message: '加油站格式不正确', show: '加油站格式不正确', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '009', message: '授权时间不在许可范围之内', show: '授权时间不在许可范围之内', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '008', message: 'DLL组件未配置', show: 'DLL组件未配置', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '101', message: 'IP地址不在授权范围', show: 'IP地址不在授权范围', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '105', message: '手机号码格式错误', show: '手机号码格式错误', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '300', message: '加油站不能为空', show: '加油站不能为空', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '301', message: '手机号码不能为空', show: '手机号码不能为空', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '302', message: '手机验证码不能为空', show: '手机验证码不能为空', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },

            { syscode: '304', message: '手机验证码不正确', show: '手机验证码不正确', "tip": "", "img": "", type: 'SubmitForm', flag: "1", "des": "校验表单" },


        //数码抽奖

            {syscode: '118', message: '今天的名额已满喽', show: '今天的名额已满喽', tip: '请保留产品防伪码，明天再来参加吧！客服电话：021-26095506', img: '../../static/images/face-6.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '114', message: '活动未开始', show: '活动暂未开始', tip: '收藏页面，2016年8月3日后再来尝试吧！', img: '../../static/images/face-2.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '115', message: '活动已结束', show: '本次活动已结束', tip: '返回壳牌中国加油站公众号了解更多活动', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '113', message: '产品不在活动参与范围', show: '该产品不参加本活动', tip: '请扫描壳牌4升装超凡中国加油站/HX8产品防伪码', img: '../../static/images/face-4.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '108', message: '数码已经参与过活动', show: '该码已参与过本活动', tip: '如您未领取过礼品请咨询客服电话：021-26095506', img: '../../static/images/face-5.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '123', message: '手机号码已经参与过活动', show: '您已参加过本次活动', tip: '叫上朋友一起抢好礼吧！', img: '../../static/images/face-1.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '003', message: '参数为空或者值错误', show: '您所查询的数码不存在，谨防假冒，如有疑问请拨打咨询热线021-26095506。', tip: '', img: '../../static/images/face-5.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '006', message: '授权帐号密码错误', show: '授权帐号密码错误', tip: '', img: '../../static/images/face-5.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '009', message: '授权时间不在许可范围之内', show: '授权已过期', tip: '', img: '../../static/images/face-5.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '101', message: 'IP地址不在授权范围', show: 'IP地址未授权', tip: '', img: '../../static/images/face-5.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '008', message: '抽奖DLL组件未配置', show: '组件未配置', tip: '', img: '../../static/images/face-5.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '004', message: '抽奖DLL组件加载异常', show: '组件加载异常', tip: '', img: '../../static/images/face-5.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '102', message: '未找到抽奖活动总控', show: '抽奖活动总控未配置', tip: '', img: '../../static/images/face-5.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '103', message: '未找到抽奖活动答复', show: '抽奖活动答复未配置', tip: '', img: '../../static/images/face-5.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '104', message: '数码格式错误', show: '您所查询的数码不存在，谨防假冒，如有疑问请拨打咨询热线021-26095506。', tip: '', img: '../../static/images/face-5.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '105', message: '手机号码/IP格式错误', show: '手机号码/IP格式错误', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '106', message: '加油站编号为空', show: '加油站编号为空', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '107', message: '加油站不在活动参与参与范围', show: '此加油站不参与活动', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '110', message: '数码不存在', show: '您所查询的数码不存在，谨防假冒，如有疑问请拨打咨询热线021-26095506。', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '120', message: '数码已经中过奖', show: '该码已参与过本活动', tip: '如您未领取过礼品请咨询客服电话：021-26095506', img: '../../static/images/face-7.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '121', message: '系统异常（活动和奖项）', show: '现在参与人数很多，网络有点繁忙!', tip: '请稍后……', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '122', message: '系统异常', show: '现在参与人数很多，网络有点繁忙!', tip: '请稍后……', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '124', message: '抽取答复异常', show: '当前参与人数太多，请稍候重试！如有疑问请拨打咨询热线021-26095506。', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '000', message: '接口调试', show: '系统维护', tip: '正在测试，请稍后……', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '405', message: '解码失败', show: '您所查询的数码不存在，谨防假冒，如有疑问请拨打咨询热线021-26095506。', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '400', message: '未扫描获取到数码/数码不能为空', show: '您所查询的数码不存在，谨防假冒，如有疑问请拨打咨询热线021-26095506。', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '401', message: '手机号码不能为空', show: '手机号码不能为空', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '402', message: '加油站编号不能为空', show: '加油站编号不能为空', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '404', message: '解码成功但不是本厂家生产的数码', show: '您所查询的数码不存在，谨防假冒，如有疑问请拨打咨询热线021-26095506。', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '-1', message: '没有指定的错误码', show: '您所查询的数码不存在，谨防假冒，如有疑问请拨打咨询热线021-26095506。', tip: '', img: '../../static/images/face-3.png', type: 'all', flag: "1", "des": "数码抽奖" },

            { syscode: '117', message: '没有中奖', head: '大奖与您擦肩而过', show: '感谢您的参与，请持续关注', logo: '【壳牌中国加油站】', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '002', message: '没有中奖', head: '大奖与您擦肩而过', show: '感谢您的参与，请持续关注', logo: '【壳牌中国加油站】', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '150', message: '没有中奖', head: '大奖与您擦肩而过', show: '感谢您的参与，请持续关注', logo: '【壳牌中国加油站】', tip: '', img: '../../static/images/face-3.png', type: 'lottery', flag: "1", "des": "数码抽奖" },

            { syscode: '001', message: '获得亚马逊电子券！', head: '恭喜您', show: '获得50元亚马逊礼品卡！', logo: '', tip: '充值码会以短信密码形式发送，请注意查收！请保存好购物小票，小票将作为中奖的唯一凭证', img: '../../static/images/scan_store_oil.png', type: 'lottery', flag: "1" }
        ]
    };

    config.getResult = function (syscode, type) {
        return c = (t = config.result.filter(function (item, index, array) {
            return (item.syscode === syscode && item.flag === "1" && item.type === type);
        })).length > 0 ? t[0] : config.result[0];
    };


    $scope.config = config;

} ]);