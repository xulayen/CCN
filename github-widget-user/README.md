##github名片
一个可以在网站中显示github个人信息的jquery widget组件。

##这里是[demo](http://htmlpreview.github.io/?https://github.com/bh-lay/github-widget-user/blob/master/demo.html)

![这是纯demo](resources/demo.jpg) ，  [这是有逼格的demo](http://bh-lay.com/topic/aboutme/index.html)
##如何使用

###方式一、傻瓜式
只需要引入`jquery-github-user-widget.js`文件，在页面中创建一个class为`github-widget-user`的dom，并在data属性上增加用户参数即可，如下面代码所示。

```html
<div class="github-widget-user" data-user="bh-lay"></div>
```

###方式二、自定义式
用于js交互比较频繁的场景，同样是引入`jquery-github-user-widget.js`文件，在需要使用时书写如下代码。

若对应dom上有`data-user`参数，JS函数中可以省略用户名参数，两者有冲突时，以JS传入为优先。
```javascript
    $('.some_class').github_user_widget('bh-lay');
```


##提高bigger的又一利器，还不赶紧使用！
