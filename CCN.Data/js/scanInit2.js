//初始化
var myChart2 = echarts.init(document.getElementById('scanData'));
option1 = {
    title: {
        text: '',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data:['最新成交价'],
        show:false,
    },
    toolbox: {
        show: true
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    grid: {
        left:'5%',
        right:'4%',
        bottom:'10%',
	    top:'8%',
        containLabel:true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
	        axisPointer: {
	            show: false
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#57617B'
	            },
	        },
	        axisLabel: {
	            margin:10,
	            textStyle: {
	                fontSize: 12,
	                color:'#fff'
	            },
	            interval:0,//横轴信息全部显示  
                rotate:30,//-30度角倾斜显示 
	        },
	        axisTick: {
	            show: true,
	            lineStyle: {
	                color: '#fff'
	            },
	        },
            data: (function (){
            	
                var now = new Date();
                var res = [];
                var len = 10;
               // var timer=bl(now.getHours())+":"+bl(now.getMinutes());
                while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                   // res.unshift(timer);
                    now = new Date(now - 2000);
                }
                return res;
            })()
        },
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '',
            max: 2000,
            min: 0,
           // boundaryGap: [0.2, 0.2],
            axisTick: {
	            show: false
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#57617B'
	            }
	        },
	        axisLabel: {
	            margin: 10,
	            textStyle: {
	                fontSize: 12,
	                color:'#fff'
	            }
	        },
	        splitLine: {
	            lineStyle: {
	                color: 'rgba(255,255,255,0)'
	            }
	        }
        }
    ],
    series: [
        {
            name:'最新成交价',
            type:'line',
            smooth: true,
	        showSymbol: false,
	        symbolSize:8,
	        symbol: "circle", 
	        //color:"#fff",
	        itemStyle: {
	            normal: {
	              color:'#6a93ff',  
	              borderColor:'#6a93ff',  //拐点边框颜色
	              lineStyle: {
	                color: '#6a93ff',
	                width:5,
	              },
	              label : {show: true},
	            },
	        },
	        areaStyle: {
	            normal: {
	              color: {
	                type: 'linear',
	                x: 0,
	                y: 0,
	                x2: 0,
	                y2: 1,
	                colorStops: [{
	                  offset: 0,
	                  color: 'rgba(60, 72, 122, 1)',
	                }, {
	                  offset: 1,
	                  color: 'rgba(60, 72, 122, 0)',
	                }],
	                globalCoord: false
	              },
	            }
	        },
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random()*500 + 1000).toFixed(1) - 0);
                    len++;
                }
                return res;
            })()
        }
    ]
};
myChart2.setOption(option1);


setInterval(function (){
	//var now = new Date();
	//var timer=bl(now.getHours())+":"+bl(now.getMinutes());
    axisData =(new Date()).toLocaleTimeString().replace(/^\D*/,'');;

    var data0 = option1.series[0].data;
    data0.shift();
    data0.push(Math.random() * 500+1000);

    option1.xAxis[0].data.shift();
    option1.xAxis[0].data.push(axisData);
    myChart2.setOption(option1);
   
},2100);


function bl(n){
    if(n<10){return "0"+n}
    else{return ""+n}   
}
