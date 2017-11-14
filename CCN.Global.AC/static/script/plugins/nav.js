//轮播图
//  var swiper = new Swiper('.swiper-container', {
//      pagination: '.swiper-pagination',
//      nextButton: '.swiper-button-next',
//      prevButton: '.swiper-button-prev',
//      paginationClickable: true,
//      spaceBetween: 30,
//      centeredSlides: true,
//      autoplay: 3500,
//      speed:1100,
//      lazyLoading:true,
//      autoplayDisableOnInteraction: false
//  });
//	$(".swiper-container").mouseenter(function () {//滑过悬停
//  	swiper.stopAutoplay();//swiper 为上面你swiper实例化的名称
//	}).mouseleave(function(){//离开开启
//	    swiper.startAutoplay();
//	});

//define(function(){
	
    $('.slick').slick({
    	autoplay:true,
    	speed:1500,
    	touchMove:true,
    	autoplaySpeed:2100,
    	arrows:true,
    	swipe:true,
    	useCSS:false,
    	vertical:false
    })

	
//banner图点击手指
	$(".layer_img,.layer_img1").mouseover(function(){
		$(".layer_img,.layer_img1").addClass("cursorPoint");
	})
	
//弹窗
	$('.layer_img').click(function(){
		$(".pop_layer img").attr("src", "../../static/images/english.gif");
		
		$('.pop_layer,.gif_mask').show();
		$('.navbar').css('border-top','none');
//		setTimeout(function(){
//			$('.pop_layer,.gif_mask').hide();
//		},18500)
		c=setTimeout(function () {
        $('.pop_layer,.gif_mask').hide();
	        $(".pop_layer img").attr("src", "");
	                clearTimeout(c);
	    }, 18000)
	})
//	$('.layer_img1').click(function(){
//		$('.pop_layer1,.gif_mask').show();
//		$('.navbar').css('border-top','none');
//		clearTimeout(timer);
//		timer=setTimeout(function(){
//			$('.pop_layer1,.gif_mask').hide();
//		},18500)
//	})
	
//textarea
	$("textarea").focus(function(){
		$('.tip_text').hide();
	})
	$("textarea").blur(function(){
		if($("textarea").val()==""){
			$('.tip_text').show();
		}else{
			$('.tip_text').hide();
		}
	})
	$('.tip_text').click(function(){
		$('.tip_text').hide();
		$("textarea").focus();
	})
	
//reset
	$('.inpu_res').click(function(){
		$('.cnt_inpu input,textarea').val('');
		$('.tip_text').show();
	})
	
//label
	var c=null;
	$(".layer_clcik,.label_player").click(function(){
		$(".pop_layer img").attr("src", "../../static/images/english.gif");
		$('.pop_layer,.gif_mask').show();
		$('.navbar').css({'height':'0','border-top':'none'});
		c= setTimeout(function () {
        $('.pop_layer,.gif_mask').hide();
        $(".pop_layer img").attr("src", "");
	        clearTimeout(c);
	    }, 18000);
	})
	
	$('.hideGif').click(function(){
		 $(".pop_layer img").attr("src", "");
		$('.pop_layer,.gif_mask,.pop_layer1').hide();
		clearTimeout(c);
	})
	
//下拉列表
	var imgss=['China.png','Iran.png','Indonesia.png','Iraq.png','Russian.png','SaudiaArabia.png','UK.png'];
	var texts=['China','Iran','Indonesia','Iraq','Russia','SaudiaArabia','uk'];
	
	function GetQueryString (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]); return '';
   }

	$('.country_left').click(function(event){
		if($(".countryContainer").is(":hidden")){
			$(".countryContainer").show()
		}else{
			$(".countryContainer").hide()
		}
		event.stopPropagation(); 
	})
	
	$('#currentCountry').val(GetQueryString("c"));
	$("#count").html(decodeURI((GetQueryString("c")|| 'China')));
	$(".country_img img").attr('src','../../static/images/'+imgss[GetQueryString("t")||[0]]);
		
	$("#flags li").click(function(){
		var index=$(this).index();
		$("#count").html(texts[index]);
		$(".country_img img").attr('src','../../static/images/'+imgss[index]);

    //改变国家
		$("#currentCountry").val($("#count").html());
		$('form')[0].submit();
		location.href="index.html?c="+$('#currentCountry').val()+"&t="+index+"&n="+GetQueryString("n");
		
	})
	
	$(".country_right").click(function(event){
		if($(".countryContainer1").is(":hidden")){
			$(".countryContainer1").show()
		}else{
			$(".countryContainer1").hide()
		}
		event.stopPropagation(); 
	})
	
	$('#currentLanguage').val(GetQueryString("n"));
	$('.select_language').html(decodeURI(GetQueryString("n")||'Mandarin'));
	
	$("#_select li").click(function(){
		$(".select_language").html($(this).html());
		
		//改变语言
		$('#currentLanguage').val($(".select_language").html());
		$('form')[0].submit();
		location.href="index.html?n="+$('#currentLanguage').val()+"&t="+GetQueryString("t")+"&c="+GetQueryString("c");
	})
	
//点击yes no
	$(".replaySure").click(function(){
		$(".resultYes").css({"visibility":"visible"});
		$(".resultYes").css({"display":"block"});
		$(".resultNo").hide();
		$(this).css({"background":"#82BC00","color":"#fff"})
		$(".replayNo").css({"background":"#9C9C9C","color":"#ECECEC"});
	})
	$(".replayNo").click(function(){
		$(".resultNo").show();
		$(".resultYes").css({"display":"none"})
		$(this).css({"background":"#E2231A","color":"#fff"});
		$(".replaySure").css({"background":"#9C9C9C","color":"#FEFEFE"});
	})
	

	if(navigator.userAgent.match(/mobile/i) && screen.width<767){
		var ht=$(".cnt_left").height();
		$("#_select,#flags").css({"top":'auto','height':'auto','max-height':'260px'});
		
		$('.country_left').click(function(){
			$(".countryContainer,.gif_mask").show();
			$('.select_flag').animate({'bottom':'0'});
			$("#navbar").css('border-top','none');
			$('body').css('position','fixed');
			
			$(".gif_mask").on('touchmove',function(e){
              e.preventDefault();  //阻止默认行为
         	})
		})
		
		$(".gif_mask").click(function(){
			$('.select_flag,#_select').animate({'bottom':'-260px'});
			$('body').css('position','relative');
			$('.pop_layer,.pop_layer1,.gif_mask').hide();
		})
		
		$(".select_flag li,#_select li").click(function(){
			$('body').css('position','relative');
			$('.select_flag,#_select').animate({'bottom':'-260px'},400,function(){
				$(".gif_mask").hide();
				$('form')[0].submit();
			});
		})
		
		$('.country_right').click(function(){
			$(".gif_mask,.countryContainer1").show();
			$('#_select').animate({'bottom':'0'});
			$("#navbar").css('border-top','none');
			$('body').css('position','fixed');
			
			$(".gif_mask").on('touchmove',function(e){
              e.preventDefault();  //阻止默认行为
            })

		})
		
	}else{
		$("*").click(function (event) {
			if (!$(this).hasClass("countryContainer")&&!$(this).hasClass("country_left")){
				$(".countryContainer").hide();
			}
			if (!$(this).hasClass("countryContainer1")&&!$(this).hasClass("country_right")){
				$(".countryContainer1").hide();
			}
		});
		
		$('.gif_mask').click(function(){
			$('.pop_layer,.gif_mask,.pop_layer1').hide();
		})
		
		//动态获取cnt_left的高度，赋给下拉菜单的top值
		var ht=$(".cnt_left").height();
		$("#_select,#flags").css("top",ht+4+'px');
		
		//获取下拉菜单到底端的距离  
		var tt=$("body").outerHeight(true);
		var ss=$("body").outerHeight(true)-$(".cn_main").offset().top-$(".cnt_left").height()-114;
		$("#flags,#_select").css({'height':'auto','max-height':ss});
	
		//动态设置防伪码输入框的margin-top值
		var inpu_margin=ht-$(".limitWidth").eq(0).height()-$(".limitWidth").eq(1).height()-45;
		//console.log(inpu_margin)
		$("#inpt").css("margin-top",inpu_margin+"px");
		
	
		//placeholder兼容性处理
		//判断浏览器是否支持placeholder属性
	    supportPlaceholder='placeholder'in document.createElement('input'),
	    placeholder=function(input){
	    	var text = input.attr('placeholder'),
	    	defaultValue = input.defaultValue;
	    	if(!defaultValue){
	    		input.val(text).addClass("phcolor");
	    	}
	   		input.focus(function(){
		        if(input.val() == text){
		        	$(this).val("");
		        }
	    	});
		    input.blur(function(){
		        if(input.val() == ""){
		            $(this).val(text).addClass("phcolor");
		        }
		    });
	    //输入的字符不为灰色
		    input.keydown(function(){
		        $(this).removeClass("phcolor");
		    });
	 	 };
	  	//当浏览器不支持placeholder属性时，调用placeholder函数
	  	if(!supportPlaceholder){
		    $('input').each(function(){
		        text = $(this).attr("placeholder");
		        if($(this).attr("type") == "text"){
		            placeholder($(this));
		        }
		    });
	  	}
	}
//})	 