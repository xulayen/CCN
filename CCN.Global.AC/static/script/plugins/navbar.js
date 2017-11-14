//设置布尔值开关
var bol=true;
//设置定时器
var timer=null;
//设定navbar(就是会移到下方的部分)
var t=$("#navbar").height();

var maxH=50;
var minH=0;
$("#btn").click(function(){
	//判断布尔值
	if(bol){
		timer=setInterval(function(){
			t+=50;
			navT+=50;
			//navbar上限
			if(t>=maxH){
				t=maxH;
				navT=navMaxH;
				clearInterval(timer)
			}
			$("#navbar").animate({height:t+'px'});
		},3)
		//布尔值改为false，下次点击时，就会执行else中的语句
		bol=false;
	}else{
		timer=setInterval(function(){
			t-=50;
			navT-=50;
			//navbar下限
			if(t<=minH){
				t=minH;
				navT=navMinH;
				clearInterval(timer);
			}
			$("#navbar").animate({height:t+'px'});
		},3)
		//布尔值改为true,下次点击时，就会执行if中的语句
		bol=true;
	}
})