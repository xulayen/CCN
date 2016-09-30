//分页
/**
 * data list，
 */
var Paging = function(name,data,param){
	this.param = {
		count:param.count == undefined ? 10 :param.count,	//每页条数
		sum:param.sum == undefined ? 1 :param.sum,	//记录总数
		total:param.total == undefined ? 1 :param.total,	//页数
		current:param.current == undefined ? 1 :param.current,	//当前页
		previous:param.previous == undefined ? 0 :param.previous,	//上一页
		next:param.next == undefined ? 2 :param.next,	//下一页
		first:param.first == undefined ? 0 :param.first,	//第一页
		last:param.last == undefined ? 0 :param.last,	//最后一页
		jump:param.jump == undefined ? 1 :param.jump	//跳到X页
	};
	
	var p = this.param;
	//记算总数
	p.sum = data.length;
	//计算总页数
	p.total = parseInt(p.sum/p.count);
	if(p.sum%p.count != 0){
		p.total = p.total + 1;
	}
	//上一页
	this.previousPage = function(){
		if(p.current > 1){	
			p.previous--;
			p.current--;
			p.next--;
		}
		this.currentData();
	};
	//下一页
	this.nextPage = function(){
		if(p.current < p.total){	
			p.previous++;
			p.current++;
			p.next++;
		}
		this.currentData();
	};
	//第一页
	this.firstPage = function(){
		p.previous = 0;
		p.current = 1;
		p.next = 2;
		this.currentData();
	};
	//最末页
	this.lastPage = function(){
		p.previous = p.total - 1;
		p.current = p.total;
		p.next = p.total + 1;
		this.currentData();
	};
	//跳到
	this.jumpTo = function(jumpTo){
		var value = $(jumpTo).val();
		//正则验证正整数
		var reg = /^[0-9]{1,5}$/;
		if(!reg.exec(value)){
			p.jump = p.current;
		}else{
			p.jump = (jumpTo != undefined ? value : p.jump);
		}
		if(p.jump < 1 && p.jump < (p.total + 1)){
			this.firstPage;
		}else if(p.jump > p.total){
			this.lastPage;
		}else{
			p.previous = p.jump - 1;
			p.current = p.jump;
			p.next = p.jump + 1;
		}
		this.currentData();
	};
	
	$(document).ready(
		function(){
			//初始化
			$("#"+name).html(
			"<input type=\"button\" onclick=\""+name+".firstPage()\"  class=\"btn_paging btn_paging_down\" value=\"首页\" />&nbsp;&nbsp;"+
	    	"<input type=\"button\" onclick=\""+name+".previousPage()\"  class=\"btn_paging btn_paging_up\" value=\"上一页\" />&nbsp;&nbsp;"+
	    	"<input type=\"text\" onkeyup=\""+name+".jumpTo(this)\" class=\"text_paging\" value=\"1\" >&nbsp;&nbsp;"+
	    	"<input type=\"button\" onclick=\""+name+".nextPage()\"  class=\"btn_paging btn_paging_up\" value=\"下一页\" />&nbsp;&nbsp;"+
	    	"<input type=\"button\" onclick=\""+name+".lastPage()\"  class=\"btn_paging btn_paging_up\" value=\"末页\" />&nbsp;&nbsp;");
			//默认样式修改
			$("#"+name+" :button").click(function(){
				var value = $(this).val();
				$("#"+name+" :button").each(function (i,n){
					//alert($(this).attr("class"));
					if($(this).val() == value){
						$(this).attr("class","btn_paging btn_paging_down");
					}else{
						$(this).attr("class","btn_paging btn_paging_up");
					}
				});
			});
		}
	);
	
	//currentData
	this.currentData = function(){
		//当前页数显示
		$("#"+name+" :text").val(p.current);
		var rs = new Array();
		for(var i=0;i<p.sum;i++){
			var start,end;
			start = p.count*(p.current-1)-1;
			end = p.count*(p.current);
			if(i > start && i < end){
				rs.push(data[i]);
			}
		}
		//##############这里可以插入其他方法##########
		this.extend(rs);
		//############################################
		return rs;
	}
	
	this.extend = function(rs){
		//...
	}
}