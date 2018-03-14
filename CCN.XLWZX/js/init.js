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
				 
				'全国','湖南','广东','河南','江西','湖北','湖南','浙江','江苏','福建','安徽','云南','广西','河北','山东','贵州','重庆','新疆','四川','甘肃','陕西','北京','天津','辽林','青海','内蒙古','宁夏','上海','西藏','吉林','天津1','全选',
				
				], 
				selected:{
					'湖南':false,
					'广东':false,
					'河南':false,
					'江西':false,
					'湖北':false,
					'湖南':false,
					'浙江':false,
					'江苏':false,
					'福建':false,
					'安徽':false,
					'云南':false,
					'广西':false,
					'河北':false,
					'山东':false,
					'贵州':false,
					'重庆':false,
					'新疆':false,
					'四川':false,
					'甘肃':false,
					'陕西':false,
					'北京':false,
					'天津':false,
					'辽宁':false,
					'青海':false,
					'内蒙古':false,
					'宁夏':false,
					'上海':false,
					'西藏':false,
					'吉林':false,
					'天津1':false,
				},
//				icon: 'image://img/ico1.png',
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
				//没选中
				//inactiveColor:'red',
				//inactiveIcon:'image://img/ico2.png',
				
			},
			grid: {
		        x:60,
		        y:90,
		        x2:60,
		        y2:30,
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
					name:'全国',
					type:'line',
					stack: '总量',
					data:[450000, 450000, 450000, 450000, 450000, 450000,450000]
				},
				{
					name:'湖南',
					type:'line',
					stack: '总量',
					data:[220, 20002, 191, 234, 290, 30000, 30000]
				},
				{
					name:'广东',
					type:'line',
					stack: '总量',
					data:[40000, 20002, 201, 154, 190, 40000, 40000]
				},
				{
					name:'河南',
					type:'line',
					stack: '总量',
					data:[320, 33002, 301, 334, 390, 50000, 50000]
				},
				{
					name:'江西',
					type:'line',
					stack: '总量',
					data:[820, 93002, 901, 934, 1290, 60000, 60000]
				},
				{
					name:'湖北',
					type:'line',
					stack: '总量',
					data:[820, 932, 90001, 934, 10090, 70000, 70000]
				},
				{
					name:'浙江',
					type:'line',
					stack: '总量1',
					data:[820, 93002, 901, 9304, 12090, 80000, 80000]
				},
				{
					name:'江苏',
					type:'line',
					stack: '总量2',
					data:[8200, 932, 901, 30034, 1290, 90000, 90000]
				},
				{
					name:'福建',
					type:'line',
					stack: '总量2',
					data:[820, 9302, 901, 900, 12090, 10000, 10000]
				},
				{
					name:'安徽',
					type:'line',
					stack: '总量2',
					data:[820, 9000, 901, 9000, 12900, 11000, 11000]
				},
				{
					name:'云南',
					type:'line',
					stack: '总量2',
					data:[800, 900, 901, 10000, 1290, 1400, 1400]
				},
				{
					name:'广西',
					type:'line',
					stack: '总量2',
					data:[7000, 9000, 901, 900, 12090, 1400, 1400]
				},
				{
					name:'河北',
					type:'line',
					stack: '总量2',
					data:[6000, 900, 901, 900, 12090, 1400, 1400]
				},
				{
					name:'山东',
					type:'line',
					stack: '总量2',
					data:[600, 9000, 8001, 900, 12090, 14000, 14000]
				},
				{
					name:'贵州',
					type:'line',
					stack: '总量2',
					data:[600, 9000, 801, 7000, 1290, 1400, 1400]
				},
				{
					name:'重庆',
					type:'line',
					stack: '总量2',
					data:[6000, 900, 701, 700, 12090, 1400, 1400]
				},
				{
					name:'新疆',
					type:'line',
					stack: '总量2',
					data:[600, 800, 801, 700, 1290, 1400, 1400]
				},
				{
					name:'四川',
					type:'line',
					stack: '总量2',
					data:[600, 600, 801, 700, 1290, 1400, 1400]
				},
				{
					name:'甘肃',
					type:'line',
					stack: '总量2',
					data:[600, 500, 801, 700, 1290, 1400, 1400]
				},
				{
					name:'陕西',
					type:'line',
					stack: '总量2',
					data:[500, 500, 801, 700, 1290, 1400, 1400]
				},
				{
					name:'北京',
					type:'line',
					stack: '总量2',
					data:[500, 800, 801, 700, 1290, 1400, 1400]
				},
				{
					name:'天津',
					type:'line',
					stack: '总量2',
					data:[800, 800, 801, 700, 1290, 1400, 1400]
				},
				{
					name:'辽宁',
					type:'line',
					stack: '总量2',
					data:[800, 800, 801, 800, 1290, 1400, 1400]
				},
				{
					name:'青海',
					type:'line',
					stack: '总量2',
					data:[800, 800, 801, 800, 800, 1400, 1400]
				},
				{
					name:'内蒙古',
					type:'line',
					stack: '总量2',
					data:[800, 800, 801, 800, 900, 1400, 1400]
				},
				{
					name:'宁夏',
					type:'line',
					stack: '总量2',
					data:[800, 1000, 801, 800, 900, 1400, 1400]
				},
				{
					name:'上海',
					type:'line',
					stack: '总量2',
					data:[1000, 1000, 801, 800, 900, 1400, 1400]
				},
				{
					name:'西藏',
					type:'line',
					stack: '总量2',
					data:[1000, 1000, 1001, 800, 900, 1400, 1400]
				},
				{
					name:'吉林',
					type:'line',
					stack: '总量2',
					data:[1000, 1000, 801, 800, 1000, 1400, 1400]
				},
				{
					name:'天津1',
					type:'line',
					stack: '总量2',
					data:[1200, 1000, 801, 800, 900, 1400, 1400]
				},
			]
		};
// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
		
	var selectArr = myChart.getOption().legend[0].data;
	var selectIcon = myChart.getOption().legend[0];
	$(".country").click(function(){
		var name=$(this).find("label").html();
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
	   
	//全选和不选        
	$('#selectall').click(function(){
		if(($(this).find("input")).is(':checked')) {
			 var val = true;
			  $(this).find("label").html('反选');
			  $(".country span").css({"opacity":"1"});
		}else{
			var val = false;
			 $(this).find("label").html('全选');
			 $(".country span").css({"opacity":"0"});
		}
	    /*var flag = $(this).attr('flag');
	    if(flag == 1){
	        var val = true;
	        $(this).attr('flag',0);
	        $(this).find("label").html('反选');
	        $(".country input").attr("checked",true);
	       
	    }else{
	        var val = false;
	         $(this).attr('flag',1);
	         $(this).find("label").html('全选');
	        //selectArr[0]=true;
	        $(".country input").attr("checked",false);
	    }*/
	    var obj = {};
	    for(var key in selectArr){
	        obj[selectArr[key]] = val;
	    }    
	    option.legend.selected = obj;
	    myChart.setOption(option);
	});
	



	
	
