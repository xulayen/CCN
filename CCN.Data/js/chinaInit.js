//初始化
var myChart = echarts.init(document.getElementById('chinaMap'));
// 随机0-1000的数
function randomData() {
    return Math.round(Math.random()*1000);
}
// 映射颜色  不设置有默认色
//var visColor=["#304d9a","#446dda","#517ef4","#5f8bff","#7198ff","#87a8ff","#a2bcff"];
//var visColor=["#6a00f5","#7d23f5","#9348f5","#a364f5","#b889f5"];
var visColor=["#016282","#01637e","#047b8f","#047b8f","#03b8bf","#19ffff"];
var data = [
    {name: "上海", value:70},
    {name: "广东", value:70},
    {name: "北京", value:70},
    {name: "四川", value:70},
    {name: "湖北", value:70},
    {name: "湖南", value:70},
    {name: "江苏", value:70},
    {name: "天津", value:70},
    {name: "河南", value:70},
    {name: "广西壮族", value:70},
    {name: "福建", value:70},
    {name: "浙江", value:70},
    {name: "山东", value:70},
    {name: "辽宁", value:70},
    {name: "河北", value:70},
    {name: "黑龙江", value:70},
    {name: "云南", value:70},
    {name: "内蒙", value:70},
    {name: "陕西", value:70},
    {name: "吉林", value:70},
    //{name: "青海", value:70},
    {name: "香港特别行政区", value:70},
    {name: "重庆", value:70},
    {name: "贵州", value:70},
    {name: "甘肃", value:70},
    {name: "海南", value:70},
    {name: "安徽", value:70},
    {name: "西藏", value:70},
    {name: "新疆", value:70},
    {name: "宁夏", value:70},
];
var geoCoordMap = {
   "上海":[121.48,31.22],
    "广东":[113.14,23.08],
    "北京":[116.54,39.75],
    "四川":[102.14,30.08],
    "湖北":[112.97,31.33],
    "湖南":[112.97,27.33],
    "江苏":[119.48,33.22],
    "天津":[117.24,38.75],
    "河南":[113.48,34.22],
    "广西壮族":[109.14,23.58],
    "福建":[118.14,26.08],
    "浙江":[120.48,29.22],
    "山东":[117.24,35.75],
    "辽宁":[123.24,41.75],
    "河北":[115.24,38.75],
    "黑龙江":[128.24,46.75],
    "云南":[102.14,24.08],
    "内蒙":[111.54,41.75],
    "陕西":[109.1,34.22],
    "吉林":[126.24,43.75],
    //"青海":[98.1,35.66],
    "香港特别行政区":[114.14,22.08],
    "重庆":[108.14,30.08],
    "贵州":[108.14,27.08],
    "甘肃":[105.1,34.72],
    "海南":[110.14,19.58],
    "安徽":[116.48,32.22],
    "西藏":[92.14,30.08],
    "新疆":[90.14,41.08],
    "宁夏":[106.1,36.72],
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
            name: 'Number',
	        type: 'map',
	        mapType: 'china',
	        zoom:1.3,
	        roam: false,
	        itemStyle: {
	            normal: {
	                label: {
	                    show: false
	                },
	               	areaColor:"#455b9c",//区域颜色
	            },
	            emphasis: {
	            	areaColor:"#4ff1fe",
	                label: {
	                    show: false,
	                    textStyle: {
						        color: '#fff',
						        fontSize: '14',
						        fontWeight:'bold',
						    },
	                }
	            }
	        },
            //世界扫码量区域颜色根据数据值区分显示
            data:[
                {
            "name": "上海",
            "value": "1000"
        }, {
            "name": "广东",
            "value": "820"
        }, {
            "name": "北京",
            "value": "849"
        }, {
            "name": "四川",
            "value": "530"
        }, {
            "name": "湖北",
            "value": "1000"
        }, {
            "name": "湖南",
            "value": "938"
        }, {
            "name": "江苏",
            "value": "803"
        }, {
            "name": "天津",
            "value": "457"
        }, {
            "name": "河南",
            "value": "555"
        }, {
            "name": "广西",
            "value": "381"
        }, {
            "name": "福建",
            "value": "883"
        }, {
            "name": "浙江",
            "value": "494"
        }, {
            "name": "山东",
            "value": "218"
        }, {
            "name": "辽宁",
            "value": "280"
        }, {
            "name": "河北",
            "value": "104"
        }, {
            "name": "黑龙江",
            "value": "197"
        }, {
            "name": "云南",
            "value": "136"
        }, {
            "name": "内蒙古",
            "value": "236"
        }, {
            "name": "陕西",
            "value": "236"
        }, {
            "name": "吉林",
            "value": "36"
        },{
            "name": "香港特别行政区",
            "value": "136"
        },{
            "name": "重庆",
            "value": "136"
        }, {
            "name": "贵州",
            "value": "136"
        }, {
            "name": "甘肃",
            "value": "136"
        }, {
            "name": "海南",
            "value": "236"
        },{
            "name": "安徽",
            "value": "136"
        }, {
            "name": "西藏",
            "value": "136"
        }, {
            "name": "新疆",
            "value": "136"
        }, {
            "name": "宁夏",
            "value": "136"
        },{
            "name": "江西",
            "value": "36"
        },{
            "name": "青海",
            "value": "136"
        },{
            "name": "山西",
            "value": "100"
        }
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
        map: 'china',
        zoom:1.3,
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
