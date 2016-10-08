/**
* Created by layen.xu on 2016/05/18 for update.
* 时间：2012-6-6
* 地址：https://github.com/xulayen/jquery.form.red
* 功能：表单验证
* 说明：在表单验证中，表单元素都需要不同程度的校验：比如是否可以为空（为空验证），是否要满足某一个条件（正则模式），长度校验（maxlength）。这些听起来都比较简单，
* 代码实现起来也不难，难的只是如何把表单验证模块化，可以运用在任何一个表单上面。同时，如果一个页面上有多个表单（注册、登录），在实现上诉各种验证（为空、正则）模式
* 的情况下，并且页面上N个表单并不会互相影响，并且能够通过配置达到理想中的效果，这时候你会想到比较常用JQUERY的插件http://malsup.github.com/jquery.form.js
* 英文文档地址： http://malsup.com/jquery/form/#api  或者类似 另外一个比较常用的JQUERY插件 https://github.com/ghorsey/jquery.validation/blob/master/jquery.validation.js
* 使用攻略：http://www.cnblogs.com/buzzlight/archive/2010/06/30/1768364.html 这些都比较好用。我想说一下，jquery.form.red适用于各种表单，入门比较简单，配置耦合性低，
* 基本不用配置太多的数组、对象，看起来很多、很冗余。只需要在表单元素上做相应的处理就可以了。
* 配置：
*      可用支配的对象：
*      body：                   当前页面表单元素的父容器，默认为body元素
*      formElement：            需要当前html块作为表单的标识，默认是拥有“.form”类样式的html块
*      errorElement            当前表单显示在一个地方的错误提示html块的样式类，默认为null，表示使用alert进行提示
*      isOneByOne              是否是每个表单元素单独给出友好提示，默认为false；如果设置为true，那么在当前表单元素的兄弟节点的位置设置一个html块并设置样式类为“.msg”，
*                              当设置为true时，errorElement必须为null
*
*      可用在表单元素上的属性：
*      class="notnull"         表示当前元素不能为空，这些元素可以是：input[type='text'],input[type='password'],input[type='tel'],input[type='number'],input[type='email'],textarea元素
*      class="select"          表示当前select元素不能为空的标识
*      nullmsg="Express"       和class="notnull"或class="select"成对存在，表示元素为空时给出的友好提示，可以是任何形式的字符串
*
*
*
*      regex="/^ Express $/"   标识当前元素必须要满足的正则表达式，如电话、邮箱、字符等任何形式的正则
*      logicmsg="Express"      和regex="/^ Express $/"成存在，表示当前不满足正则时给出的友好提示，可以是任何形式的字符串
*
*
*      核心配置：
*      class="form"            此类样式和“可支配的对象”中的“formElement”保持一直，方可看作一个表单元素
*      class="check"           需要作为表单提交按钮的html块必须要加上类样式“.check”
*      class="confirm"         需要作为类似删除时的操作按钮
*
*      函数回调：
*      $.GlobalCallBack.submitCallback     html块拥有.check时，点击按钮时进行的回调，有多个表单时可根据obj.id来获取当前是哪个按钮触发的事件
*      $.GlobalCallBack.confirmCallback    html块拥有.confirm时，点击按钮时进行的回调，有多个表单时可根据obj.id来获取当前是哪个按钮触发的事件
*
*      $.GlobalCallBack.Callback = function (e) {
*           e = e || window.event;
*           var obj = e.srcElement ? e.srcElement : e.target;
*           alert(obj.id)
*       }
*
*
*       调用：
*       $(function(){
*           $(document).Action({body:'body',formElement:'.form',errorElement:'.error',isOneByOne:false});
*       });
*
*       $.GlobalCallBack.submitCallback = function (e) {
*           e = e || window.event;
*           var obj = e.srcElement ? e.srcElement : e.target;
*           alert(obj.id)
*       }
*
*       其他：
*       只有一个按钮的情况下，enter键有同样的效果
*
*       需要改进的地方：
*       单个表单有单独的显示方式
*
*/
;
(function ($) {
    $.GlobalCallBack = {
        //用于.check按钮的回调
        submitCallback: null,
        //用于.confirm按钮的回调
        confirmCallback: null
    };
    $.fn.Action = function (options) {
        var defaults = {
            body: 'body',
            formElement: '.form',
            errorElement: null,
            isOneByOne: false
        }
        var opts = $.extend({}, defaults, options);
        var operating = {
            ///e:当前事件参数 form：当前“表单” _Enter:是否点击了回车键
            main: function (e, form, _Enter) {
                var button = null;
                var action = this;
                try {
                    button = e.srcElement == null ? document.activeElement : e.srcElement;
                } catch (e) {
                    console.log(e.message)
                    button = document.activeElement;
                }
                if ($(button).is(".check") || _Enter) {
                    $('.msg,.error').html('');
                    //alert("提交")
                    var sub = (action.checkform(form) && action.CheckInputRex(form) && action.checkselect(form) && action.checkChecked(form));
                    if (sub) {
                        // Call our callback, but using our own instance as the context
                        //GlobalCallBack.submitCallback.call(form, [e]);
                        $.GlobalCallBack.submitCallback.call(form, e);
                    } else
                        return sub;
                } else if ($(button).is(".confirm")) {
                    //alert("删除")
                    var sub = confirm($(button).attr("title"));
                    if (sub) {
                        //GlobalCallBack.confirmCallback.call(form, [e]);
                        $.GlobalCallBack.confirmCallback.call(form, e);
                    } else
                        return sub;
                } else {
                    //                    //alert("其它")
                    return true;
                }
            },
            ///检测表单为空项 form当前表单
            checkform: function (form) {
                var b = true;
                var action = this;
                $(form).find(".notnull").each(function () {
                    if ($.trim($(this).val()).length <= 0 || $.trim($(this).val()) == $.trim($(this).attr("placeholder"))) {//|| $(this).val() == this.defaultValue
                        return b = action.tip(this, 'nullmsg');
                    }
                });
                if (b == true) {
                    $(form).find(opts.errorElement).text("");
                    $(form).find(opts.errorElement).hide();
                }
                return b;
            },
            //检测表单中必选的下拉列表 form当前表单
            checkselect: function (form) {
                var b = true;
                var action = this;
                $(form).find(".select").each(function (i) {
                    var ck = $(this).find('option:selected').text();
                    if (ck.indexOf("选择") > -1) {
                        return b = action.tip(this, 'nullmsg');
                    }
                });
                if (b == true) {
                    $(form).find(opts.errorElement).text("");
                    $(form).find(opts.errorElement).hide();
                }
                return b;
            },
            //检测表单中必选的复选框 form当前表单
            checkChecked: function (form) {
                var b = true;
                var action = this;
                $(form).find(".checkboxReq").each(function (i) {
                    var ck = $(this)[0].checked;
                    if (!ck) {
                        return b = action.tip(this, 'nullmsg');
                    }
                });
                if (b == true) {
                    $(form).find(opts.errorElement).text("");
                    $(form).find(opts.errorElement).hide();
                }
                return b;
            },
            //检查是否匹配该正则表达式 value：输入的值 reg：正则 ele：当前项
            GetFlase: function (value, reg, ele) {
                var action = this;
                if (reg.test(value)) {
                    return true;
                }
                return action.tip(ele, 'logicmsg');
            },
            //检查正则 form当前表单
            CheckInputRex: function (form) {
                var action = this;
                var b = true;
                $(form).find("input[type='text'],input[type='password'],input[type='tel'],input[type='number'],input[type='email']").each(function () {
                    if (typeof ($(this).attr("regex")) == 'string') {
                        if ($.trim($(this).val()).length > 0 && $.trim($(this).val()) != $.trim($(this).attr("placeholder"))) {
                            //当前表单的值
                            var value = $(this).attr("value") || $(this).val();
                            var regx = eval($(this).attr("regex"));
                            return b = action.GetFlase(value, regx, this);
                        }
                    }
                });
                return b;
            },
            //提示
            tip: function (ele, attr) {
                if (opts.errorElement) {
                    $(ele).parents(opts.formElement).find(".error").text($(ele).attr(attr));
                    $(ele).parents(opts.formElement).find(".error").show();
                } else if (opts.isOneByOne) {
                    $($(ele).nextAll('.msg')[0]).html($(ele).attr(attr));
                    $($(ele).nextAll('.msg')[0]).show();
                } else {
                    alert($(ele).attr(attr));
                }
                $(ele).select();
                $(ele).focus();
                return false;
            }
        };
        return $(opts.body).find(opts.formElement).each(function () {
            var form = this;
            this.onclick = function (e) {
                return operating.main(e, form);
            }
            if ($(opts.formElement).length == 1) {
                document.onkeydown = function (eve) {
                    var e = eve || window.event || arguments.callee.caller.arguments[0];
                    if (e && e.keyCode == 13) {
                        return operating.main(e, form, true);
                    }
                }
            }

        });
    }
} (jQuery));