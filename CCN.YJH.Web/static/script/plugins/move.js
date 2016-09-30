function startMove(obj, json, times, fx, fn, fnMove) {
    var iCur = {};
    for (var attr in json) {
        if (attr == 'opacity') {
            iCur[attr] = Math.round(getStyle(obj, attr) * 100);
        }
        else {
            iCur[attr] = parseInt(getStyle(obj, attr));
        }
    }
    var startTime = now();
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var changeTime = now();
        var scale = 1 - Math.max(0, (startTime - changeTime + times) / times);
        if (fnMove) {
            fnMove(scale);
        }
        for (var attr in json) {
            var value = Tween[fx](scale * times, iCur[attr], json[attr] - iCur[attr], times);
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity=' + value + ')';
                obj.style.opacity = value / 100;
            }
            else {
                obj.style[attr] = value + 'px';
            }
            if (scale == 1) {
                clearInterval(obj.timer);
                if (fn) {
                    fn.call(obj);
                }
            }
        }
    }, 13);
    function now() {
        return Date.now();
    }
}
function getStyle(obj, attr)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return getComputedStyle(obj, false)[attr];
    }
}
var Tween = {
    linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    easeIn: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOut: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    }
};