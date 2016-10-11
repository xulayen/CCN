/*
	t:运动对象
	e:json数组 属性 如：height width left top 透明度
	n:时间
	r:运动的方式
	a:回调函数
*/
function move(t, e, n, r, a) {
    if (t) {
        clearInterval(t.iTimer);
        var u = n || 1e3, o = {};
        for (var i in e)o[i] = {}, "opacity" == i ? (o[i].b = Math.round(100 * css(t, i)), o[i].c = 100 * e[i] - o[i].b) : (o[i].b = parseInt(css(t, i)), o[i].c = e[i] - o[i].b);
        var r = r || "linear", s = (new Date).getTime();
        t.iTimer = setInterval(function () {
            var n = (new Date).getTime() - s;
            n >= u && (n = u);
            for (var i in e) {
                var c = Tween[r](n, o[i].b, o[i].c, u);
                "opacity" == i ? (t.style[i] = c / 100, t.style.filter = "alpha(opacity=" + c + ")") : t.style[i] = c + "px"
            }
            n == u && (clearInterval(t.iTimer), a && a.call(t))
        }, 16)
    }
}
function css(t, e) {
    if ("scale" == e || "rotate" == e || "rotateX" == e || "rotateY" == e || "rotateZ" == e || "scaleX" == e || "scaleY" == e || "translateY" == e || "translateX" == e || "translateZ" == e)switch (t.$Transform || (t.$Transform = {}), e) {
        case"scale":
        case"scaleX":
        case"scaleY":
            return "number" == typeof t.$Transform[e] ? t.$Transform[e] : 100;
        case"translateY":
        case"translateX":
        case"translateZ":
            return t.$Transform[e] ? t.$Transform[e] : 0;
        default:
            return t.$Transform[e] ? t.$Transform[e] : 0
    }
    var n = t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, !1)[e];
    return "opacity" == e ? Math.round(100 * parseFloat(n)) : parseInt(n)
}
var Tween = {
    linear: function (t, e, n, r) {
        return n * t / r + e
    }, easeIn: function (t, e, n, r) {
        return n * (t /= r) * t + e
    }, easeOut: function (t, e, n, r) {
        return -n * (t /= r) * (t - 2) + e
    }, easeBoth: function (t, e, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
    }, easeInStrong: function (t, e, n, r) {
        return n * (t /= r) * t * t * t + e
    }, easeOutStrong: function (t, e, n, r) {
        return -n * ((t = t / r - 1) * t * t * t - 1) + e
    }, easeBothStrong: function (t, e, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
    }, elasticIn: function (t, e, n, r, a, u) {
        if (0 === t)return e;
        if (1 == (t /= r))return e + n;
        if (u || (u = .3 * r), !a || a < Math.abs(n)) {
            a = n;
            var o = u / 4
        } else var o = u / (2 * Math.PI) * Math.asin(n / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / u)) + e
    }, elasticOut: function (t, e, n, r, a, u) {
        if (0 === t)return e;
        if (1 == (t /= r))return e + n;
        if (u || (u = .3 * r), !a || a < Math.abs(n)) {
            a = n;
            var o = u / 4
        } else var o = u / (2 * Math.PI) * Math.asin(n / a);
        return a * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - o) * Math.PI / u) + n + e
    }, elasticBoth: function (t, e, n, r, a, u) {
        if (0 === t)return e;
        if (2 == (t /= r / 2))return e + n;
        if (u || (u = .3 * r * 1.5), !a || a < Math.abs(n)) {
            a = n;
            var o = u / 4
        } else var o = u / (2 * Math.PI) * Math.asin(n / a);
        return 1 > t ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / u) + e : a * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / u) * .5 + n + e
    }, backIn: function (t, e, n, r, a) {
        return "undefined" == typeof a && (a = 1.70158), n * (t /= r) * t * ((a + 1) * t - a) + e
    }, backOut: function (t, e, n, r, a) {
        return "undefined" == typeof a && (a = 2.0158), n * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + e
    }, backBoth: function (t, e, n, r, a) {
        return "undefined" == typeof a && (a = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * (((a *= 1.525) + 1) * t - a) + e : n / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + e
    }, bounceIn: function (t, e, n, r) {
        return n - Tween.bounceOut(r - t, 0, n, r) + e
    }, bounceOut: function (t, e, n, r) {
        return (t /= r) < 1 / 2.75 ? 7.5625 * n * t * t + e : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
    }, bounceBoth: function (t, e, n, r) {
        return r / 2 > t ? .5 * Tween.bounceIn(2 * t, 0, n, r) + e : .5 * Tween.bounceOut(2 * t - r, 0, n, r) + .5 * n + e
    }
};