//初始化
var myChart1 = echarts.init(document.getElementById('visit'));
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
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        },
    },
    grid: {
        left:'3%',
        right:'4%',
        bottom:'20%',
	    top:'2%',
        containLabel:true
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
        name: '',
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
        data: [1500,1470,1470,1400,1350,1500,1550,1600,1600,1700,1800,1900,2000,1950,1850,1600,1802,1820,2000,1901,1704,1340,1500,1500]
    }]
};
myChart1.setOption(option);

//动态切换折线图数据
var lis=$(".busiName li");
var index = 0;
var i=0;
var addClassOn;

var lis=($(".busiName li").innerWidth()+10);
var length=$(".busiName li").length;
var html=$(".busiName ul").html();
$(".busiName ul").append(html);
var width=$(".busiName li").length*($(".busiName li").innerWidth()+10)+50+'px';
var width1=$(".busiName li").length*($(".busiName li").innerWidth()+10)+50;
console.log(width1);
$(".busiName ul").css({"width":width});
$(".active1").removeClass("active1");
$(".busiName li:nth-of-type(2)").addClass("active1");
        
addClassOn = setInterval(function(){
	if((index+6)*lis>=width1){
		var tt=index-length;
		$(".busiName ul").css({"left":-tt*lis});
		var ll=tt+2;
		$(".active1").removeClass("active1");
		$(".busiName li:nth-of-type(" +ll+")").addClass("active1");
        index=tt;
	}else{
    	index=index+1;
    	$(".busiName ul").animate({"left":-index*lis});
     	$(".active1").removeClass("active1").next().addClass("active1");
        var name1=$(".active1").html();
		$.ajax({
		    url:"js/data.json",
		    type: "GET",
		    async:true,
		    dataType: "json", 
		    success: function(data){
		    	data.forEach(function(item){
		    		if(item.name===name1){
		    			myChart1.setOption({        //加载数据图表
				            series: [{
				                // 根据名字对应到相应的系列
				                name:item.name,
				                data:item.data,
				            }]
				        })
		    		}
		    	})
		    }
		})
    }
},5000);