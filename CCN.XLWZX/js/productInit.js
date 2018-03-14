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
		            fontSize:16,
		       },
		       borderWidth:'1',
		       borderColor:'#333'
			},
			legend: {   //图例组件
				
				data:[
				 
				'一口怪兽','能量兽','雷霆兽','擎天兽','霸王兽','九总珍品','5元','10元','15元','20元','福和祥','福和祥5元','福和祥10元','福和祥15元','福和祥20元','','九总','九总5元','九总10元','九总15元','九总20元',
				
				], 
				selected:{
					'能量兽':false,
					'雷霆兽':false,
					'擎天兽':false,
					'霸王兽':false,
					'九总珍品':false,
					'5元':false,
					'10元':false,
					'15元':false,
					'20元':false,
					'福和祥':false,
					'福和祥5元':false,
					'福和祥10元':false,
					'福和祥15元':false,
					'福和祥20元':false,
					'九总':false,
					'九总5元':false,
					'九总10元':false,
					'九总15元':false,
					'九总20元':false,
				},
				icon: 'image://img/ico2.png',
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
					name:'一口怪兽',
					type:'line',
					stack: '总量',
					data:[450000, 450000, 450000, 450000, 450000, 450000, 450000]
				},
				{
					name:'能量兽',
					type:'line',
					stack: '总量',
					data:[220, 20002, 191, 234, 290, 30000, 30000]
				},
				{
					name:'雷霆兽',
					type:'line',
					stack: '总量',
					data:[40000, 20002, 201, 154, 190, 40000, 40000]
				},
				{
					name:'擎天兽',
					type:'line',
					stack: '总量',
					data:[320, 33002, 301, 334, 390, 50000, 50000]
				},
				{
					name:'霸王兽',
					type:'line',
					stack: '总量',
					data:[820, 93002, 901, 934, 1290, 60000, 60000]
				},
				{
					name:'九总珍品',
					type:'line',
					stack: '总量',
					data:[820, 932, 90001, 934, 10090, 70000, 70000]
				},
				{
					name:'5元',
					type:'line',
					stack: '总量',
					data:[820, 93002, 901, 9304, 12090, 80000, 80000]
				},
				{
					name:'10元',
					type:'line',
					stack: '总量',
					data:[8200, 932, 901, 30034, 1290, 90000, 90000]
				},
				{
					name:'15元',
					type:'line',
					stack: '总量',
					data:[820, 9302, 901, 900, 12090, 10000, 10000]
				},
				{
					name:'20元',
					type:'line',
					stack: '总量2',
					data:[820, 9000, 901, 9000, 12900, 11000, 11000]
				},
				{
					name:'福和祥',
					type:'line',
					stack: '总量',
					data:[800, 900, 901, 10000, 1290, 1400, 1400]
				},
				{
					name:'福和祥5元',
					type:'line',
					stack: '总量',
					data:[7000, 9000, 901, 900, 12090, 1400, 1400]
				},
				{
					name:'福和祥10元',
					type:'line',
					stack: '总量',
					data:[6000, 900, 901, 900, 12090, 1400, 1400]
				},
				{
					name:'福和祥15元',
					type:'line',
					stack: '总量',
					data:[600, 9000, 8001, 900, 12090, 14000, 14000]
				},
				{
					name:'福和祥20元',
					type:'line',
					stack: '总量',
					data:[600, 9000, 801, 7000, 1290, 1400, 1400]
				},
				{
					name:'九总',
					type:'line',
					stack: '总量',
					data:[800, 900, 901, 10000, 1290, 1400, 1400]
				},
				{
					name:'九总5元',
					type:'line',
					stack: '总量',
					data:[7000, 9000, 901, 900, 12090, 1400, 1400]
				},
				{
					name:'九总10元',
					type:'line',
					stack: '总量',
					data:[6000, 900, 901, 900, 12090, 1400, 1400]
				},
				{
					name:'九总15元',
					type:'line',
					stack: '总量',
					data:[600, 9000, 8001, 900, 12090, 14000, 14000]
				},
				{
					name:'九总20元',
					type:'line',
					stack: '总量',
					data:[600, 9000, 801, 7000, 1290, 1400, 1400]
				},
			]
		};
// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	
	//全选和不选
	var selectArr = myChart.getOption().legend[0].data;
	var selectIcon = myChart.getOption().legend[0].selected;
	
	
	$(".product").click(function(){
		var name=$(this).find("label").html();
		if(($(this).find("input")).is(':checked')) {
			selectIcon[name]=true;
			$(this).find("span").css({"opacity":"1"});
		}else{
			selectIcon[name]=false;
			$(this).find("span").css({"opacity":"0"});
		}
		//selectIcon[tt]=true;
		option.legend.selected = selectIcon;
		 myChart.setOption(option);
	})
	
	
	//console.log(selectIcon);        
	$('#selectall').click(function(){
	    if(($(this).find("input")).is(':checked')) {
			 var val = true;
			  $(this).find("label").html('反选');
			  $(".product span").css({"opacity":"1"});
		}else{
			var val = false;
			 $(this).find("label").html('全选');
			 $(".product span").css({"opacity":"0"});
		}
	    var obj = {};
	    for(var key in selectArr){
	        obj[selectArr[key]] = val;
	    }    
	    option.legend.selected = obj;
	    myChart.setOption(option);
	});
	
	

	//var check=document.getElementsByName("checkbox");
	//console.log(check);
//	for(var i=0;i++;i<check.length){
//		check[i].click(function(){
//			console.log(i)
//		})
//	}
	

	


	
	
