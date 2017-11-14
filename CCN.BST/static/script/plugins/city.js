var sb=new StringBuffer();
$.each(cityJson,
	function(i,val){
	if(val.item_code.substr(2,4)=='0000'){
		sb.append("<li value='"+val.item_code+"'>"+val.item_name+"</li>");
	}
})
$("#choosePro").append(sb.toString());

//点击li 省值的变化
$("#choosePro li").click(function(){
	var ss=$(this).html();
	var _val=$(this).attr("value");
	$("#province").html(ss);
	$("#province").attr("value",_val);
    doProvAndCityRelation();
    
})

//省值变化时，处理市 
function doProvAndCityRelation(){
	var city = $("#chooseCity");
	var county = $("#chooseCounty");
	if (city.children().length >= 1) {
		city.empty();
	}
	if (county.children().length >=1) {
		county.empty();
	}
	var sb=new StringBuffer();
	$.each(cityJson,
		function(i,val){
			if(val.item_code.substr(0,2)==$("#province").attr("value").substr(0,2) && val.item_code.substr(2,4)!='0000' && val.item_code.substr(4,2)=='00'){
				sb.append("<li value='"+val.item_code+"'>"+val.item_name+"</li>");
			}
	})
	$("#chooseCity").append(sb.toString());
	$("#citys").css("color","#231815");
	$(".triang2").addClass("active")
}

//点击li 市值的变化
$(".province_cnt").delegate("#chooseCity li","click", function(){
	var ss=$(this).html();
	var _val=$(this).attr("value");
	var county = $("#chooseCounty");
	$("#citys").html(ss);
	$("#citys").attr("value",_val);
	doCityAndCountyRelation();
	
	if (county.children().length >= 1) {
		$("#county").css("color","#231815");
		$(".triang3").addClass("active")
	}else{
		$("#county").html("所在区");
		$("#county").css("color","#b2b2b2");
		$(".triang3").removeClass("active");
	}
})

//市值变化时，处理县 
function doCityAndCountyRelation(){
	var cityVal = $("#citys").attr("value");
	var county = $("#chooseCounty");
	if (county.children().length >= 1) {
	    county.empty();   	   
	}
	
	var sb = new StringBuffer();
  	$.each(cityJson,
  		function(i,val){
  			if (cityVal == '110100' || cityVal == "120100" || cityVal == "310100" || cityVal == "500100"){
  				if (val.item_code.substr(0, 3) == cityVal.substr(0, 3) && val.item_code.substr(4, 2) != '00') {
          			sb.append("<li value='"+val.item_code+"'>"+val.item_name+"</li>");
       			}
  			}else{
  				if (val.item_code.substr(0, 4) == cityVal.substr(0, 4) && val.item_code.substr(4, 2) != '00') {
         			sb.append("<li value='"+val.item_code+"'>"+val.item_name+"</li>");
        		}
  			}
  	});
  	$("#chooseCounty").append(sb.toString());
}

//点击li 县值的变化
$(".province_cnt").delegate("#chooseCounty li","click", function(){
//	alert(1);
	var ss=$(this).html();
	var _val=$(this).attr("value");
	console.log(ss);
	console.log()
	$("#county").html(ss);
	$("#county").attr("value",_val);
	doCityAndCountyRelation();
})


function StringBuffer(str) {
	var arr = [];
	str = str || "";
	var size = 0; // 存放数组大小
	arr.push(str);
	// 追加字符串
	this.append = function(str1) {
		arr.push(str1);
		return this;
	};
	// 返回字符串
	this.toString = function() {
		return arr.join("");
	};
	// 清空 
	this.clear = function(key) {
		size = 0;
		arr = [];
	};
	// 返回数组大小 
	this.size = function() {
		return size;
	};
	// 返回数组 
	this.toArray = function() {
		return buffer;
	};
	// 倒序返回字符串 
	this.doReverse = function() {
		var str = buffer.join('');
		str = str.split('');
		return str.reverse().join('');
	};
}