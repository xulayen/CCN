/**
 * @author bh-lay
 * 
 * @github https://github.com/bh-lay/github-widget-user
 * @modified requires('Date')
 */
(function($){
	//图片
	var imgbase64 = requires('imgbase64.txt');
	
	//css
	var css_tpl = requires('style.css');
	//模版
	var user_tpl = requires('user_tpl.html');
	
	//格式化时间
	function parseDate(input){
		var date = new Date(input);
		return date.getFullYear() + ' - ' + (date.getMonth() + 1) + ' - ' + date.getDate();
	}
	//渲染部分
	function render(str, data){
		if(!str || !data){
			return '';
		}
		return (new Function("obj",
			"var p=[];" +
			"with(obj){p.push('" +
			str.replace(/[\r\t\n]/g, " ")
			   .split("<%").join("\t")
			   .replace(/((^|%>)[^\t]*)'/g, "$1\r")
			   .replace(/\t=(.*?)%>/g, "',$1,'")
			   .split("\t").join("');")
			   .split("%>").join("p.push('")
			   .split("\r").join("\\'")
		+ "');}return p.join('');"))(data);
	}

	//获取用户信息
	function getUserInfo(user_name,callback){
		$.ajax({
			url: 'https://api.github.com/users/' + user_name,
			async: false,
			dataType: 'jsonp',
			success: function(results){
				if(results && results.meta && results.meta.status == 200){
					var user = results.data;
					user.created_at = parseDate(user.created_at);
					callback && callback(null,user);
				}else{
					callback && callback(404);
				}
			}
		});
	}
	
	//创建widget
	function createWidget($dom,user_name){
		if(!user_name || user_name.length< 1){
			return
		}
		$dom.html('<div class="github-user-widget_body github-widget-loading">正在加载</div>');
		getUserInfo(user_name,function(err,user){
			var html;
			if(err){
				html = '<div class="github-user-widget_body github-widget-loading">加载失败</div>';
			}else{
				html = render(user_tpl,{
					'user' : user
				});
			}
			$dom.html(html);
		});
	}
	$.fn.github_user_widget = function(userName){
		$(this).each(function(){
			var $container = $(this);
			var user_name = userName || $container.data('user');
			createWidget($container,user_name);
		});
	};
	$(function(){
		//页面加入css
		$('head').append(css_tpl);
		//置空无用变量
		css_tpl = imgbase64 = null;
		//查找并生成默认的widget
		setTimeout(function(){
			$('.github-widget-user').github_user_widget();
		});
	});
})(jQuery);