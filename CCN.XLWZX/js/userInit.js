//初始化
var myChart = echarts.init(document.getElementById('main'));
//参数设置
var option={
			tooltip : {  //提示框组件
				trigger: 'axis',
				show:true,
				backgroundColor:'#fff',
				textStyle: {
		            color: '#333' ,
		            fontSize:16
		           	
		       },
		       borderWidth:'1',
		       borderColor:'#333',
		       icon: 'cicrle',
			},
			color:['#599bd7','#afabaa','#c85912','#ffbf00','#2f74b7','#56822b'],
			legend: {   //图例组件
				data:[
				'1次','2次','3次','4-5次','6-10次','10次以上','','1-7次','8-15次','16-20次','21-35次','36-70次','70次以上','','1-30次','31-60次','61-90次','91-150次','151-300次','150次以上'
				], 
				selected:{
					'1-7次':false,
					'8-15次':false,
					'16-20次':false,
					'21-35次':false,
					'36-70次':false,
					'70次以上':false,
					
					'1-30次':false,
					'31-60次':false,
					'61-90次':false,
					'91-150次':false,
					'151-300次':false,
					'150次以上':false,
				},
				show:false,
				icon: 'cicrle',
				padding:[10,10],
//				width:900,
//				height:130,
				itemWidth: 25,             // 图例图形宽度
        		itemHeight: 22,  
				textStyle: {
		            color: '#333' ,
		            fontSize:16,
		            width:50
		           	
		       },
		       align:'left',
//		       itemGap: 23,
			   //没选中
			   inactiveColor:'#333',
				
			},
			grid: {
		        x:60,
		        y:30,
		        x2:60,
		        y2:30,
		    },
			calculable : false,
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
//					min:0,
//					max:140000
				}
			],
			series : [  //系列列表
				{
					name:'1次',
					type:'line',
					stack: '总量',
					data:[120, 132, 30001, 134, 90, 120000, 120000]
				},
				{
					name:'2次',
					type:'line',
					stack: '总量',
					data:[220, 20002, 191, 234, 290, 30000, 30000]
				},
				{
					name:'3次',
					type:'line',
					stack: '总量',
					data:[40000, 20002, 201, 154, 190, 40000, 40000]
				},
				{
					name:'4-5次',
					type:'line',
					stack: '总量',
					data:[320, 33002, 301, 334, 390, 50000, 50000]
				},
				{
					name:'6-10次',
					type:'line',
					stack: '总量',
					data:[820, 93002, 901, 934, 1290, 60000, 60000]
				},
				{
					name:'10次以上',
					type:'line',
					stack: '总量',
					data:[820, 932, 90001, 934, 10090, 70000, 70000]
				},
				{
					name:'1-7次',
					type:'line',
					stack: '总量1',
					data:[820, 93002, 901, 9304, 12090, 80000, 80000]
				},
				{
					name:'8-15次',
					type:'line',
					stack: '总量2',
					data:[8200, 932, 901, 30034, 1290, 90000, 90000]
				},
				{
					name:'16-20次',
					type:'line',
					stack: '总量2',
					data:[820, 9302, 901, 900, 12090, 10000, 10000]
				},
				{
					name:'21-35次',
					type:'line',
					stack: '总量2',
					data:[820, 9000, 901, 9000, 12900, 11000, 11000]
				},
				{
					name:'36-70次',
					type:'line',
					stack: '总量2',
					data:[800, 900, 901, 10000, 1290, 1400, 1400]
				},
				{
					name:'70次以上',
					type:'line',
					stack: '总量2',
					data:[7000, 9000, 901, 900, 12090, 1400, 1400]
				},
				{
					name:'1-30次',
					type:'line',
					stack: '总量2',
					data:[6000, 900, 901, 900, 12090, 1400, 1400]
				},
				{
					name:'31-60次',
					type:'line',
					stack: '总量2',
					data:[600, 9000, 8001, 900, 12090, 14000, 14000]
				},
				{
					name:'61-90次',
					type:'line',
					stack: '总量2',
					data:[600, 9000, 801, 7000, 1290, 1400, 1400]
				},
				{
					name:'91-150次',
					type:'line',
					stack: '总量2',
					data:[6000, 900, 701, 700, 12090, 1400, 1400]
				},
				{
					name:'151-300次',
					type:'line',
					stack: '总量2',
					data:[600, 800, 801, 700, 1290, 1400, 1400]
				},
				{
					name:'150次以上',
					type:'line',
					stack: '总量2',
					data:[600, 600, 801, 700, 1290, 1400, 1400]
				},
				
			]
		};
// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

	var val=true;
	var obj1={'1次':true,'2次':true,'3次':true,'4-5次':true,'6-10次':true,'10次以上':true,'1-7次':false,'8-15次':false,'16-20次':false,'21-35次':false,'36-70次':false,'70次以上':false,'1-30次':false,'31-60次':false,'61-90次':false,'91-105次':false,'151-300次':false,'150次以上':false,};
	var obj2={'1次':false,'2次':false,'3次':false,'4-5次':false,'6-10次':false,'10次以上':false,'1-7次':true,'8-15次':true,'16-20次':true,'21-35次':true,'36-70次':true,'70次以上':true,'1-30次':false,'31-60次':false,'61-90次':false,'91-105次':false,'151-300次':false,'150次以上':false,};
	var obj3={'1次':false,'2次':false,'3次':false,'4-5次':false,'6-10次':false,'10次以上':false,'1-7次':false,'8-15次':false,'16-20次':false,'21-35次':false,'36-70次':false,'70次以上':false,'1-30次':true,'31-60次':true,'61-90次':true,'91-105次':true,'151-300次':true,'150次以上':true,};
	
	
	console.log(option.legend);
	$(".dayTime").click(function(){
	    option.legend.selected = obj1;
	    myChart.setOption(option);
	});
	$(".weekTime").click(function(){
	    option.legend.selected = obj2;
	    myChart.setOption(option);

	})
	$(".mouthTime").click(function(){
	    option.legend.selected = obj3;
	    myChart.setOption(option);
	})
