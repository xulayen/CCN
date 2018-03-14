var dom = document.getElementById("container1");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
//  tooltip: {
//      trigger: 'item',
//      formatter: "{a} <br/>{b}: {c} ({d}%)"
//  },
    color:['#4cf3fc', '#1752cd','#f51e5e','#fed90a'] ,
    legend: {
    	icon: 'circle',
    	itemWidth:7,
	    textStyle: {
	        color: '#fff',
	        fontSize: '13',
	    },
        orient: 'vertical',
        x: '80%',
        y:'center',
        data:['一口怪兽','九总','九总珍品','福和祥']
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
                {value:10000, name:'一口怪兽'},
                {value:5000, name:'九总'},
                {value:5000, name:'九总珍品'},
                {value:2000, name:'福和祥'},
            ],
            itemStyle:{ 
            normal:{ 
                  label:{ 
                    show: true, 
                    formatter: '{d}% \n {c}次',
                    textStyle: {
                        fontSize: '13',
                        fontWeight: ''
                    },
                  }, 
                  labelLine :{show:true} ,
             },
            } 
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}