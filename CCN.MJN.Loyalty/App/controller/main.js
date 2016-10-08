var app = angular.module('MJN', ['ngRoute', 'MJN.services']);
app.controller('configCtrl', ['$scope', 'instance', 'windowService', '$location', 'httpService', '$http', function ($scope, instance, windowService, $location, httpService, $http) {
    var config = {
        //厂家编号
        facid: '77',
        writeLog: new Image(), //方便客户端写入错误日志
        result: [
            {
                syscode: '000',
                message: 'NetWork Error!',
                show: '网络繁忙',
                "tip": "",
                "img": "",
                type: 'normal',
                flag: "1",
                "des": "默认答复"
            },
            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_201",
                "flag": "1",
                "des": "活动动态和固定二维码有效性验证接口"
            },
            {
                "syscode": "002",
                "message": "JSON格式错误",
                "show": "JSON格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_201",
                "flag": "1",
                "des": "活动动态和固定二维码有效性验证接口"
            },
            {
                "syscode": "003",
                "message": "授权账号或者授权密码错误",
                "show": "授权账号或者授权密码错误",
                "tip": "",
                "img": "",
                "type": "MZC_201",
                "flag": "1",
                "des": "活动动态和固定二维码有效性验证接口"
            },
            {
                "syscode": "004",
                "message": "服务器IP地址不在许可授权范围",
                "show": "服务器IP地址不在许可授权范围",
                "tip": "",
                "img": "",
                "type": "MZC_201",
                "flag": "1",
                "des": "活动动态和固定二维码有效性验证接口"
            },
            {
                "syscode": "005",
                "message": "授权时间已经过期",
                "show": "授权时间已经过期",
                "tip": "",
                "img": "",
                "type": "MZC_201",
                "flag": "1",
                "des": "活动动态和固定二维码有效性验证接口"
            },
            {
                "syscode": "006",
                "message": "系统异常",
                "show": "系统异常",
                "tip": "",
                "img": "",
                "type": "MZC_201",
                "flag": "1",
                "des": "活动动态和固定二维码有效性验证接口"
            },
            {
                "syscode": "007",
                "message": "参数为空或值错误",
                "show": "参数为空或值错误",
                "tip": "",
                "img": "",
                "type": "MZC_201",
                "flag": "1",
                "des": "活动动态和固定二维码有效性验证接口"
            },
            {
                "syscode": "008",
                "message": "二维码格式错误",
                "show": "二维码格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_201",
                "flag": "1",
                "des": "活动动态和固定二维码有效性验证接口"
            },
            {
                "syscode": "009",
                "message": "二维码非有效的活动二维码",
                "show": "二维码非有效的活动二维码",
                "tip": "",
                "img": "",
                "type": "MZC_201",
                "flag": "1",
                "des": "活动动态和固定二维码有效性验证接口"
            },
            {
                "syscode": "010",
                "message": "超过二维码有效期",
                "show": "超过二维码有效期",
                "tip": "",
                "img": "",
                "type": "MZC_201",
                "flag": "1",
                "des": "活动动态和固定二维码有效性验证接口"
            },
            {
                "syscode": "011",
                "message": "活动未开始或者已经结束",
                "show": "活动未开始或者已经结束",
                "tip": "",
                "img": "",
                "type": "MZC_201",
                "flag": "1",
                "des": "活动动态和固定二维码有效性验证接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "002",
                "message": "JSON格式错误",
                "show": "JSON格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "003",
                "message": "授权账号或者授权密码错误",
                "show": "授权账号或者授权密码错误",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "004",
                "message": "服务器IP地址不在许可授权范围",
                "show": "服务器IP地址不在许可授权范围",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "005",
                "message": "授权时间已经过期",
                "show": "授权时间已经过期",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "006",
                "message": "系统异常",
                "show": "系统异常",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "007",
                "message": "参数为空或值错误",
                "show": "参数为空或值错误",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "008",
                "message": "手机号码格式错误",
                "show": "手机号码格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "009",
                "message": "非正确有效的数码（或者产品二维码）",
                "show": "非正确有效的数码（或者产品二维码）",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "100",
                "message": "二维码格式错误",
                "show": "二维码格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "101",
                "message": "二维码非有效的活动二维码",
                "show": "二维码非有效的活动二维码",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "102",
                "message": "超过二维码有效期",
                "show": "超过二维码有效期",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "103",
                "message": "活动未开始或者已经结束",
                "show": "活动未开始或者已经结束",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "104",
                "message": "此数码已经被验证（本次活动已经验证）",
                "show": "此数码已经被验证（本次活动已经验证）",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },
            {
                "syscode": "105",
                "message": "此数码在其他活动已经被验证",
                "show": "此数码在其他活动已经被验证",
                "tip": "",
                "img": "",
                "type": "MZC_202",
                "flag": "1",
                "des": "数码验证接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_203",
                "flag": "1",
                "des": "新客注册接口"
            },
            {
                "syscode": "002",
                "message": "JSON格式错误",
                "show": "JSON格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_203",
                "flag": "1",
                "des": "新客注册接口"
            },
            {
                "syscode": "003",
                "message": "授权账号或者授权密码错误",
                "show": "授权账号或者授权密码错误",
                "tip": "",
                "img": "",
                "type": "MZC_203",
                "flag": "1",
                "des": "新客注册接口"
            },
            {
                "syscode": "004",
                "message": "服务器IP地址不在许可授权范围",
                "show": "服务器IP地址不在许可授权范围",
                "tip": "",
                "img": "",
                "type": "MZC_203",
                "flag": "1",
                "des": "新客注册接口"
            },
            {
                "syscode": "005",
                "message": "授权时间已经过期",
                "show": "授权时间已经过期",
                "tip": "",
                "img": "",
                "type": "MZC_203",
                "flag": "1",
                "des": "新客注册接口"
            },
            {
                "syscode": "006",
                "message": "系统异常",
                "show": "系统异常",
                "tip": "",
                "img": "",
                "type": "MZC_203",
                "flag": "1",
                "des": "新客注册接口"
            },
            {
                "syscode": "007",
                "message": "参数为空或者值错误",
                "show": "参数为空或者值错误",
                "tip": "",
                "img": "",
                "type": "MZC_203",
                "flag": "1",
                "des": "新客注册接口"
            },
            {
                "syscode": "008",
                "message": "手机号码格式错误",
                "show": "手机号码格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_203",
                "flag": "1",
                "des": "新客注册接口"
            },
            {
                "syscode": "009",
                "message": "姓名格式错误（必须大于3位小于20位的中文格式数据）",
                "show": "姓名格式错误（必须大于3位小于20位的中文格式数据）",
                "tip": "",
                "img": "",
                "type": "MZC_203",
                "flag": "1",
                "des": "新客注册接口"
            },
            {
                "syscode": "100",
                "message": "二维码格式错误",
                "show": "二维码格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_203",
                "flag": "1",
                "des": "新客注册接口"
            },
            {
                "syscode": "101",
                "message": "二维码非有效的活动二维码",
                "show": "二维码非有效的活动二维码",
                "tip": "",
                "img": "",
                "type": "MZC_203",
                "flag": "1",
                "des": "新客注册接口"
            },

            {
                "syscode": "103",
                "message": "此手机号码已经注册",
                "show": "此手机号码已经注册",
                "tip": "",
                "img": "",
                "type": "MZC_203",
                "flag": "1",
                "des": "新客注册接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "002",
                "message": "JSON格式错误",
                "show": "JSON格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "003",
                "message": "授权账号或者授权密码错误",
                "show": "授权账号或者授权密码错误",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "004",
                "message": "服务器IP地址不在许可授权范围",
                "show": "服务器IP地址不在许可授权范围",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "005",
                "message": "授权时间已经过期",
                "show": "授权时间已经过期",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "006",
                "message": "系统异常",
                "show": "系统异常",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "007",
                "message": "参数为空或者值错误",
                "show": "参数为空或者值错误",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "008",
                "message": "流水号格式错误",
                "show": "流水号格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "009",
                "message": "手机号码格式错误",
                "show": "手机号码格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "100",
                "message": "二维码格式错误",
                "show": "二维码格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "101",
                "message": "二维码非有效的活动二维码",
                "show": "二维码非有效的活动二维码",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },

            {
                "syscode": "103",
                "message": "流水号不存在",
                "show": "流水号不存在",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "104",
                "message": "流水号对应的奖励已经领取",
                "show": "流水号对应的奖励已经领取",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "105",
                "message": "手机号码不存在",
                "show": "手机号码不存在",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "106",
                "message": "流水号与对应的手机号码不匹配",
                "show": "流水号与对应的手机号码不匹配",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "107",
                "message": "奖励类别ID不存在",
                "show": "奖励类别ID不存在",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "108",
                "message": "奖励ID不存在",
                "show": "奖励ID不存在",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "109",
                "message": "奖励类别ID与奖励ID不匹配",
                "show": "奖励类别ID与奖励ID不匹配",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "110",
                "message": "奖励类别ID非本活动有效奖励类别ID",
                "show": "奖励类别ID非本活动有效奖励类别ID",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },
            {
                "syscode": "111",
                "message": "ID非本活动有效奖励ID",
                "show": "ID非本活动有效奖励ID",
                "tip": "",
                "img": "",
                "type": "MZC_204",
                "flag": "1",
                "des": "虚拟卡券生成接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "002",
                "message": "JSON格式错误",
                "show": "JSON格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "003",
                "message": "授权账号或者授权密码错误",
                "show": "授权账号或者授权密码错误",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "004",
                "message": "服务器IP地址不在许可授权范围",
                "show": "服务器IP地址不在许可授权范围",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "005",
                "message": "授权时间已经过期",
                "show": "授权时间已经过期",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "006",
                "message": "系统异常",
                "show": "系统异常",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "007",
                "message": "参数为空或者值错误",
                "show": "参数为空或者值错误",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "008",
                "message": "流水号格式错误",
                "show": "流水号格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "009",
                "message": "手机号码格式错误",
                "show": "手机号码格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "100",
                "message": "二维码格式错误",
                "show": "二维码格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "101",
                "message": "二维码非有效的活动二维码",
                "show": "二维码非有效的活动二维码",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "102",
                "message": "活动未开始或者已经结束",
                "show": "活动未开始或者已经结束",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "103",
                "message": "流水号不存在",
                "show": "流水号不存在",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "104",
                "message": "流水号对应的奖励已经领取",
                "show": "流水号对应的奖励已经领取",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "105",
                "message": "手机号码不存在",
                "show": "手机号码不存在",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "106",
                "message": "流水号与对应的手机号码不匹配",
                "show": "流水号与对应的手机号码不匹配",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "107",
                "message": "奖励类别ID不存在",
                "show": "奖励类别ID不存在",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "108",
                "message": "奖励ID不存在",
                "show": "奖励ID不存在",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "109",
                "message": "奖励类别ID与奖励ID不匹配",
                "show": "奖励类别ID与奖励ID不匹配",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "110",
                "message": "奖励类别ID非本活动有效奖励类别ID",
                "show": "奖励类别ID非本活动有效奖励类别ID",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "111",
                "message": "奖励ID非本活动有效奖励ID",
                "show": "奖励ID非本活动有效奖励ID",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "112",
                "message": "微信Openid为空",
                "show": "微信Openid为空",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },
            {
                "syscode": "113",
                "message": "OpenID与手机号码不匹配错误",
                "show": "OpenID与手机号码不匹配错误",
                "tip": "",
                "img": "",
                "type": "MZC_205",
                "flag": "1",
                "des": "红包获取和发放接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_207",
                "flag": "1",
                "des": "奖励基础数据接口"
            },
            {
                "syscode": "002",
                "message": "JSON格式错误",
                "show": "JSON格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_207",
                "flag": "1",
                "des": "奖励基础数据接口"
            },
            {
                "syscode": "003",
                "message": "授权账号或者授权密码错误",
                "show": "授权账号或者授权密码错误",
                "tip": "",
                "img": "",
                "type": "MZC_207",
                "flag": "1",
                "des": "奖励基础数据接口"
            },
            {
                "syscode": "004",
                "message": "服务器IP地址不在许可授权范围",
                "show": "服务器IP地址不在许可授权范围",
                "tip": "",
                "img": "",
                "type": "MZC_207",
                "flag": "1",
                "des": "奖励基础数据接口"
            },
            {
                "syscode": "005",
                "message": "授权时间已经过期",
                "show": "授权时间已经过期",
                "tip": "",
                "img": "",
                "type": "MZC_207",
                "flag": "1",
                "des": "奖励基础数据接口"
            },
            {
                "syscode": "006",
                "message": "系统异常",
                "show": "系统异常",
                "tip": "",
                "img": "",
                "type": "MZC_207",
                "flag": "1",
                "des": "奖励基础数据接口"
            },
            {
                "syscode": "007",
                "message": "参数为空或者值错误",
                "show": "参数为空或者值错误",
                "tip": "",
                "img": "",
                "type": "MZC_207",
                "flag": "1",
                "des": "奖励基础数据接口"
            },

            {
                "syscode": "009",
                "message": "二维码格式错误",
                "show": "二维码格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_207",
                "flag": "1",
                "des": "奖励基础数据接口"
            },
            {
                "syscode": "100",
                "message": "二维码非有效的活动二维码",
                "show": "二维码非有效的活动二维码",
                "tip": "",
                "img": "",
                "type": "MZC_207",
                "flag": "1",
                "des": "奖励基础数据接口"
            },
            {
                "syscode": "101",
                "message": "超过二维码有效期",
                "show": "超过二维码有效期",
                "tip": "",
                "img": "",
                "type": "MZC_207",
                "flag": "1",
                "des": "奖励基础数据接口"
            },
            {
                "syscode": "102",
                "message": "活动未开始或者已经结束",
                "show": "活动未开始或者已经结束",
                "tip": "",
                "img": "",
                "type": "MZC_207",
                "flag": "1",
                "des": "奖励基础数据接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_101",
                "flag": "1",
                "des": "门店注册接口"
            },
            {
                "syscode": "002",
                "message": "失败",
                "show": "失败",
                "tip": "",
                "img": "",
                "type": "MZC_101",
                "flag": "1",
                "des": "门店注册接口"
            },
            {
                "syscode": "003",
                "message": "参数为空或值错误",
                "show": "参数为空或值错误",
                "tip": "",
                "img": "",
                "type": "MZC_101",
                "flag": "1",
                "des": "门店注册接口"
            },
            {
                "syscode": "004",
                "message": "json格式解析错误",
                "show": "json格式解析错误",
                "tip": "",
                "img": "",
                "type": "MZC_101",
                "flag": "1",
                "des": "门店注册接口"
            },
            {
                "syscode": "006",
                "message": "厂家编号不正确",
                "show": "厂家编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_101",
                "flag": "1",
                "des": "门店注册接口"
            },
            {
                "syscode": "008",
                "message": "程序异常",
                "show": "程序异常",
                "tip": "",
                "img": "",
                "type": "MZC_101",
                "flag": "1",
                "des": "门店注册接口"
            },
            {
                "syscode": "009",
                "message": "网络繁忙",
                "show": "网络繁忙",
                "tip": "",
                "img": "",
                "type": "MZC_101",
                "flag": "1",
                "des": "门店注册接口"
            },
            {
                "syscode": "999",
                "message": "其他错误",
                "show": "其他错误",
                "tip": "",
                "img": "",
                "type": "MZC_101",
                "flag": "1",
                "des": "门店注册接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_102",
                "flag": "1",
                "des": "门店账号使用人绑定接口"
            },
            {
                "syscode": "002",
                "message": "失败",
                "show": "失败",
                "tip": "",
                "img": "",
                "type": "MZC_102",
                "flag": "1",
                "des": "门店账号使用人绑定接口"
            },
            {
                "syscode": "003",
                "message": "参数为空或值错误",
                "show": "参数为空或值错误",
                "tip": "",
                "img": "",
                "type": "MZC_102",
                "flag": "1",
                "des": "门店账号使用人绑定接口"
            },
            {
                "syscode": "004",
                "message": "账号/密码不正确",
                "show": "账号/密码不正确",
                "tip": "",
                "img": "",
                "type": "MZC_102",
                "flag": "1",
                "des": "门店账号使用人绑定接口"
            },
            {
                "syscode": "005",
                "message": "手机格式不正确",
                "show": "手机格式不正确",
                "tip": "",
                "img": "",
                "type": "MZC_102",
                "flag": "1",
                "des": "门店账号使用人绑定接口"
            },
            {
                "syscode": "006",
                "message": "厂家编号不正确",
                "show": "厂家编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_102",
                "flag": "1",
                "des": "门店账号使用人绑定接口"
            },

            {
                "syscode": "008",
                "message": "程序异常",
                "show": "程序异常",
                "tip": "",
                "img": "",
                "type": "MZC_102",
                "flag": "1",
                "des": "门店账号使用人绑定接口"
            },
            {
                "syscode": "009",
                "message": "网络繁忙",
                "show": "网络繁忙",
                "tip": "",
                "img": "",
                "type": "MZC_102",
                "flag": "1",
                "des": "门店账号使用人绑定接口"
            },
            {
                "syscode": "999",
                "message": "其他错误",
                "show": "其他错误",
                "tip": "",
                "img": "",
                "type": "MZC_102",
                "flag": "1",
                "des": "门店账号使用人绑定接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_103",
                "flag": "1",
                "des": "门店登录验证接口"
            },
            {
                "syscode": "002",
                "message": "失败",
                "show": "失败",
                "tip": "",
                "img": "",
                "type": "MZC_103",
                "flag": "1",
                "des": "门店登录验证接口"
            },
            {
                "syscode": "003",
                "message": "参数为空或者格式不正确",
                "show": "参数为空或者格式不正确",
                "tip": "",
                "img": "",
                "type": "MZC_103",
                "flag": "1",
                "des": "门店登录验证接口"
            },
            {
                "syscode": "010",
                "message": "当前微信粉丝号还未进行授权绑定",
                "show": "当前微信粉丝号还未进行授权绑定",
                "tip": "",
                "img": "",
                "type": "MZC_103",
                "flag": "1",
                "des": "门店登录验证接口"
            },
            {
                "syscode": "006",
                "message": "厂家编号不正确",
                "show": "厂家编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_103",
                "flag": "1",
                "des": "门店登录验证接口"
            },
            {
                "syscode": "007",
                "message": "当前账号已经停用",
                "show": "当前账号已经停用",
                "tip": "",
                "img": "",
                "type": "MZC_103",
                "flag": "1",
                "des": "门店登录验证接口"
            },
            {
                "syscode": "008",
                "message": "程序异常",
                "show": "程序异常",
                "tip": "",
                "img": "",
                "type": "MZC_103",
                "flag": "1",
                "des": "门店登录验证接口"
            },
            {
                "syscode": "009",
                "message": "网络繁忙",
                "show": "网络繁忙",
                "tip": "",
                "img": "",
                "type": "MZC_103",
                "flag": "1",
                "des": "门店登录验证接口"
            },
            {
                "syscode": "999",
                "message": "其他错误",
                "show": "其他错误",
                "tip": "",
                "img": "",
                "type": "MZC_103",
                "flag": "1",
                "des": "门店登录验证接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },

            {
                "syscode": "003",
                "message": "参数为空或者格式错误",
                "show": "参数为空或者格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },
            {
                "syscode": "004",
                "message": "门店编号不正确",
                "show": "门店编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },
            {
                "syscode": "005",
                "message": "json格式不正确",
                "show": "json格式不正确",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },
            {
                "syscode": "101",
                "message": "门店没有资格参与该活动",
                "show": "门店没有资格参与该活动",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },
            {
                "syscode": "102",
                "message": "活动已经失效",
                "show": "活动已经失效",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },
            {
                "syscode": "103",
                "message": "活动未开始",
                "show": "活动未开始",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },
            {
                "syscode": "104",
                "message": "活动已经结束",
                "show": "活动已经结束",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },
            {
                "syscode": "006",
                "message": "厂家编号不正确",
                "show": "厂家编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },
            {
                "syscode": "007",
                "message": "当前账号已经停用",
                "show": "当前账号已经停用",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },
            {
                "syscode": "008",
                "message": "程序异常",
                "show": "程序异常",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },
            {
                "syscode": "009",
                "message": "网络繁忙",
                "show": "网络繁忙",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },
            {
                "syscode": "999",
                "message": "其他错误",
                "show": "其他错误",
                "tip": "",
                "img": "",
                "type": "MZC_104",
                "flag": "1",
                "des": "动态二维码生成接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_105",
                "flag": "1",
                "des": "门店业绩查询接口"
            },
            {
                "syscode": "002",
                "message": "失败",
                "show": "失败",
                "tip": "",
                "img": "",
                "type": "MZC_105",
                "flag": "1",
                "des": "门店业绩查询接口"
            },
            {
                "syscode": "003",
                "message": "参数为空或者格式不正确",
                "show": "参数为空或者格式不正确",
                "tip": "",
                "img": "",
                "type": "MZC_105",
                "flag": "1",
                "des": "门店业绩查询接口"
            },
            {
                "syscode": "004",
                "message": "门店编号不正确",
                "show": "门店编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_105",
                "flag": "1",
                "des": "门店业绩查询接口"
            },
            {
                "syscode": "010",
                "message": "当前微信粉丝号还未进行授权绑定",
                "show": "当前微信粉丝号还未进行授权绑定",
                "tip": "",
                "img": "",
                "type": "MZC_105",
                "flag": "1",
                "des": "门店业绩查询接口"
            },
            {
                "syscode": "006",
                "message": "厂家编号不正确",
                "show": "厂家编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_105",
                "flag": "1",
                "des": "门店业绩查询接口"
            },
            {
                "syscode": "007",
                "message": "当前账号已经停用",
                "show": "当前账号已经停用",
                "tip": "",
                "img": "",
                "type": "MZC_105",
                "flag": "1",
                "des": "门店业绩查询接口"
            },
            {
                "syscode": "008",
                "message": "程序异常",
                "show": "程序异常",
                "tip": "",
                "img": "",
                "type": "MZC_105",
                "flag": "1",
                "des": "门店业绩查询接口"
            },
            {
                "syscode": "009",
                "message": "网络繁忙",
                "show": "网络繁忙",
                "tip": "",
                "img": "",
                "type": "MZC_105",
                "flag": "1",
                "des": "门店业绩查询接口"
            },
            {
                "syscode": "999",
                "message": "其他错误",
                "show": "其他错误",
                "tip": "",
                "img": "",
                "type": "MZC_105",
                "flag": "1",
                "des": "门店业绩查询接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "002",
                "message": "失败",
                "show": "失败",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "003",
                "message": "参数为空或者格式错误",
                "show": "参数为空或者格式错误",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "004",
                "message": "门店编号不正确",
                "show": "门店编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "005",
                "message": "核销码不正确",
                "show": "核销码不正确",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "006",
                "message": "厂家编号不正确",
                "show": "厂家编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "007",
                "message": "当前账号已经停用",
                "show": "当前账号已经停用",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "101",
                "message": "核销码已经被核销",
                "show": "核销码已经被核销",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "102",
                "message": "核销码已经过期（已失效）",
                "show": "核销码已经过期（已失效）",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "103",
                "message": "核销码还未在活动有效期内（未生效）",
                "show": "核销码还未在活动有效期内（未生效）",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "104",
                "message": "核销码已被删除",
                "show": "核销码已被删除",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "105",
                "message": "核销码正在转赠中",
                "show": "核销码正在转赠中",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "106",
                "message": "核销码转增退回",
                "show": "核销码转增退回",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "008",
                "message": "程序异常",
                "show": "程序异常",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "009",
                "message": "网络繁忙",
                "show": "网络繁忙",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },
            {
                "syscode": "999",
                "message": "其他错误",
                "show": "其他错误",
                "tip": "",
                "img": "",
                "type": "MZC_106",
                "flag": "1",
                "des": "虚拟卡卷核销接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_107",
                "flag": "1",
                "des": "门店活动接口"
            },
            {
                "syscode": "002",
                "message": "失败",
                "show": "失败",
                "tip": "",
                "img": "",
                "type": "MZC_107",
                "flag": "1",
                "des": "门店活动接口"
            },
            {
                "syscode": "003",
                "message": "参数为空或者格式不正确",
                "show": "参数为空或者格式不正确",
                "tip": "",
                "img": "",
                "type": "MZC_107",
                "flag": "1",
                "des": "门店活动接口"
            },
            {
                "syscode": "004",
                "message": "门店编号不正确",
                "show": "门店编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_107",
                "flag": "1",
                "des": "门店活动接口"
            },
            {
                "syscode": "006",
                "message": "厂家编号不正确",
                "show": "厂家编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_107",
                "flag": "1",
                "des": "门店活动接口"
            },
            {
                "syscode": "007",
                "message": "门店账号已经停用",
                "show": "门店账号已经停用",
                "tip": "",
                "img": "",
                "type": "MZC_107",
                "flag": "1",
                "des": "门店活动接口"
            },
            {
                "syscode": "008",
                "message": "程序异常",
                "show": "程序异常",
                "tip": "",
                "img": "",
                "type": "MZC_107",
                "flag": "1",
                "des": "门店活动接口"
            },
            {
                "syscode": "009",
                "message": "网络繁忙",
                "show": "网络繁忙",
                "tip": "",
                "img": "",
                "type": "MZC_107",
                "flag": "1",
                "des": "门店活动接口"
            },
            {
                "syscode": "999",
                "message": "其他错误",
                "show": "其他错误",
                "tip": "",
                "img": "",
                "type": "MZC_107",
                "flag": "1",
                "des": "门店活动接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_108",
                "flag": "1",
                "des": "根据店长获取下面店员信息接口"
            },
            {
                "syscode": "002",
                "message": "失败",
                "show": "失败",
                "tip": "",
                "img": "",
                "type": "MZC_108",
                "flag": "1",
                "des": "根据店长获取下面店员信息接口"
            },
            {
                "syscode": "003",
                "message": "参数为空或者格式不正确",
                "show": "参数为空或者格式不正确",
                "tip": "",
                "img": "",
                "type": "MZC_108",
                "flag": "1",
                "des": "根据店长获取下面店员信息接口"
            },
            {
                "syscode": "004",
                "message": "门店编号不正确",
                "show": "门店编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_108",
                "flag": "1",
                "des": "根据店长获取下面店员信息接口"
            },
            {
                "syscode": "006",
                "message": "厂家编号不正确",
                "show": "厂家编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_108",
                "flag": "1",
                "des": "根据店长获取下面店员信息接口"
            },
            {
                "syscode": "007",
                "message": "当前账号已经停用",
                "show": "当前账号已经停用",
                "tip": "",
                "img": "",
                "type": "MZC_108",
                "flag": "1",
                "des": "根据店长获取下面店员信息接口"
            },
            {
                "syscode": "008",
                "message": "程序异常",
                "show": "程序异常",
                "tip": "",
                "img": "",
                "type": "MZC_108",
                "flag": "1",
                "des": "根据店长获取下面店员信息接口"
            },
            {
                "syscode": "009",
                "message": "网络繁忙",
                "show": "网络繁忙",
                "tip": "",
                "img": "",
                "type": "MZC_108",
                "flag": "1",
                "des": "根据店长获取下面店员信息接口"
            },
            {
                "syscode": "999",
                "message": "其他错误",
                "show": "其他错误",
                "tip": "",
                "img": "",
                "type": "MZC_108",
                "flag": "1",
                "des": "根据店长获取下面店员信息接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_109",
                "flag": "1",
                "des": "店长对店员账号启用/停用接口"
            },
            {
                "syscode": "002",
                "message": "失败",
                "show": "失败",
                "tip": "",
                "img": "",
                "type": "MZC_109",
                "flag": "1",
                "des": "店长对店员账号启用/停用接口"
            },
            {
                "syscode": "003",
                "message": "参数为空或者格式不正确",
                "show": "参数为空或者格式不正确",
                "tip": "",
                "img": "",
                "type": "MZC_109",
                "flag": "1",
                "des": "店长对店员账号启用/停用接口"
            },
            {
                "syscode": "004",
                "message": "门店编号不正确",
                "show": "门店编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_109",
                "flag": "1",
                "des": "店长对店员账号启用/停用接口"
            },
            {
                "syscode": "006",
                "message": "厂家编号不正确",
                "show": "厂家编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_109",
                "flag": "1",
                "des": "店长对店员账号启用/停用接口"
            },
            {
                "syscode": "007",
                "message": "店长账号已经停用",
                "show": "店长账号已经停用",
                "tip": "",
                "img": "",
                "type": "MZC_109",
                "flag": "1",
                "des": "店长对店员账号启用/停用接口"
            },
            {
                "syscode": "008",
                "message": "程序异常",
                "show": "程序异常",
                "tip": "",
                "img": "",
                "type": "MZC_109",
                "flag": "1",
                "des": "店长对店员账号启用/停用接口"
            },
            {
                "syscode": "009",
                "message": "网络繁忙",
                "show": "网络繁忙",
                "tip": "",
                "img": "",
                "type": "MZC_109",
                "flag": "1",
                "des": "店长对店员账号启用/停用接口"
            },
            {
                "syscode": "999",
                "message": "其他错误",
                "show": "其他错误",
                "tip": "",
                "img": "",
                "type": "MZC_109",
                "flag": "1",
                "des": "店长对店员账号启用/停用接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_110",
                "flag": "1",
                "des": "店长/店员修改个人信息接口"
            },
            {
                "syscode": "002",
                "message": "失败",
                "show": "失败",
                "tip": "",
                "img": "",
                "type": "MZC_110",
                "flag": "1",
                "des": "店长/店员修改个人信息接口"
            },
            {
                "syscode": "003",
                "message": "参数为空或者格式不正确",
                "show": "参数为空或者格式不正确",
                "tip": "",
                "img": "",
                "type": "MZC_110",
                "flag": "1",
                "des": "店长/店员修改个人信息接口"
            },
            {
                "syscode": "004",
                "message": "门店编号不正确",
                "show": "门店编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_110",
                "flag": "1",
                "des": "店长/店员修改个人信息接口"
            },
            {
                "syscode": "005",
                "message": "手机格式不正确",
                "show": "手机格式不正确",
                "tip": "",
                "img": "",
                "type": "MZC_110",
                "flag": "1",
                "des": "店长/店员修改个人信息接口"
            },
            {
                "syscode": "006",
                "message": "厂家编号不正确",
                "show": "厂家编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_110",
                "flag": "1",
                "des": "店长/店员修改个人信息接口"
            },
            {
                "syscode": "007",
                "message": "当前账号已经停用",
                "show": "当前账号已经停用",
                "tip": "",
                "img": "",
                "type": "MZC_110",
                "flag": "1",
                "des": "店长/店员修改个人信息接口"
            },
            {
                "syscode": "008",
                "message": "程序异常",
                "show": "程序异常",
                "tip": "",
                "img": "",
                "type": "MZC_110",
                "flag": "1",
                "des": "店长/店员修改个人信息接口"
            },
            {
                "syscode": "009",
                "message": "网络繁忙",
                "show": "网络繁忙",
                "tip": "",
                "img": "",
                "type": "MZC_110",
                "flag": "1",
                "des": "店长/店员修改个人信息接口"
            },
            {
                "syscode": "999",
                "message": "其他错误",
                "show": "其他错误",
                "tip": "",
                "img": "",
                "type": "MZC_110",
                "flag": "1",
                "des": "店长/店员修改个人信息接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_111",
                "flag": "1",
                "des": "获取用户微信信息接口"
            },
            {
                "syscode": "002",
                "message": "失败",
                "show": "失败",
                "tip": "",
                "img": "",
                "type": "MZC_111",
                "flag": "1",
                "des": "获取用户微信信息接口"
            },
            {
                "syscode": "003",
                "message": "参数为空或者格式不正确",
                "show": "参数为空或者格式不正确",
                "tip": "",
                "img": "",
                "type": "MZC_111",
                "flag": "1",
                "des": "获取用户微信信息接口"
            },

            {
                "syscode": "005",
                "message": "IP未授权",
                "show": "IP未授权",
                "tip": "",
                "img": "",
                "type": "MZC_111",
                "flag": "1",
                "des": "获取用户微信信息接口"
            },
            {
                "syscode": "006",
                "message": "厂家编号不正确",
                "show": "厂家编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_111",
                "flag": "1",
                "des": "获取用户微信信息接口"
            },
            {
                "syscode": "008",
                "message": "程序异常",
                "show": "程序异常",
                "tip": "",
                "img": "",
                "type": "MZC_111",
                "flag": "1",
                "des": "获取用户微信信息接口"
            },
            {
                "syscode": "009",
                "message": "网络繁忙",
                "show": "网络繁忙",
                "tip": "",
                "img": "",
                "type": "MZC_111",
                "flag": "1",
                "des": "获取用户微信信息接口"
            },
            {
                "syscode": "999",
                "message": "其他错误",
                "show": "其他错误",
                "tip": "",
                "img": "",
                "type": "MZC_111",
                "flag": "1",
                "des": "获取用户微信信息接口"
            },

            {
                "syscode": "001",
                "message": "成功",
                "show": "成功",
                "tip": "",
                "img": "",
                "type": "MZC_112",
                "flag": "1",
                "des": "获取省市区接口"
            },
            {
                "syscode": "002",
                "message": "失败",
                "show": "失败",
                "tip": "",
                "img": "",
                "type": "MZC_112",
                "flag": "1",
                "des": "获取省市区接口"
            },
            {
                "syscode": "003",
                "message": "参数为空或者格式不正确",
                "show": "参数为空或者格式不正确",
                "tip": "",
                "img": "",
                "type": "MZC_112",
                "flag": "1",
                "des": "获取省市区接口"
            },

            {
                "syscode": "006",
                "message": "厂家编号不正确",
                "show": "厂家编号不正确",
                "tip": "",
                "img": "",
                "type": "MZC_112",
                "flag": "1",
                "des": "获取省市区接口"
            },
            {
                "syscode": "008",
                "message": "程序异常",
                "show": "程序异常",
                "tip": "",
                "img": "",
                "type": "MZC_112",
                "flag": "1",
                "des": "获取省市区接口"
            },
            {
                "syscode": "009",
                "message": "网络繁忙",
                "show": "网络繁忙",
                "tip": "",
                "img": "",
                "type": "MZC_112",
                "flag": "1",
                "des": "获取省市区接口"
            },
            {
                "syscode": "999",
                "message": "其他错误",
                "show": "其他错误",
                "tip": "",
                "img": "",
                "type": "MZC_112",
                "flag": "1",
                "des": "获取省市区接口"
            }
        ]
    };

    config.getResult = function (syscode, type) {
        return c = (t = config.result.filter(function (item, index, array) {
            return (item.syscode === syscode && item.flag === "1" && item.type === type);
        })).length > 0 ? t[0] : config.result[0];
    }

    config.clime_me = function () {
        //        httpService.setting('http://10.20.26.19/mjn/server/cy.ashx?callback=JSON_CALLBACK&name=xulei22').then(function (data, status, headers, config) {
        //            console.log(data);
        //        }, function (reason) {
        //            console.log(reason);
        //        });


        httpService.setting('http://10.20.26.19/mjn/WebService1.asmx/getTime?callback=JSON_CALLBACK&format=jsonp&t=' + new Date().getTime()).then(function (data, status, headers, config) {
            console.log(data);
        }, function (reason) {
            console.log(reason);
        });

    };
    $scope.config = config;

} ]);