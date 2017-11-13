var _car=$(".car");
var RedTx;
//function ttt(w){
//	var r=[];
//	r.push('function mileAni1(obj){if(0<=obj&&obj<200){w=0;}else if(200<=obj&&obj<250){w=1}else if(250<=obj&&obj<325){w=2}')
//	r.push('_car.animate({left:"10rem"},800,function(){')
//	for(var i=0;i<w;i++){
//		r.push('setTimeout(function(){');
//		r.push('_car.addClass("_car'+(i+1)+'");');
//	}
//	for(var i=0;i<w;i++){
//		r.push('},800)');
//	}
//	r.push('});');
//	r.push('}');
//	return r.join('');
//	
//}
//
//console.log(ttt(7));
//var t=ttt(1); 
//eval(t+' mileAni1(200)');


//function mileAni1(){
//	if(0<=obj&&obj<200){
//		w=0;
//	}else if(200<=obj&&obj<250){
//		w=1
//	}else if(250<=obj&&obj<325){
//		w=2
//	}

//	}else if(325<=obj&&obj<375){
//		w=3
//	}else if(375<=obj&&obj<525){
//		w=4
//	}else if(525<=obj&&obj<575){
//		w=5
//	}else if(575<=obj&&obj<675){
//		w=6

//	}else if(675<=obj&&obj<725){
//		w=7
//	}else if(725<=obj&&obj<875){
//		w=8
//	}else if(875<=obj&&obj<925){
//		w=9

//	}


mileAni1(450);
function mileAni1(obj){
	if(0<=obj&&obj<200){
		_car.animate({"left":"6rem"},2000);
		$(".build_bei>img").attr("src","../../static/images/build/beijing.png");
		$(".build_bei .location_name>img").attr("src","../../static/images/build/location.png");
	}else if(200<=obj&&obj<250){
		_car.animate({left:"8rem"},2000,function(){
			_car.addClass("_car1")
		})
	}else if(250<=obj&&obj<300){
		_car.animate({left:"8rem"},2000,function(){
			 setTimeout(function(){
                _car.addClass("_car1");
                setTimeout(function(){
                   _car.addClass('_car2');
                },1500);
            },1000);
		});
	}else if(300<=obj&&obj<350){
		_car.animate({left:"8rem"},3000,function(){
			 setTimeout(function(){
                _car.addClass("_car1");
                setTimeout(function(){
                   _car.addClass('_car2');
                   setTimeout(function(){
	                   _car.addClass('_car3');
	                },2000);
                },1500);
            },1000);
		});
		
	}else if(350<=obj&&obj<500){
		alert(1)
		_car.animate({left:"8rem"},3000,function(){
			 setTimeout(function(){
                _car.addClass("_car1");
                setTimeout(function(){
                   _car.addClass('_car2');
                   setTimeout(function(){
	                   _car.addClass('_car3');
	                   setTimeout(function(){
	                   		_car.addClass('_car4');
	                   },2500)
	                },2000);
                },1500);
            },1000);
           
		});
	}
	
	if(0<=obj&&obj<500){
		$(".build_bei>img").attr("src","../../static/images/build/beijing.png");
		$(".build_bei .location_name>img,.build_shang .location_name>img").attr("src","../../static/images/build/location.png");
		$(".build_shang>img").attr("src","../../static/images/build/shanghai.png");
	}
}












