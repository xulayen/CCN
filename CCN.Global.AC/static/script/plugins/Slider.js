/**
* Created by Administrator on 15-1-9.
*/
//滑动条对象

function Slider(swipestart, min, max, index, IsOk, lableIndex) {
    var _self = this;
    //是否开始滑动
    _self.swipestart = swipestart;
    //最小值
    _self.min = min;
    //最大值
    _self.max = max;
    //当前滑动条所处的位置
    _self.index = index;
    //是否滑动成功
    _self.IsOk = IsOk;
    //鼠标在滑动按钮的位置
    _self.lableIndex = lableIndex;

    var mobile = BroswerUtil.CurrentSystem.system.android ||
        BroswerUtil.CurrentSystem.system.ios ||
        BroswerUtil.CurrentSystem.system.ipad ||
        BroswerUtil.CurrentSystem.system.iphone ||
        BroswerUtil.CurrentSystem.system.ipoad ||
        BroswerUtil.CurrentSystem.system.ipod ||
        BroswerUtil.CurrentSystem.system.nokiaN;

    _self.mobile = mobile;


    var width = document.body.clientWidth;

    var isMobile = width <= 767;
    _self.isMobile = isMobile;
}

//初始化
Slider.prototype.Init = function () {
    var _self = this;
    $("#label").on("mousedown", function (event) {
        var e = event || window.event;
        _self.lableIndex = e.clientX - this.offsetLeft;
        if (!_self.IsOk)
            _self.HanderIn();
    });

    $("#pageSlide").on("mousemove", function (event) {
        if (!_self.IsOk)
            _self.HanderMove(event);
    });

    $(document).on("mouseup", function (event) {
        if (!_self.IsOk)
            _self.HanderOut();

    });


    $("#label").on("touchstart", function (event) {
        try {
            var e = event || window.event;
            //event.originalEvent.changedTouches[0].clientX //event.originalEvent.pageX
            _self.lableIndex = event.originalEvent.changedTouches[0].clientX - this.offsetLeft;
            if (!_self.IsOk)
                _self.HanderIn();

        } catch (e) {
            console.log(navigator.appVersion + "不支持TouchEvent事件！" + e.message);
        }
    });

    $("#pageSlide").on("touchmove", function (event) {
        try {
            if (!_self.IsOk)
                _self.HanderMove(event);
        } catch (e) {
            console.log(navigator.appVersion + "不支持touchmove事件！" + e.message);
        }

    });

    $(document).on("touchend", function (event) {
        try {
            if (!_self.IsOk)
                _self.HanderOut();
        } catch (e) {
            console.log(navigator.appVersion + "不支持touchend事件！" + e.message);
        }

    });
}

//鼠标/手指接触滑动按钮
Slider.prototype.HanderIn = function () {
    var _self = this;
    _self.swipestart = true;
    _self.min = 0;
    _self.max = $("#slider").width();
   // console.log(_self.max);
    if (_self.lableIndex < 0) {
        _self.lableIndex = 0;
    }
}

//鼠标/手指移出
Slider.prototype.HanderOut = function () {
    var _self = this;
    //停止
    _self.swipestart = false;
    _self.Move();
}

//鼠标/手指移动
Slider.prototype.HanderMove = function (event) {
    var _self = this;
    if (_self.swipestart && !_self.IsOk) {
        event.preventDefault();
        var event = event || window.event;
        //移动端(平板或者手机)
        if (_self.mobile) {
            //event.originalEvent.changedTouches[0].clientX //event.originalEvent.pageX
            _self.index = event.originalEvent.changedTouches[0].clientX - _self.lableIndex;

            //屏幕小于767 而且 不是移动端(平板或者手机) （这种情况属于用户把浏览器调到手机大小时）
        } else if (_self.isMobile && !_self.mobile) {
            _self.index = event.clientX - _self.lableIndex;
        } else {
            _self.index = event.clientX - _self.lableIndex;
        }
        _self.Move();
    }
}


Slider.prototype.SliderCallBack = function(callback,salutation){
	callback.call(this, salutation);
}
function foo(salutation){
	console.log(salutation);
}


//鼠标/手指移动
Slider.prototype.Move = function () {
    var _self = this;
    if (_self.index > 0) {
        var style = "";
        if (_self.isMobile) {
            style = {
                "border-bottom-left-radius": "0px", "border-top-left-radius": "0px",
                "border-bottom-right-radius": "10px", "border-top-right-radius": "10px"
            };
        } else {
            style = {
                "border-bottom-left-radius": "0px", "border-top-left-radius": "0px",
                "border-bottom-right-radius": "10px", "border-top-right-radius": "10px"
            };
        }
        $(".slider.left").css(style);
    }


    //$(".warn").text("index:" + _self.index + "， max" + _self.max + ",lableIndex:" + _self.lableIndex + ",value:" + $("#captcha").val());
    var num; //30  62
    if (_self.isMobile) { num = 10; } else { num = 19; }
    if ((_self.index + num) >= _self.max) {
        _self.index = _self.max - num;
    }
    if (_self.index < 0) {
        _self.index = _self.min;
        var style = "";
        if (_self.isMobile) {
            var style = {
                "border-bottom-left-radius": "10px", "border-top-left-radius": "10px",
                "border-bottom-right-radius": "0px", "border-top-right-radius": "0px"
            };
        } else {
            var style = {
                "border-bottom-left-radius": "10px", "border-top-left-radius": "10px",
                "border-bottom-right-radius": "0px", "border-top-right-radius": "0px"
            };
        }
        $(".slider.left").css(style);
    }
    $(".label").css("left", _self.index + "px");
    if (_self.index == (_self.max - num)) {
        //停止
        _self.swipestart = false;
        _self.IsOk = true; //解锁
        $("#captcha").val(1);
        $("#lableTip").text(document.getElementById("lableTip").attributes["hasslider"].value);
    } else {
        _self.IsOk = false; //未解锁
        $("#captcha").val(0);
        $("#lableTip").text(document.getElementById("lableTip").attributes["noslider"].value);
    }
}

window.Slider = Slider;






