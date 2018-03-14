//加载车品牌列表
$.ajax({
	type:"get",
	url:"http://shelluat.weixin.yesno.com.cn/home/api/getCarBrandList", 
	async:false,  
	dataType:"json", 
	data:{},
	success: function (result){
        if(result.code === 1){
            var data = result.data;
            if (data.length === 0){
                return false;
            }
            var key = data[0]['py'];
            var html = '<h3>' + key + '</h3>';
            data.forEach(function (item){
                if (item.py === key){
                    html += "<p data-id="+item.id+
                    "><img src=" +item.img+
                    "><span class='_text'>"+ item.name +
                    "</span></p>";
                } else {
                    key = item.py;
                    html += "<h3>" + key + 
                            "</h3><p data-id="+item.id+"><img src="+item.img+
                            "><span class='_text'>"+ item.name + 
                            "</span></p>";
                }
            });
            $('.carCnt').append(html);
        }
    }

});
//选择车品牌页面跳转	
$(".car_name").click(function(){
	$(".select_brandCnt").show();
	$(".brand_container").hide();
});	
//公共
function common(){
	$(".mask").hide();
	$(".typeList").animate({"bottom":"-18rem"},300).hide();
	$(".active").removeClass("active");
	$(".select_brandCnt").hide();
	$(".brand_container").show();
}

//选择车品牌后赋值给选择标签
var html=null;
function _html(self){
	$(self).addClass("active").siblings().removeClass("active");
	var type=$(self).html();
	var carname=$(".carNames span").html();
	if(carname.substr(1,1)==type.substr(1,1)){
		html=type;
	}else{
		html=carname +'&nbsp;&nbsp;'+ type;
	}
	$(".carName").html(html);
}

//公用ajax封装
var ajaxStore = {
   getTypeList:function(self){
   		var data_id=$(self).attr("data-id")
	    var src=$(self).find("img").attr("src");
	    var text=$(self).find("._text").text();
	    $(".mask").show();
	    $(".typeList").children().remove();
   		$.ajax({
			type:"get",
			url:"http://shelluat.weixin.yesno.com.cn/home/api/getCarTypelList", 
			async:false,  
			dataType:"json", 
			data:{"brand_id":data_id},
			success: function (result){
				if(result.code === 1){
					var data = result.data;
				 	if (data.length === 0){
	                    return false;
	                }
				 	var html = '<p class="carNames"><img src=' + src + 
				 			   '><span>'+text+
				 			   '</span></p>'+
				 			   '<div>';
				 	data.forEach(function (item){
				 		html+='<p>'+ item.name + '</p>';
				 	});
				 	html+='</div>';
				 	$('.typeList').append(html);
				}
			}
		})
   		$(".typeList").show().animate({"bottom":"0"});
   }
}
//车型号
$(".carCnt p").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	ajaxStore.getTypeList(this);
	$(".mask").click(function(){
		$(".active").removeClass("active");
	})
	$(".typeList>div p").click(function(){
		common();
		_html(this);

	})
})

//热门车型
$(".hotCars li").click(function(){
	ajaxStore.getTypeList(this);
	$(".typeList>div p").click(function(){
		common();
		_html(this);
	})
})

//搜索
$(".carInpu").click(function(){
	$("body").addClass("bg2");
	$(".bgg").show();
	$(".carList").addClass("_blur");
	$(".carReturn").removeClass("carReturn").addClass("reback");
})
//返回
$(".carReturn").click(function(){
	$(".select_brandCnt").hide();
	$(".brand_container").show();
})
$(".carSearch").on("click",".reback",function(){
	$("body").removeClass("bg2");
	$(".bgg").hide();
	$(".carList").removeClass("_blur");
	$(this).removeClass("reback").addClass("carReturn");
	$(".select_brandCnt").show();
	$(".brand_container").hide();
})

$(".carbtn").click(function(){
	var val=$(".carInpu").val();
	$.ajax({  
		type:"get",
		url:"http://shelluat.weixin.yesno.com.cn/home/api/searchCarBrand", 
		async:false,  
		dataType:"json", 
		data:{"brand_name":val},
		success: function (result){
			console.log(result);
	        if(result.code === 1){
	            var data = result.data;
	            console.log(data);
	            if (data.length === 0){
	                return false;
	            }
	            var html="<p data-id="+data[0]['id']+
	                    "><img src=" +data[0]['img']+
	                    "><span class='_text'>"+ data[0]['name'] +
	                    "</span></p>";
	            $('.searchCar').append(html);
	        }
	    }
	})
	
	$(".searchCar p").click(function(){
		ajaxStore.getTypeList(this);
		$(".typeList>div p").click(function(){
			common();
			_html(this);
			$("body").removeClass("bg2");
			$(".bgg").hide();
			$(".carList").removeClass("_blur");
			$(".carInpu").val("");
			$(".searchCar").children().remove();
		})
	})
})

$(".mask").click(function(){
	$(".typeList").animate({"bottom":"-18rem"},300).hide();
	$(this).hide();
})



