//初始化
var myChart = echarts.init(document.getElementById('buyNum'));
option = {
    title : {
    	text: '重购频次',
        x:'center',
        y:'52%',
        textStyle: {
        	fontWeight:'bold',              
        	color:'#9090c8',
        	fontSize: '15',
      	},
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#ff7883', '#41b2ff','#9655f6','#4be27a'],
    legend: {
    	show:false,
        x : 'center',
        y : 'bottom',
        data:['草本 2976','木本 1092','藤本 241','菌藻 59']
    },
    calculable : true,
    series : [
        {
            name:'比例',
            type:'pie',
            radius : [43,83],
            center : ['50%', '50%'],
            roseType : 'radius',
            data:[
                {value:376, name:'11-20次购买用户'},
                {value:692, name:'2-10次购买用户'},
                {value:841, name:'1次购买用户'},
                {value:259, name:'20次以上购买用户'},
            ],
            itemStyle:{ 
            normal:{ 
                  label:{ 
                    show: true, 
                    formatter: '{b}\n {d}%',
                    textStyle: {
                        fontSize: '13',
                        fontWeight: 'bold'
                    },
                  }, 
                  labelLine :{show:true,length:3} ,
             },
            } 
        }
    ]
};
myChart.setOption(option);
window.onresize = myChart.resize;