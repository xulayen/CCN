//初始化
var myChart = echarts.init(document.getElementById('main'));
//参数设置
var option={
			tooltip : {  //提示框组件
				trigger: 'axis',
				show:true,
				formatter:function(data){
					var res = data[0].name + '<br/>', val,percent;
                    for(var i = 0, length = data.length; i < data.length; i++) {
                        val = data[i].value;
                        percent=Math.ceil((data[i].value/data[0].value)*100)+'%';
                        res += data[i].seriesName + '：'+ val +'&nbsp;&nbsp;'+percent+ '<br/>';
                    }
                    return res;
				},
				backgroundColor:'#fff',
				textStyle: {
		            color: '#333' ,
		            fontSize:16
		           	
		       },
		       borderWidth:'1',
		       borderColor:'#333'
			},
			legend: {   //图例组件
				data:[
				'湖南-长沙市-长沙陈-SXXAXAC','广东-广东市-广东陈-SXXAXAC','河南-河南市-河南陈-SXXAXAC','江西-江西市-江西陈-SXXAXAC','湖北-湖北市-湖北陈-SXXAXAC','海南-海南市-海南陈-SXXAXAC','浙江-浙江市-浙江陈-SXXAXAC','江苏-江苏市-江苏陈-SXXAXAC','福建-福建市-福建陈-SXXAXAC','安徽-安徽市-安徽陈-SXXAXAC','云南-云南市-云南陈-SXXAXAC','广西-广西市-广西陈-SXXAXAC','河北-河北市-河北陈-SXXAXAC','山东-山东市-山东陈-SXXAXAC','贵州-贵州市-贵州陈-SXXAXAC','重庆-重庆市-重庆陈-SXXAXAC','新疆-新疆市-新疆陈-SXXAXAC','四川-四川市-四川陈-SXXAXAC','甘肃-甘肃市-甘肃陈-SXXAXAC','西安-西安市-西安陈-SXXAXAC','西安-西安市-西安马-SXXAXAM','咸阳-咸阳市-咸阳谢-SXXAXAM','北京-北京市-北京陈-SXXAXAC','天津-天津市-天津陈-SXXAXAC','辽宁-辽宁市-辽宁陈-SXXAXAC','青海-青海市-青海陈-SXXAXAC','内蒙古-内蒙古市-内蒙古陈-SXXAXAC','宁夏-宁夏市-宁夏陈-SXXAXAC','上海-上海市-上海陈-SXXAXAC','西藏-西藏市-西藏陈-SXXAXAC','吉林-吉林市-吉林陈-SXXAXAC','天津-天津市-天津陈-SXXAXAC',
				
				], 
				selected:{
					'西安-西安市-西安陈-SXXAXAC':false,
					'西安-西安市-西安马-SXXAXAM':false,
					'咸阳-咸阳市-咸阳谢-SXXAXAM':false,
					'广东-广东市-广东陈-SXXAXAC':false,
					'河南-河南市-河南陈-SXXAXAC':false,
					'江西-江西市-江西陈-SXXAXAC':false,
					'湖北-湖北市-湖北陈-SXXAXAC':false,
					'海南-海南市-海南陈-SXXAXAC':false,
					'浙江-浙江市-浙江陈-SXXAXAC':false,
					'江苏-江苏市-江苏陈-SXXAXAC':false,
					'福建-福建市-福建陈-SXXAXAC':false,
					'安徽-安徽市-安徽陈-SXXAXAC':false,
					'云南-云南市-云南陈-SXXAXAC':false,
					'广西-广西市-广西陈-SXXAXAC':false,
					'河北-河北市-河北陈-SXXAXAC':false,
					'山东-山东市-山东陈-SXXAXAC':false,
					'贵州-贵州市-贵州陈-SXXAXAC':false,
					'重庆-重庆市-重庆陈-SXXAXAC':false,
					'新疆-新疆市-新疆陈-SXXAXAC':false,
				},
			//	icon: 'image://img/ico2.png',
				show:false,
				padding:[10,10],
				width:900,
				height:130,
				itemWidth: 25,             // 图例图形宽度
        		itemHeight: 22,  
				textStyle: {
		            color: '#333' ,
		            fontSize:16
		           	
		       },
		        itemGap: 23
			},
			grid: {
		        x:60,
		        y:100,
		        x2:60,
		        y2:30,
				 shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
		    },
			calculable : true,
			xAxis : [   //直角坐标系grid的x轴
				{
					type : 'category',
					boundaryGap : false,
					data : ['2017-8-11','2017-8-12','2017-8-13','2017-8-14','2017-8-15','2017-8-16','2017-8-17']
				}
			],
			yAxis : [  //直角坐标系grid的y轴
				{
					type : 'value',
					
				}
			],
			series : [  //系列列表
				{
					name:'西安-西安市-西安陈-SXXAXAC',
					type:'line',
					stack: '总量',
					data:[450000, 450000, 450000, 450000, 450000, 450000, 450000]
				},
				{
					name:'西安-西安市-西安马-SXXAXAM',
					type:'line',
					stack: '总量',
					data:[220, 20002, 191, 234, 290, 30000, 30000]
				},
				{
					name:'咸阳-咸阳市-咸阳谢-SXXAXAM',
					type:'line',
					stack: '总量',
					data:[40000, 20002, 201, 154, 190, 40000, 40000],
					itemStyle:{
						 normal: {
						lineStyle: {            // 系列级个性化折线样式，横向渐变描边
							
							shadowColor : 'rgba(0,0,0,1)',
							shadowBlur: 10,
							shadowOffsetX: 8,
							shadowOffsetY: 8
						}
						 }
					}
				},
				{
					name:'湖南-长沙市-长沙陈-SXXAXAC',
					type:'line',
					stack: '总量',
					data:[320, 33002, 301, 334, 390, 50000, 50000]
				},
				{
					name:'广东-广东市-广东陈-SXXAXAC',
					type:'line',
					stack: '总量',
					data:[820, 93002, 901, 934, 1290, 60000, 60000]
				},
				{
					name:'河南-河南市-河南陈-SXXAXAC',
					type:'line',
					stack: '总量',
					data:[820, 932, 90001, 934, 10090, 70000, 70000]
				},
				{
					name:'江西-江西市-江西陈-SXXAXAC',
					type:'line',
					stack: '总量1',
					data:[820, 93002, 901, 9304, 12090, 80000, 80000]
				},
				{
					name:'湖北-湖北市-湖北陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[8200, 932, 901, 30034, 1290, 90000, 90000]
				},
				{
					name:'海南-海南市-海南陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[820, 9302, 901, 900, 12090, 10000, 10000]
				},
				{
					name:'浙江-浙江市-浙江陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[820, 9000, 901, 9000, 12900, 11000, 11000]
				},
				{
					name:'江苏-江苏市-江苏陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[800, 900, 901, 10000, 1290, 1400, 1400]
				},
				{
					name:'福建-福建市-福建陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[7000, 9000, 901, 900, 12090, 1400, 1400]
				},
				{
					name:'安徽-安徽市-安徽陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[6000, 900, 901, 900, 12090, 1400, 1400]
				},
				{
					name:'云南-云南市-云南陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[600, 9000, 8001, 900, 12090, 14000, 14000]
				},
				{
					name:'广西-广西市-广西陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[600, 9000, 801, 7000, 1290, 1400, 1400]
				},
				{
					name:'河北-河北市-河北陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[800, 900, 901, 10000, 1290, 1400, 1400]
				},
				{
					name:'山东-山东市-山东陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[7000, 9000, 901, 900, 12090, 1400, 1400]
				},
				{
					name:'贵州-贵州市-贵州陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[6000, 900, 901, 900, 12090, 1400, 1400]
				},
				{
					name:'重庆-重庆市-重庆陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[600, 9000, 8001, 900, 12090, 14000, 14000]
				},
				{
					name:'新疆-新疆市-新疆陈-SXXAXAC',
					type:'line',
					stack: '总量2',
					data:[600, 9000, 801, 7000, 1290, 1400, 1400]
				},
			]
		};
// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	
	//全选和不选
	var selectArr = myChart.getOption().legend[0].data;
	var selectIcon = myChart.getOption().legend[0].selected;
	
	
//	$(".product_contanier p").click(function(){
//		var tt=$(this).find("label").html();
//		//console.log(tt);
//		selectIcon[tt]=true;
//		option.legend.selected = selectIcon;
//		 myChart.setOption(option);
//	})
	
	$(".province").click(function(event){
		event.stopPropagation();
		// event.preventDefault();
		//console.log($(".select_location_cnt").css("display"));
		if($(this).children(".select_location_cnt").css("display")=="none"){
			$(this).find(".triggleIco").css({"background":'#bfbfbf'});
			$(this).find(".select_location_cnt").css({"display":"block"});
			$(this).find(".triggleIco span").addClass("active");
		}else{
			$(this).find(".select_location_cnt").css({"display":"none"});
			$(this).find(".triggleIco span").removeClass("active");
			$(this).find(".triggleIco").css({"background":'#f2f2f2'});
		}
		$(this).siblings().find(".select_location_cnt").hide();
		$(this).siblings().find(".triggleIco").css({"background":'#f2f2f2'});
		$(this).siblings().find(".triggleIco span").removeClass("active");
	})
	$(".select_location_cnt>p").click(function(){
		console.log(1);
		var name=$(this).find("label").html();
		console.log(name);
		if(($(this).find("input")).is(':checked')) {
			selectIcon[name]=true;
			$(this).find("span").css({"opacity":"1"});
		}else{
			selectIcon[name]=false;
			$(this).find("span").css({"opacity":"0"});
		}
		option.legend.selected = selectIcon;
		myChart.setOption(option);
		
	})
	   
	$('#selectall').click(function(){
	    if(($(this).find("input")).is(':checked')) {
			 var val = true;
			  $(this).find("label").html('反选');
			  $(".select_location_cnt>p span").css({"opacity":"1"});
		}else{
			var val = false;
			 $(this).find("label").html('全选');
			 $(".select_location_cnt>p span").css({"opacity":"0"});
		}
	    var obj = {};
	    for(var key in selectArr){
	        obj[selectArr[key]] = val;
	    }    
	    option.legend.selected = obj;
	    myChart.setOption(option);
	});
	
	

	
	

	


	
	
