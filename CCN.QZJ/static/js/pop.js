(function ($) {
    $.extend({
        pop_msg: function (msg, callback) {
            if (msg || msg != '') {
                layer.open({
                    content: msg
                    , skin: 'msg'
                    , time: 2.5 //2秒后自动关闭
                });
            }
            if (callback) {
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
            }
        }
    });
})(jQuery);