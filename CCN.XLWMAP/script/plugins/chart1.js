var dom = document.getElementById("container2");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
//  tooltip: {
//      trigger: 'item',
//      formatter: "{a} <br/>{b}: {c} ({d}%)"
//  },
    color:['#4cf3fc', '#21a6de','#7f31f5','#fff90a'] ,
    legend: {
    	icon: 'circle',
    	itemWidth:7,
	    textStyle: {
	        color: '#fff',
	        fontSize: '14',
	    },
        orient: 'vertical',
        x: '80%',
        y:'center',
        data:['1次','2次','3-5次','6-10次']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '50%'],
            center: ['40%', '50%'],  
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'init'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1000, name:'1次'},
                {value:4000, name:'2次'},
                {value:10000, name:'3-5次'},
                {value:5000, name:'6-10次'},
            ],
            itemStyle:{ 
            normal:{ 
                  label:{ 
                    show: true, 
                    formatter: '{d}% {c}人',
                    textStyle: {
                        fontSize: '13',
                        fontWeight: ''
                    }
                  }, 
                  labelLine :{show:true} 
                } 
            } 
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}