function EventUtil() {
    var _self = this;
    ///添加事件
    var addEvent = (function () {
        if (document.addEventListener) {
            return function (el, type, fn) {
                el.addEventListener(type, fn, false);
            }
        } else {
            return function (el, type, fn) {
                el.attachEvent("on" + type, function () {
                    return fn.call(el, window.event);
                });
            }
        }
    })();

    ///添加属性改变事件
    var addPropertyChangeEvent = function (obj, fn) {
        if (window.ActiveXObject) {
            obj.onpropertychange = fn;
        } else {
            obj.addEventListener("input", fn, false);
        }
    }

    //移除事件
    var removeEvent = function (obj, type, fn) {
        if (obj.removeEventListener) {
            obj.removeEventListener(type, fn, false);
        } else if (obj.detachEvent) {
            obj.detachEvent("on" + type, obj["on" + type + fn]);
            obj["on" + type + fn] = null;
        }
    }

    //加载事件
    var loadEvent = function (fn) {
        var oldonload = window.onload;
        if (typeof oldonload != "function") {
            window.onload = fn;
        } else {
            window.onload = function () {
                oldonload();
                fn();
            }
        }
    }

    //阻止事件
    var stopEvent = function (e) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.returnValue = false;
            e.cancelBubble = true;
        }
    }

    //如果仅仅是阻止事件冒泡
    var stopPropagation = function (e) {
        e = e || window.event;
        if (! +"\v1") {
            e.cancelBubble = true;
        } else {
            e.stopPropagation();
        }
    }

    //取得事件源对象
    var getEvent1 = function (e) {
        e = e || window.event;
        var obj = e.srcElement ? e.srcElement : e.target;
        return obj;
    }
    //取得事件源对象
    var getEvent2 = function (e) {
        if (window.event) return window.event;
        var c = getEvent2.caller;
        while (c.caller) {
            c = c.caller;
        }
        return c.arguments[0];
    }

    //或者这个功能更强大
    var getEvent3 = function (e) {
        var e = e || window.event;
        if (!e) {
            var c = this.getEvent3.caller;
            while (c) {
                e = c.arguments[0];
                if (e && (Event == e.constructor || MouseEvent == e.constructor)) {
                    break;
                }
                c = c.caller;
            }
        }
        var target = e.srcElement ? e.srcElement : e.target,
                    currentN = target.nodeName.toLowerCase(),
                    parentN = target.parentNode.nodeName.toLowerCase(),
                    grandN = target.parentNode.parentNode.nodeName.toLowerCase();
        return [e, target, currentN, parentN, grandN];
    }


    _self.addEvent = addEvent;
    _self.addPropertyChangeEvent = addPropertyChangeEvent;
    _self.removeEvent = removeEvent;
    _self.loadEvent = loadEvent;
    _self.stopEvent = stopEvent;
    _self.stopPropagation = stopPropagation;
    _self.getEvent1 = getEvent1;
    _self.getEvent2 = getEvent2;
    _self.getEvent3 = getEvent3;
}
//var eventUtil = new EventUtil();
//eventUtil.loadEvent(function () {
//    eventUtil.addEvent(document, "click", function (e) {
//        alert(eventUtil.getEvent3(e));
//    });

//    eventUtil.addPropertyChangeEvent(document, function (e) {
//        alert(eventUtil.getEvent3(e));
//    });
//});