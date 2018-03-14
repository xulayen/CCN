var ismobile = false;
/**
 * [isMobile 检测当前浏览器是否是手机]
 * @return {Boolean}
 */
function isMobile() {
    return ismobile = navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i) ? true : false;
}

/**
 * [isJson 判断是否是json对象]
 * @param  {string|obj}  obj [待检测数据]
 * @return {Boolean}
 */
function isJson(obj) {
    var isjson = typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    return isjson;
}

/**
 * [regexpStr 正则检测字符串是否是指定格式]
 * @param  {string} string [待检测字符串]
 * @param  {type} type   [检测类型]
 * @return {Boolean}
 */
function regexpStr(string, type) {
    if (!type)
        var type = 'pwd';
    if (!in_array(type, ['integer', 'nninteger', 'zh-cn', 'email', 'url', 'pwd', 'post-code', 'zh-en', 'ip', 'id-number', 'mobile', 'double']))
        return false;
    if ($.trim(string) == '')
        return false;
    var regexp = {
        //匹配正整数
        'integer': /^[0-9]*[0-9][0-9]*$/,
        //匹配非负整数（正整数+0）
        'nninteger': /^\d+$/,
        //匹配非负整数（正整数+0）
        'double': /^\d+(\.\d+)?$/,
        //匹配中文
        'zh-cn': /^[\u4e00-\u9fa5]{2,4}$/,
        //匹配Email //
        'email': /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
        //匹配网址URL
        'url': /^(f|ht){1}(tp|tps):\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/,
        //匹配字母开头，5-16字符，字母数字下划线
        'pwd': /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/,
        //匹配中国邮政编码
        'post-code': /^[1-9]\d{5}$/,
        //匹配数字,字母,下划线,中文
        'zh-en': /^[\u4e00-\u9fa5A-Za-z0-9_]+$/,
        //匹配IP地址
        'ip': /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,
        //匹配中国大陆身份证
        'id-number': /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|x|X)$/,
        //匹配大陆手机号码
        'mobile': /(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])[0-9]{8}$/
    };
    return eval(regexp[type]).test(string) ? true : false;
}

/**
 * [in_array 检测一个变量是否在一个数组中]
 * @param  {string} needle    待检测字符串
 * @param  {string|array} haystack    数组或者是以|分割的字符串
 * @return {Boolean}
 */
function in_array(needle, haystack) {
    haystack = $.isArray(haystack) ? haystack : haystack.split("|");
    if (typeof needle == 'string' || typeof needle == 'number') {
        for (var i in haystack) {
            if (haystack[i] == needle) {
                return true;
            }
        }
    }
    return false;
}

var is_get_code = true;
var countdown = 60;
function get_code_countdown(obj,text,text2) {
    countdown--;
    is_get_code = false;
    text = text == undefined ? '秒后重新获取' : text;
    text2 = text2 == undefined ? '获取验证码' : text2;
    $(obj).text(countdown + text);
    var timer = setInterval(function () {
        if (countdown == 1) {
            $(obj).text(text2);
            is_get_code = true;
            countdown = 60;
            clearInterval(timer);
        } else {
            countdown--;
            $(obj).text(countdown + text);
        }
    }, 1000);
}
