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
        data: ['扫码量'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '2%',
		top:'8%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel:{
        	interval:0,
        	rotate:40,
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        data:['16:00','18:00','20:00','22:00','00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','00:00','02:00','04:00','06:00','08:00','10:00','12:00', '14:00']
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
    dataZoom: [{
        start:50,
        end:100,
        show:false,
    }, {
        type: "inside",
        zoomLock: false
    }],
    yAxis: [{
        type: 'value',
        //name: '单位（万）',
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
    }],
    series: [{
        name: '扫码量',
        type: 'line',
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
//      markPoint: {
//          data: [{
//           name: '最大值',
//           type: 'max',
//           valueIndex: 0
//          }],
//      },
        data: [13000,14000,15000,16000,12000,11000,15220,13000,15220,16220,17220,18220,16220,15220,16220,17220,13220,10220,13220,15220,14220,15220,17220,16220]
    }]
};
myChart.setOption(option);

