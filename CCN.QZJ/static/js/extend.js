(function ($) {
    $.extend({
        http_post: function (url, formObj, id) {
            layer.closeAll();
            if (!url || url == '')
                var url = document.URL;
            if (!formObj || formObj == '')
                var formObj = "form";
            if (!id)
                var id = '';
            layer.open({
                type: 2,
                shadeClose: false
            });
            if (isJson(formObj)) {
                var datas = formObj;
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: datas,
                    // cache: false,
                    dataType: "json",
                    success: function (json) {
                        layer.closeAll();
                        $.pop_msg(json.msg, json.callback);
                    },
                    error: function () {
                        layer.closeAll();
                        $.pop_msg('-网络繁忙请稍后重试！');
                    }
                });
            } else {
                var datas = new FormData($(formObj)[0]);
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: datas,
                    // cache: false,
                    contentType: false,    //不可缺
                    processData: false,    //不可缺
                    dataType: "json",
                    success: function (json) {
                        layer.closeAll();
                        $.pop_msg(json.msg, json.callback);
                    },
                    error: function () {
                        layer.closeAll();
                        $.pop_msg('-网络繁忙请稍后重试！');
                    }
                });
            }
            return false;
        },
        pop_msg: function (msg, callback) {
            if (msg || msg != '') {
                layer.open({
                    content: msg
                    , skin: 'msg'
                    , time: 2 //2秒后自动关闭
                });
            }
            if (callback) {
                setTimeout(function () {
                    if (callback._href) {
                        window.location.href = callback._href;
                    } else if (callback == "reload") {
                        top.window.location.reload();
                    }
                    else if (typeof callback == 'string') {
                        eval(callback);
                    } else if (typeof callback == 'function') {
                        callback();
                    }
                });
            }
        }
    });

    $.fn.extend({
        touchclick: function (callback) {
            if (isMobile()) {
                var dragging = false;
                $(this).bind('touchmove', function (event) {
                    dragging = true;
                });
                $(this).bind('touchend', function (event) {
                    if (dragging) {
                        return;
                    } else {
                        callback($(this));
                    }
                });
                $(this).bind("touchstart", function (event) {
                    dragging = false;
                });
            } else {
                $(this).click(function () {
                    callback($(this));
                });
            }
        }
    });
})(jQuery);