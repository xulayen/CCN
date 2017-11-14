/**
* Created by Administrator on 15-1-19.
*/
function functionUtil() {

}

functionUtil = {
    //某个DOM节点是否有某个属性
    hasAttr: function (el, name) {
        var attr = el.getAttributeNode && el.getAttributeNode(name);
        return attr ? attr.specified : false
    },
    //根据class获取元素
    getByClass: function (sClass, oParent) {
        oParent = oParent || document;
        if (!oParent.getElementsByClassName) {
            return oParent.getElementsByClassName(sClass);
        }
        var arr = [];
        var aEle = oParent.getElementsByTagName('*');
        var reg = new RegExp('(^|\\s)' + sClass + '(\\s|$)');
        //var reg = new RegExp('(^|[\\x20\\t\\r\\n\\f])' + sClass + '([\\x20\\t\\r\\n\\f]|$)');
        for (var i = 0; i < aEle.length; i++) {
            if (reg.test(aEle[i].className)) {
                arr.push(aEle[i]);
            }
        }
        return arr;
    },
    //动态添加样式表
    addSheetFile: function (path) {
        var fileref = document.createElement("link")
        fileref.rel = "stylesheet";
        fileref.type = "text/css";
        fileref.href = path;
        fileref.media = "screen";
        var headobj = document.getElementsByTagName('head')[0];
        headobj.appendChild(fileref);
    },
    //根据指定格式如 ${name} 绑定json数据
    LoadJsonData: function (sParent, oJson) {
        var oParent = document.getElementById(sParent);
        if (oJson instanceof Array) {
            var str = oParent.innerHTML;
            for (var i = 0; i < oJson.length - 1; i++) {
                oParent.innerHTML += str;
            }
            for (var d in oJson) {
                oParent.children[d].innerHTML = oParent.children[d].innerHTML.replace(/\$\{(\w+)\}/g, function (str, $1) {
                    return oJson[d][$1] ? oJson[d][$1] : '';
                });
            }

        } else {
            oParent.innerHTML = oParent.innerHTML.replace(/\$\{(\w+)\}/g, function (str, $1) {
                return oJson[$1] ? oJson[$1] : '';
            });
        }
    },
    //根据指定格式如<%……%>绑定json数据
    TemplateEngine: function (html, options) {
        html = html.replace(/(&gt;)|(&lt;)/g, function (str, $1, $2) {
            switch (str) {
                case $1:
                    return '>';
                case $2:
                    return '<';
            }
        });
        var re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0;
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
        return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
    },
    subString: function (source, index, last) {
        try {
            return source.substring(source.indexOf(index) + 1, source.indexOf(last));
        } catch (e) {
            console.error(e);
            return "";
        }
    },
    request: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    },
    getDtsData: function (result, index) {
        if (result.split('|').length > 2) {
            var dtsData = functionUtil.subString(result.split('|')[index], '{', '}');
            if (dtsData != "") {
                var dtsArray = dtsData.split(',');
                var dts = '{';
                for (var i = 0; i < dtsArray.length; i++) {
                    var item = dtsArray[i].split(':');
                    if (item.length == 4) {
                        var time = item[1] + ':' + item[2] + ':' + item[3];
                        dts += '\'' + item[0] + '\':' + '\'' + time + '\'';
                    } else {
                        dts += '\'' + item[0] + '\':' + '\'' + item[1] + '\'';
                    }
                    if (i != dtsArray.length - 1) {
                        dts += ',';
                    }
                }
                dts += '}';
                return dts;
            }
        }
        return "";
    }
}