//初始化
var myChart = echarts.init(document.getElementById('scanData'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
    	show:false,
    	//selectedMode: 'single',
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['汽配', '食品', '医药','日化'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        },
        selected:{
        	'食品':false,
        	'医药':false,
        	'日化':false,
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        //bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel:{interval:0},
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        data: ['00:00','','02:00','','04:00','','06:00','','08:00','','10:00','','12:00','','14:00','','16:00','','18:00', '','20:00','', '22:00','','24:00']
    }, {
        axisPointer: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisTick: {
            show: false
        },
        position: 'bottom',
        offset: 20,
    }],
    yAxis: [{
        type: 'value',
        name: '单位（万）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#2f2e4a'
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
                color: '#2f2e4a'
            }
        }
    }],
    series: [{
        name: '汽配',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize:8,
        showSymbol: true,
        lineStyle: {
            normal: {
                width:2
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,252,255)',
            }
        },
        data: [220,220,182,182,191,191,134,134,150,150,120,120,110,110,125,125,145,145,122,122,165,165,122,122]
    }, {
        name: '食品',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize:8,
        showSymbol: true,
        lineStyle: {
            normal: {
                width:2
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,252,255)',
            }
        },
//      data: [120,120,110,110,125,125,145,145,122,122,165,165,122,122,220,220,182,182,191,191,134,134,150,150]
    }, 
    {
        name: '医药',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize:8,
        showSymbol: true,
        lineStyle: {
            normal: {
                width:2
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,252,255)',
            }
        },
//      data: [220,220,182,182,125,125,145,145,122,122,191,191,134,134,150,150,120,120,110,110,165,165,122,122]
    },
    {
        name: '日化',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize:8,
        showSymbol: true,
        lineStyle: {
            normal: {
                width:2
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,252,255)',
            }
        },
//      data: [220,220,182,182,191,191,134,134,150,150,120,120,110,110,125,125,145,145,122,122,165,165,122,122]
    },
    ]
};
myChart.setOption(option);


//动态切换折线图数据
var selectArr = myChart.getOption().legend[0].data;
var selectIcon = myChart.getOption().legend[0];
var lis=$(".busiName li");
console.log(selectArr);
console.log(selectIcon);
var index = 0;
var addClassOn;
var obj = {};

for(var key in selectArr){
	 obj[selectArr[key]] = false;
}
option.legend.selected = obj;
addClassOn = setInterval(function(){
    if(index >= $(".busiName li").length){
        index = 0; 
    }else {
    	index=index+1;
        $(".busiName li").eq(index-1).addClass("active").siblings().removeClass("active");
        var name=$(".busiName li").eq(index-1).html();
        selectIcon[name]=true;
		option.legend.selected = selectIcon;
		myChart.setOption(option);
    }
},2000);