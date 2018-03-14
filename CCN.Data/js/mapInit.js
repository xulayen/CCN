//初始化
var myChart = echarts.init(document.getElementById('mapWord'));
// 随机0-1000的数
function randomData() {
    return Math.round(Math.random()*1000);
}
// 映射颜色  不设置有默认色
//var visColor=["#304d9a","#446dda","#517ef4","#5f8bff","#7198ff","#87a8ff","#a2bcff"];
//var visColor=["#6a00f5","#7d23f5","#9348f5","#a364f5","#b889f5"];
//var visColor=["#304d9a","#446dda","#517ef4","#5f8bff","#7198ff","#87a8ff","#a2bcff"];
var visColor=["#016282","#01637e","#047b8f","#047b8f","#03b8bf","#19ffff"];
var data = [
     {name: '中国', value:70},
     {name: '香港', value:70},
     {name: '韩国', value:70},
     {name: '印度尼西亚', value:70},
     {name: '菲律宾', value:70},
     {name: '泰国', value:70},
     {name: '新加坡', value:70},
     {name: '马来西亚', value:70},
     {name: '伊拉克', value:70},
     {name: '哈萨克斯坦', value:70},
     {name: '沙特阿拉伯', value:70},
     {name: '伊朗', value:70},
     {name: '俄罗斯', value:70},
     {name: '荷兰', value:70},
     {name: '澳大利亚', value:70},
     {name: '新西兰', value:70},
     {name: '美国', value:70},
     {name: '埃及', value:70},
];
var geoCoordMap = {
    '中国':[116.40741292387247,39.904213937233365],
    '香港':[114.10,22.20],
    '韩国':[126.9,37.51],
    '印度尼西亚':[114.66,-2.845172],
    '菲律宾':[125.66,8.845172],
    '泰国':[101.66,15.45172],
    '新加坡':[103.48,122],
    '马来西亚':[114.66,2.845172],
    '伊拉克':[43.567,34.67],
    '哈萨克斯坦':[72.55,50.19],
    '沙特阿拉伯':[40.711667,24.724167],
    '伊朗':[55.696111,31.423056],
    '俄罗斯':[61.25,55.1],
    '荷兰':[4.52, 52.21],
    '澳大利亚':[137.58,-25.03],
    '新西兰':[171.35, -44],
    '美国':[-100.02,38.54],
    '埃及':[31.12,30.01],
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

var seriseData=[
        {
            name: '消费者热力分布',
            type: 'map',
            mapType: 'world',
            zoom:1.255,
            roam: false,
            itemStyle:{
                emphasis:{
                	areaColor:"#4ff1fe",
                	label:{
                		show:false,
                		textStyle: {
					        color: '#fff',
					        fontSize: '14',
					        fontWeight:'bold',
					    },
                	},
                },
                normal: {
                    areaColor:"#455b9c",//区域颜色
                },
            },
            //世界扫码量区域颜色根据数据值区分显示
            data:[
                {name: 'Egypt', value: 154},
                {name: 'United States', value:312},
                {name: 'New Zealand', value:200},
                {name: 'Netherlands', value:73},
                {name: 'Australia', value: 187},
                {name: 'Russia', value:587},
                {name: 'Iran', value: 150},
                {name: 'Saudi Arabia', value: 171},
                {name: 'Kazakhstan', value: 147},
                {name: 'Iraq', value:269},
                {name: 'Malaysia', value: 169},
                {name: 'Singapore', value: 147},
                {name: 'Thailand', value: 13},
                {name: 'Philippines', value: 163},
                {name: 'Indonesia', value:500},
                {name: 'Korea', value: 116},
                {name: 'Hong Kong', value: 176},
                {name: 'China', value:1000},
            ]
        },{
            name: '合作品牌分布',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            itemStyle: {
                normal: {
                    color: '#ff6c96'
                }
            }
        }
    ]
    
option = {
    tooltip: {
        trigger: 'item',
        show:false,
    },
    visualMap: {
        min:0,
        max:1000,
        left: 'left',
        bottom: '3%',         // 文本，默认为数值文本
        calculable: true,
        color:visColor,
        show:false,
        seriesIndex:0
    },
    geo: {
        type: 'map',
        map: 'world',
        zoom:1.255,
        roam: false,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#455b9c',
            },
            emphasis: {
                areaColor: '#6a93fe'
            }
        }
       
    },
    series: seriseData
};
myChart.setOption(option);
