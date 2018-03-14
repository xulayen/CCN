/**
 * Created by Administrator on 2016/12/12.
 */

function scan_QRcode(block) {
    wx.scanQRCode({
        desc: 'scanQRCode desc',
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
            // var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            block(res);
        }
    });
}

function share_timeline(param, success, cancel) {
    wx.onMenuShareTimeline({
        title: param.title, // 分享标题
        link: param.link, // 分享链接
        imgUrl: param.imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            success()
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            cancel()
        }
    });
}

function share_app_msg(param, success, cancel) {
    wx.onMenuShareAppMessage({
        title: param.title, // 分享标题
        desc: param.desc, // 分享描述
        link: param.link, // 分享链接
        imgUrl: param.imgUrl, // 分享图标
        type: param.type, // 分享类型,music、video或link，不填默认为link
        dataUrl: param.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            // 用户确认分享后执行的回调函数
            success()
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            cancel()
        }
    });
}

function share_qq(param, success, cancel) {
    wx.onMenuShareQQ({
        title: param.title, // 分享标题
        desc: param.desc, // 分享描述
        link: param.link, // 分享链接
        imgUrl: param.imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            success()
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            cancel()
        }
    });
}

function share_weibo(param, success, cancel) {
    wx.onMenuShareWeibo({
        title: param.title, // 分享标题
        desc: param.desc, // 分享描述
        link: param.link, // 分享链接
        imgUrl: param.imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            success()
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            cancel()
        }
    });
}

function share_qzone(param, success, cancel) {
    wx.onMenuShareQZone({
        title: param.title, // 分享标题
        desc: param.desc, // 分享描述
        link: param.link, // 分享链接
        imgUrl: param.imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            success()
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            cancel()
        }
    });
}