var functionHelper = {
    GetQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]); return '';
    },
    GetDate: function (strDate) {
        var date = eval('new Date(' + strDate.replace(/\d+(?=-[^-]+$)/,
             function (a) { return parseInt(a, 10) - 1; }).match(/\d+/g) + ')');
        return date;
    },
    alert: function (MyModal, text) {
        MyModal.find("div.modal-body p").text(text);
        MyModal.modal('show');
    },
    HasExpire: function () {
        try {
            var time = functionHelper.GetQueryString("time");
            var now = new Date();
            var expried = functionHelper.GetDate(time);
            if (now > expried) {
                return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    },
    //根据指定格式如<%……%>绑定json数据
    TemplateEngine: function (html, options) {        //var re = /@([^@]+)?@/g
        var tem = arguments[2] == null ? "@" : arguments[2];
        var reg = "" + tem + "([^" + tem + "]+)?" + tem + "";
        var re = new RegExp(reg, 'g'), reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0;

        var add = function (line, js) {
            js ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
                (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
            return add;
        }
        while (match = re.exec(html)) {
            add(html.slice(cursor, match.index))(match[1], true);
            cursor = match.index + match[0].length;
        }
        add(html.substr(cursor, html.length - cursor));
        code += 'return r.join("");';
        var result = new Function(code.replace(/[\r\t\n]/g, '')).apply(options).replace(/<script type=\"text\/tmpl\">/g, '').replace(/<\/script>/g, '');
        return result;
    },
    showCover: function (coverId) {
        $('#' + coverId).modal('show');
        $('#' + coverId).removeClass('hidden');
    },
    hiddenCover: function (coverId) {
        $('#' + coverId).modal('hide');
        $('#' + coverId).addClass('hidden');
    },
    encode: function (o) {
        for (var i in o) {
            o[i] = encodeURI(o[i]);
        }
        return o;
    },
    decode: function (o) {
        for (var i in o) {
            o[i] = decodeURI(o[i]);
        }
        return o;
    }
};

String.prototype.format = function () {
    if (arguments.length == 0) return this;
    for (var s = this, i = 0; i < arguments.length; i++)
        s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
    return s;
};

