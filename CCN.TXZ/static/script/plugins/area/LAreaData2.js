//省级
var provs_data = [{"text": "\u5317\u4eac\u5e02", "value": "110000"}, {
        "text": "\u5929\u6d25\u5e02",
        "value": "120000"
    }, {"text": "\u6cb3\u5317\u7701", "value": "130000"}, {
        "text": "\u5c71\u897f\u7701",
        "value": "140000"
    }, {"text": "\u5185\u8499\u53e4\u81ea\u6cbb\u533a", "value": "150000"}, {
        "text": "\u8fbd\u5b81\u7701",
        "value": "210000"
    }, {"text": "\u5409\u6797\u7701", "value": "220000"}, {
        "text": "\u9ed1\u9f99\u6c5f\u7701",
        "value": "230000"
    }, {"text": "\u4e0a\u6d77\u5e02", "value": "310000"}, {
        "text": "\u6c5f\u82cf\u7701",
        "value": "320000"
    }, {"text": "\u6d59\u6c5f\u7701", "value": "330000"}, {
        "text": "\u5b89\u5fbd\u7701",
        "value": "340000"
    }, {"text": "\u798f\u5efa\u7701", "value": "350000"}, {
        "text": "\u6c5f\u897f\u7701",
        "value": "360000"
    }, {"text": "\u5c71\u4e1c\u7701", "value": "370000"}, {
        "text": "\u6cb3\u5357\u7701",
        "value": "410000"
    }, {"text": "\u6e56\u5317\u7701", "value": "420000"}, {
        "text": "\u6e56\u5357\u7701",
        "value": "430000"
    }, {"text": "\u5e7f\u4e1c\u7701", "value": "440000"}, {
        "text": "\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a",
        "value": "450000"
    }, {"text": "\u6d77\u5357\u7701", "value": "460000"}, {
        "text": "\u91cd\u5e86\u5e02",
        "value": "500000"
    }, {"text": "\u56db\u5ddd\u7701", "value": "510000"}, {
        "text": "\u8d35\u5dde\u7701",
        "value": "520000"
    }, {"text": "\u4e91\u5357\u7701", "value": "530000"}, {
        "text": "\u897f\u85cf\u81ea\u6cbb\u533a",
        "value": "540000"
    }, {"text": "\u9655\u897f\u7701", "value": "610000"}, {
        "text": "\u7518\u8083\u7701",
        "value": "620000"
    }, {"text": "\u9752\u6d77\u7701", "value": "630000"}, {
        "text": "\u5b81\u590f\u56de\u65cf\u81ea\u6cbb\u533a",
        "value": "640000"
    }, {"text": "\u65b0\u7586\u7ef4\u543e\u5c14\u81ea\u6cbb\u533a", "value": "650000"}, {
        "text": "\u53f0\u6e7e\u7701",
        "value": "710000"
    }, {
        "text": "\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a",
        "value": "810000"
    }, {"text": "\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a", "value": "820000"}
    ],
    citys_data = {
        "110000": [{"text": "\u5e02\u8f96\u533a", "value": "110100"}, {"text": "\u53bf", "value": "110200"}],
        "120000": [{"text": "\u5e02\u8f96\u533a", "value": "120100"}, {"text": "\u53bf", "value": "120200"}],
        "130000": [{"text": "\u77f3\u5bb6\u5e84\u5e02", "value": "130100"}, {
            "text": "\u5510\u5c71\u5e02",
            "value": "130200"
        }, {"text": "\u79e6\u7687\u5c9b\u5e02", "value": "130300"}, {
            "text": "\u90af\u90f8\u5e02",
            "value": "130400"
        }, {"text": "\u90a2\u53f0\u5e02", "value": "130500"}, {
            "text": "\u4fdd\u5b9a\u5e02",
            "value": "130600"
        }, {"text": "\u5f20\u5bb6\u53e3\u5e02", "value": "130700"}, {
            "text": "\u627f\u5fb7\u5e02",
            "value": "130800"
        }, {"text": "\u6ca7\u5dde\u5e02", "value": "130900"}, {
            "text": "\u5eca\u574a\u5e02",
            "value": "131000"
        }, {"text": "\u8861\u6c34\u5e02", "value": "131100"}],
        "140000": [{"text": "\u592a\u539f\u5e02", "value": "140100"}, {
            "text": "\u5927\u540c\u5e02",
            "value": "140200"
        }, {"text": "\u9633\u6cc9\u5e02", "value": "140300"}, {
            "text": "\u957f\u6cbb\u5e02",
            "value": "140400"
        }, {"text": "\u664b\u57ce\u5e02", "value": "140500"}, {
            "text": "\u6714\u5dde\u5e02",
            "value": "140600"
        }, {"text": "\u664b\u4e2d\u5e02", "value": "140700"}, {
            "text": "\u8fd0\u57ce\u5e02",
            "value": "140800"
        }, {"text": "\u5ffb\u5dde\u5e02", "value": "140900"}, {
            "text": "\u4e34\u6c7e\u5e02",
            "value": "141000"
        }, {"text": "\u5415\u6881\u5e02", "value": "141100"}],
        "150000": [{"text": "\u547c\u548c\u6d69\u7279\u5e02", "value": "150100"}, {
            "text": "\u5305\u5934\u5e02",
            "value": "150200"
        }, {"text": "\u4e4c\u6d77\u5e02", "value": "150300"}, {
            "text": "\u8d64\u5cf0\u5e02",
            "value": "150400"
        }, {"text": "\u901a\u8fbd\u5e02", "value": "150500"}, {
            "text": "\u9102\u5c14\u591a\u65af\u5e02",
            "value": "150600"
        }, {"text": "\u547c\u4f26\u8d1d\u5c14\u5e02", "value": "150700"}, {
            "text": "\u5df4\u5f66\u6dd6\u5c14\u5e02",
            "value": "150800"
        }, {"text": "\u4e4c\u5170\u5bdf\u5e03\u5e02", "value": "150900"}, {
            "text": "\u5174\u5b89\u76df",
            "value": "152200"
        }, {"text": "\u9521\u6797\u90ed\u52d2\u76df", "value": "152500"}, {
            "text": "\u963f\u62c9\u5584\u76df",
            "value": "152900"
        }],
        "210000": [{"text": "\u6c88\u9633\u5e02", "value": "210100"}, {
            "text": "\u5927\u8fde\u5e02",
            "value": "210200"
        }, {"text": "\u978d\u5c71\u5e02", "value": "210300"}, {
            "text": "\u629a\u987a\u5e02",
            "value": "210400"
        }, {"text": "\u672c\u6eaa\u5e02", "value": "210500"}, {
            "text": "\u4e39\u4e1c\u5e02",
            "value": "210600"
        }, {"text": "\u9526\u5dde\u5e02", "value": "210700"}, {
            "text": "\u8425\u53e3\u5e02",
            "value": "210800"
        }, {"text": "\u961c\u65b0\u5e02", "value": "210900"}, {
            "text": "\u8fbd\u9633\u5e02",
            "value": "211000"
        }, {"text": "\u76d8\u9526\u5e02", "value": "211100"}, {
            "text": "\u94c1\u5cad\u5e02",
            "value": "211200"
        }, {"text": "\u671d\u9633\u5e02", "value": "211300"}, {"text": "\u846b\u82a6\u5c9b\u5e02", "value": "211400"}],
        "220000": [{"text": "\u957f\u6625\u5e02", "value": "220100"}, {
            "text": "\u5409\u6797\u5e02",
            "value": "220200"
        }, {"text": "\u56db\u5e73\u5e02", "value": "220300"}, {
            "text": "\u8fbd\u6e90\u5e02",
            "value": "220400"
        }, {"text": "\u901a\u5316\u5e02", "value": "220500"}, {
            "text": "\u767d\u5c71\u5e02",
            "value": "220600"
        }, {"text": "\u677e\u539f\u5e02", "value": "220700"}, {
            "text": "\u767d\u57ce\u5e02",
            "value": "220800"
        }, {"text": "\u5ef6\u8fb9\u671d\u9c9c\u65cf\u81ea\u6cbb\u5dde", "value": "222400"}],
        "230000": [{"text": "\u54c8\u5c14\u6ee8\u5e02", "value": "230100"}, {
            "text": "\u9f50\u9f50\u54c8\u5c14\u5e02",
            "value": "230200"
        }, {"text": "\u9e21\u897f\u5e02", "value": "230300"}, {
            "text": "\u9e64\u5c97\u5e02",
            "value": "230400"
        }, {"text": "\u53cc\u9e2d\u5c71\u5e02", "value": "230500"}, {
            "text": "\u5927\u5e86\u5e02",
            "value": "230600"
        }, {"text": "\u4f0a\u6625\u5e02", "value": "230700"}, {
            "text": "\u4f73\u6728\u65af\u5e02",
            "value": "230800"
        }, {"text": "\u4e03\u53f0\u6cb3\u5e02", "value": "230900"}, {
            "text": "\u7261\u4e39\u6c5f\u5e02",
            "value": "231000"
        }, {"text": "\u9ed1\u6cb3\u5e02", "value": "231100"}, {
            "text": "\u7ee5\u5316\u5e02",
            "value": "231200"
        }, {"text": "\u5927\u5174\u5b89\u5cad\u5730\u533a", "value": "232700"}],
        "310000": [{"text": "\u5e02\u8f96\u533a", "value": "310100"}, {"text": "\u53bf", "value": "310200"}],
        "320000": [{"text": "\u5357\u4eac\u5e02", "value": "320100"}, {
            "text": "\u65e0\u9521\u5e02",
            "value": "320200"
        }, {"text": "\u5f90\u5dde\u5e02", "value": "320300"}, {
            "text": "\u5e38\u5dde\u5e02",
            "value": "320400"
        }, {"text": "\u82cf\u5dde\u5e02", "value": "320500"}, {
            "text": "\u5357\u901a\u5e02",
            "value": "320600"
        }, {"text": "\u8fde\u4e91\u6e2f\u5e02", "value": "320700"}, {
            "text": "\u6dee\u5b89\u5e02",
            "value": "320800"
        }, {"text": "\u76d0\u57ce\u5e02", "value": "320900"}, {
            "text": "\u626c\u5dde\u5e02",
            "value": "321000"
        }, {"text": "\u9547\u6c5f\u5e02", "value": "321100"}, {
            "text": "\u6cf0\u5dde\u5e02",
            "value": "321200"
        }, {"text": "\u5bbf\u8fc1\u5e02", "value": "321300"}],
        "330000": [{"text": "\u676d\u5dde\u5e02", "value": "330100"}, {
            "text": "\u5b81\u6ce2\u5e02",
            "value": "330200"
        }, {"text": "\u6e29\u5dde\u5e02", "value": "330300"}, {
            "text": "\u5609\u5174\u5e02",
            "value": "330400"
        }, {"text": "\u6e56\u5dde\u5e02", "value": "330500"}, {
            "text": "\u7ecd\u5174\u5e02",
            "value": "330600"
        }, {"text": "\u91d1\u534e\u5e02", "value": "330700"}, {
            "text": "\u8862\u5dde\u5e02",
            "value": "330800"
        }, {"text": "\u821f\u5c71\u5e02", "value": "330900"}, {
            "text": "\u53f0\u5dde\u5e02",
            "value": "331000"
        }, {"text": "\u4e3d\u6c34\u5e02", "value": "331100"}],
        "340000": [{"text": "\u5408\u80a5\u5e02", "value": "340100"}, {
            "text": "\u829c\u6e56\u5e02",
            "value": "340200"
        }, {"text": "\u868c\u57e0\u5e02", "value": "340300"}, {
            "text": "\u6dee\u5357\u5e02",
            "value": "340400"
        }, {"text": "\u9a6c\u978d\u5c71\u5e02", "value": "340500"}, {
            "text": "\u6dee\u5317\u5e02",
            "value": "340600"
        }, {"text": "\u94dc\u9675\u5e02", "value": "340700"}, {
            "text": "\u5b89\u5e86\u5e02",
            "value": "340800"
        }, {"text": "\u9ec4\u5c71\u5e02", "value": "341000"}, {
            "text": "\u6ec1\u5dde\u5e02",
            "value": "341100"
        }, {"text": "\u961c\u9633\u5e02", "value": "341200"}, {
            "text": "\u5bbf\u5dde\u5e02",
            "value": "341300"
        }, {"text": "\u516d\u5b89\u5e02", "value": "341500"}, {
            "text": "\u4eb3\u5dde\u5e02",
            "value": "341600"
        }, {"text": "\u6c60\u5dde\u5e02", "value": "341700"}, {"text": "\u5ba3\u57ce\u5e02", "value": "341800"}],
        "350000": [{"text": "\u798f\u5dde\u5e02", "value": "350100"}, {
            "text": "\u53a6\u95e8\u5e02",
            "value": "350200"
        }, {"text": "\u8386\u7530\u5e02", "value": "350300"}, {
            "text": "\u4e09\u660e\u5e02",
            "value": "350400"
        }, {"text": "\u6cc9\u5dde\u5e02", "value": "350500"}, {
            "text": "\u6f33\u5dde\u5e02",
            "value": "350600"
        }, {"text": "\u5357\u5e73\u5e02", "value": "350700"}, {
            "text": "\u9f99\u5ca9\u5e02",
            "value": "350800"
        }, {"text": "\u5b81\u5fb7\u5e02", "value": "350900"}],
        "360000": [{"text": "\u5357\u660c\u5e02", "value": "360100"}, {
            "text": "\u666f\u5fb7\u9547\u5e02",
            "value": "360200"
        }, {"text": "\u840d\u4e61\u5e02", "value": "360300"}, {
            "text": "\u4e5d\u6c5f\u5e02",
            "value": "360400"
        }, {"text": "\u65b0\u4f59\u5e02", "value": "360500"}, {
            "text": "\u9e70\u6f6d\u5e02",
            "value": "360600"
        }, {"text": "\u8d63\u5dde\u5e02", "value": "360700"}, {
            "text": "\u5409\u5b89\u5e02",
            "value": "360800"
        }, {"text": "\u5b9c\u6625\u5e02", "value": "360900"}, {
            "text": "\u629a\u5dde\u5e02",
            "value": "361000"
        }, {"text": "\u4e0a\u9976\u5e02", "value": "361100"}],
        "370000": [{"text": "\u6d4e\u5357\u5e02", "value": "370100"}, {
            "text": "\u9752\u5c9b\u5e02",
            "value": "370200"
        }, {"text": "\u6dc4\u535a\u5e02", "value": "370300"}, {
            "text": "\u67a3\u5e84\u5e02",
            "value": "370400"
        }, {"text": "\u4e1c\u8425\u5e02", "value": "370500"}, {
            "text": "\u70df\u53f0\u5e02",
            "value": "370600"
        }, {"text": "\u6f4d\u574a\u5e02", "value": "370700"}, {
            "text": "\u6d4e\u5b81\u5e02",
            "value": "370800"
        }, {"text": "\u6cf0\u5b89\u5e02", "value": "370900"}, {
            "text": "\u5a01\u6d77\u5e02",
            "value": "371000"
        }, {"text": "\u65e5\u7167\u5e02", "value": "371100"}, {
            "text": "\u83b1\u829c\u5e02",
            "value": "371200"
        }, {"text": "\u4e34\u6c82\u5e02", "value": "371300"}, {
            "text": "\u5fb7\u5dde\u5e02",
            "value": "371400"
        }, {"text": "\u804a\u57ce\u5e02", "value": "371500"}, {
            "text": "\u6ee8\u5dde\u5e02",
            "value": "371600"
        }, {"text": "\u83cf\u6cfd\u5e02", "value": "371700"}],
        "410000": [{"text": "\u90d1\u5dde\u5e02", "value": "410100"}, {
            "text": "\u5f00\u5c01\u5e02",
            "value": "410200"
        }, {"text": "\u6d1b\u9633\u5e02", "value": "410300"}, {
            "text": "\u5e73\u9876\u5c71\u5e02",
            "value": "410400"
        }, {"text": "\u5b89\u9633\u5e02", "value": "410500"}, {
            "text": "\u9e64\u58c1\u5e02",
            "value": "410600"
        }, {"text": "\u65b0\u4e61\u5e02", "value": "410700"}, {
            "text": "\u7126\u4f5c\u5e02",
            "value": "410800"
        }, {"text": "\u6fee\u9633\u5e02", "value": "410900"}, {
            "text": "\u8bb8\u660c\u5e02",
            "value": "411000"
        }, {"text": "\u6f2f\u6cb3\u5e02", "value": "411100"}, {
            "text": "\u4e09\u95e8\u5ce1\u5e02",
            "value": "411200"
        }, {"text": "\u5357\u9633\u5e02", "value": "411300"}, {
            "text": "\u5546\u4e18\u5e02",
            "value": "411400"
        }, {"text": "\u4fe1\u9633\u5e02", "value": "411500"}, {
            "text": "\u5468\u53e3\u5e02",
            "value": "411600"
        }, {
            "text": "\u9a7b\u9a6c\u5e97\u5e02",
            "value": "411700"
        }, {"text": "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212", "value": "419000"}],
        "420000": [{"text": "\u6b66\u6c49\u5e02", "value": "420100"}, {
            "text": "\u9ec4\u77f3\u5e02",
            "value": "420200"
        }, {"text": "\u5341\u5830\u5e02", "value": "420300"}, {
            "text": "\u5b9c\u660c\u5e02",
            "value": "420500"
        }, {"text": "\u8944\u9633\u5e02", "value": "420600"}, {
            "text": "\u9102\u5dde\u5e02",
            "value": "420700"
        }, {"text": "\u8346\u95e8\u5e02", "value": "420800"}, {
            "text": "\u5b5d\u611f\u5e02",
            "value": "420900"
        }, {"text": "\u8346\u5dde\u5e02", "value": "421000"}, {
            "text": "\u9ec4\u5188\u5e02",
            "value": "421100"
        }, {"text": "\u54b8\u5b81\u5e02", "value": "421200"}, {
            "text": "\u968f\u5dde\u5e02",
            "value": "421300"
        }, {
            "text": "\u6069\u65bd\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
            "value": "422800"
        }, {"text": "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212", "value": "429000"}],
        "430000": [{"text": "\u957f\u6c99\u5e02", "value": "430100"}, {
            "text": "\u682a\u6d32\u5e02",
            "value": "430200"
        }, {"text": "\u6e58\u6f6d\u5e02", "value": "430300"}, {
            "text": "\u8861\u9633\u5e02",
            "value": "430400"
        }, {"text": "\u90b5\u9633\u5e02", "value": "430500"}, {
            "text": "\u5cb3\u9633\u5e02",
            "value": "430600"
        }, {"text": "\u5e38\u5fb7\u5e02", "value": "430700"}, {
            "text": "\u5f20\u5bb6\u754c\u5e02",
            "value": "430800"
        }, {"text": "\u76ca\u9633\u5e02", "value": "430900"}, {
            "text": "\u90f4\u5dde\u5e02",
            "value": "431000"
        }, {"text": "\u6c38\u5dde\u5e02", "value": "431100"}, {
            "text": "\u6000\u5316\u5e02",
            "value": "431200"
        }, {
            "text": "\u5a04\u5e95\u5e02",
            "value": "431300"
        }, {"text": "\u6e58\u897f\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde", "value": "433100"}],
        "440000": [{"text": "\u5e7f\u5dde\u5e02", "value": "440100"}, {
            "text": "\u97f6\u5173\u5e02",
            "value": "440200"
        }, {"text": "\u6df1\u5733\u5e02", "value": "440300"}, {
            "text": "\u73e0\u6d77\u5e02",
            "value": "440400"
        }, {"text": "\u6c55\u5934\u5e02", "value": "440500"}, {
            "text": "\u4f5b\u5c71\u5e02",
            "value": "440600"
        }, {"text": "\u6c5f\u95e8\u5e02", "value": "440700"}, {
            "text": "\u6e5b\u6c5f\u5e02",
            "value": "440800"
        }, {"text": "\u8302\u540d\u5e02", "value": "440900"}, {
            "text": "\u8087\u5e86\u5e02",
            "value": "441200"
        }, {"text": "\u60e0\u5dde\u5e02", "value": "441300"}, {
            "text": "\u6885\u5dde\u5e02",
            "value": "441400"
        }, {"text": "\u6c55\u5c3e\u5e02", "value": "441500"}, {
            "text": "\u6cb3\u6e90\u5e02",
            "value": "441600"
        }, {"text": "\u9633\u6c5f\u5e02", "value": "441700"}, {
            "text": "\u6e05\u8fdc\u5e02",
            "value": "441800"
        }, {"text": "\u4e1c\u839e\u5e02", "value": "441900"}, {
            "text": "\u4e2d\u5c71\u5e02",
            "value": "442000"
        }, {"text": "\u6f6e\u5dde\u5e02", "value": "445100"}, {
            "text": "\u63ed\u9633\u5e02",
            "value": "445200"
        }, {"text": "\u4e91\u6d6e\u5e02", "value": "445300"}],
        "450000": [{"text": "\u5357\u5b81\u5e02", "value": "450100"}, {
            "text": "\u67f3\u5dde\u5e02",
            "value": "450200"
        }, {"text": "\u6842\u6797\u5e02", "value": "450300"}, {
            "text": "\u68a7\u5dde\u5e02",
            "value": "450400"
        }, {"text": "\u5317\u6d77\u5e02", "value": "450500"}, {
            "text": "\u9632\u57ce\u6e2f\u5e02",
            "value": "450600"
        }, {"text": "\u94a6\u5dde\u5e02", "value": "450700"}, {
            "text": "\u8d35\u6e2f\u5e02",
            "value": "450800"
        }, {"text": "\u7389\u6797\u5e02", "value": "450900"}, {
            "text": "\u767e\u8272\u5e02",
            "value": "451000"
        }, {"text": "\u8d3a\u5dde\u5e02", "value": "451100"}, {
            "text": "\u6cb3\u6c60\u5e02",
            "value": "451200"
        }, {"text": "\u6765\u5bbe\u5e02", "value": "451300"}, {"text": "\u5d07\u5de6\u5e02", "value": "451400"}],
        "460000": [{"text": "\u6d77\u53e3\u5e02", "value": "460100"}, {
            "text": "\u4e09\u4e9a\u5e02",
            "value": "460200"
        }, {
            "text": "\u4e09\u6c99\u5e02",
            "value": "460300"
        }, {"text": "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212", "value": "469000"}],
        "500000": [{"text": "\u5e02\u8f96\u533a", "value": "500100"}, {"text": "\u53bf", "value": "500200"}],
        "510000": [{"text": "\u6210\u90fd\u5e02", "value": "510100"}, {
            "text": "\u81ea\u8d21\u5e02",
            "value": "510300"
        }, {"text": "\u6500\u679d\u82b1\u5e02", "value": "510400"}, {
            "text": "\u6cf8\u5dde\u5e02",
            "value": "510500"
        }, {"text": "\u5fb7\u9633\u5e02", "value": "510600"}, {
            "text": "\u7ef5\u9633\u5e02",
            "value": "510700"
        }, {"text": "\u5e7f\u5143\u5e02", "value": "510800"}, {
            "text": "\u9042\u5b81\u5e02",
            "value": "510900"
        }, {"text": "\u5185\u6c5f\u5e02", "value": "511000"}, {
            "text": "\u4e50\u5c71\u5e02",
            "value": "511100"
        }, {"text": "\u5357\u5145\u5e02", "value": "511300"}, {
            "text": "\u7709\u5c71\u5e02",
            "value": "511400"
        }, {"text": "\u5b9c\u5bbe\u5e02", "value": "511500"}, {
            "text": "\u5e7f\u5b89\u5e02",
            "value": "511600"
        }, {"text": "\u8fbe\u5dde\u5e02", "value": "511700"}, {
            "text": "\u96c5\u5b89\u5e02",
            "value": "511800"
        }, {"text": "\u5df4\u4e2d\u5e02", "value": "511900"}, {
            "text": "\u8d44\u9633\u5e02",
            "value": "512000"
        }, {
            "text": "\u963f\u575d\u85cf\u65cf\u7f8c\u65cf\u81ea\u6cbb\u5dde",
            "value": "513200"
        }, {
            "text": "\u7518\u5b5c\u85cf\u65cf\u81ea\u6cbb\u5dde",
            "value": "513300"
        }, {"text": "\u51c9\u5c71\u5f5d\u65cf\u81ea\u6cbb\u5dde", "value": "513400"}],
        "520000": [{"text": "\u8d35\u9633\u5e02", "value": "520100"}, {
            "text": "\u516d\u76d8\u6c34\u5e02",
            "value": "520200"
        }, {"text": "\u9075\u4e49\u5e02", "value": "520300"}, {
            "text": "\u5b89\u987a\u5e02",
            "value": "520400"
        }, {"text": "\u6bd5\u8282\u5e02", "value": "520500"}, {
            "text": "\u94dc\u4ec1\u5e02",
            "value": "520600"
        }, {
            "text": "\u9ed4\u897f\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
            "value": "522300"
        }, {
            "text": "\u9ed4\u4e1c\u5357\u82d7\u65cf\u4f97\u65cf\u81ea\u6cbb\u5dde",
            "value": "522600"
        }, {"text": "\u9ed4\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde", "value": "522700"}],
        "530000": [{"text": "\u6606\u660e\u5e02", "value": "530100"}, {
            "text": "\u66f2\u9756\u5e02",
            "value": "530300"
        }, {"text": "\u7389\u6eaa\u5e02", "value": "530400"}, {
            "text": "\u4fdd\u5c71\u5e02",
            "value": "530500"
        }, {"text": "\u662d\u901a\u5e02", "value": "530600"}, {
            "text": "\u4e3d\u6c5f\u5e02",
            "value": "530700"
        }, {"text": "\u666e\u6d31\u5e02", "value": "530800"}, {
            "text": "\u4e34\u6ca7\u5e02",
            "value": "530900"
        }, {
            "text": "\u695a\u96c4\u5f5d\u65cf\u81ea\u6cbb\u5dde",
            "value": "532300"
        }, {
            "text": "\u7ea2\u6cb3\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u5dde",
            "value": "532500"
        }, {
            "text": "\u6587\u5c71\u58ee\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
            "value": "532600"
        }, {
            "text": "\u897f\u53cc\u7248\u7eb3\u50a3\u65cf\u81ea\u6cbb\u5dde",
            "value": "532800"
        }, {
            "text": "\u5927\u7406\u767d\u65cf\u81ea\u6cbb\u5dde",
            "value": "532900"
        }, {
            "text": "\u5fb7\u5b8f\u50a3\u65cf\u666f\u9887\u65cf\u81ea\u6cbb\u5dde",
            "value": "533100"
        }, {
            "text": "\u6012\u6c5f\u5088\u50f3\u65cf\u81ea\u6cbb\u5dde",
            "value": "533300"
        }, {"text": "\u8fea\u5e86\u85cf\u65cf\u81ea\u6cbb\u5dde", "value": "533400"}],
        "540000": [{"text": "\u62c9\u8428\u5e02", "value": "540100"}, {
            "text": "\u660c\u90fd\u5730\u533a",
            "value": "542100"
        }, {"text": "\u5c71\u5357\u5730\u533a", "value": "542200"}, {
            "text": "\u65e5\u5580\u5219\u5730\u533a",
            "value": "542300"
        }, {"text": "\u90a3\u66f2\u5730\u533a", "value": "542400"}, {
            "text": "\u963f\u91cc\u5730\u533a",
            "value": "542500"
        }, {"text": "\u6797\u829d\u5730\u533a", "value": "542600"}],
        "610000": [{"text": "\u897f\u5b89\u5e02", "value": "610100"}, {
            "text": "\u94dc\u5ddd\u5e02",
            "value": "610200"
        }, {"text": "\u5b9d\u9e21\u5e02", "value": "610300"}, {
            "text": "\u54b8\u9633\u5e02",
            "value": "610400"
        }, {"text": "\u6e2d\u5357\u5e02", "value": "610500"}, {
            "text": "\u5ef6\u5b89\u5e02",
            "value": "610600"
        }, {"text": "\u6c49\u4e2d\u5e02", "value": "610700"}, {
            "text": "\u6986\u6797\u5e02",
            "value": "610800"
        }, {"text": "\u5b89\u5eb7\u5e02", "value": "610900"}, {"text": "\u5546\u6d1b\u5e02", "value": "611000"}],
        "620000": [{"text": "\u5170\u5dde\u5e02", "value": "620100"}, {
            "text": "\u5609\u5cea\u5173\u5e02",
            "value": "620200"
        }, {"text": "\u91d1\u660c\u5e02", "value": "620300"}, {
            "text": "\u767d\u94f6\u5e02",
            "value": "620400"
        }, {"text": "\u5929\u6c34\u5e02", "value": "620500"}, {
            "text": "\u6b66\u5a01\u5e02",
            "value": "620600"
        }, {"text": "\u5f20\u6396\u5e02", "value": "620700"}, {
            "text": "\u5e73\u51c9\u5e02",
            "value": "620800"
        }, {"text": "\u9152\u6cc9\u5e02", "value": "620900"}, {
            "text": "\u5e86\u9633\u5e02",
            "value": "621000"
        }, {"text": "\u5b9a\u897f\u5e02", "value": "621100"}, {
            "text": "\u9647\u5357\u5e02",
            "value": "621200"
        }, {
            "text": "\u4e34\u590f\u56de\u65cf\u81ea\u6cbb\u5dde",
            "value": "622900"
        }, {"text": "\u7518\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde", "value": "623000"}],
        "630000": [{"text": "\u897f\u5b81\u5e02", "value": "630100"}, {
            "text": "\u6d77\u4e1c\u5e02",
            "value": "630200"
        }, {
            "text": "\u6d77\u5317\u85cf\u65cf\u81ea\u6cbb\u5dde",
            "value": "632200"
        }, {
            "text": "\u9ec4\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde",
            "value": "632300"
        }, {
            "text": "\u6d77\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde",
            "value": "632500"
        }, {
            "text": "\u679c\u6d1b\u85cf\u65cf\u81ea\u6cbb\u5dde",
            "value": "632600"
        }, {
            "text": "\u7389\u6811\u85cf\u65cf\u81ea\u6cbb\u5dde",
            "value": "632700"
        }, {"text": "\u6d77\u897f\u8499\u53e4\u65cf\u85cf\u65cf\u81ea\u6cbb\u5dde", "value": "632800"}],
        "640000": [{"text": "\u94f6\u5ddd\u5e02", "value": "640100"}, {
            "text": "\u77f3\u5634\u5c71\u5e02",
            "value": "640200"
        }, {"text": "\u5434\u5fe0\u5e02", "value": "640300"}, {
            "text": "\u56fa\u539f\u5e02",
            "value": "640400"
        }, {"text": "\u4e2d\u536b\u5e02", "value": "640500"}],
        "650000": [{
            "text": "\u4e4c\u9c81\u6728\u9f50\u5e02",
            "value": "650100"
        }, {"text": "\u514b\u62c9\u739b\u4f9d\u5e02", "value": "650200"}, {
            "text": "\u5410\u9c81\u756a\u5730\u533a",
            "value": "652100"
        }, {
            "text": "\u54c8\u5bc6\u5730\u533a",
            "value": "652200"
        }, {
            "text": "\u660c\u5409\u56de\u65cf\u81ea\u6cbb\u5dde",
            "value": "652300"
        }, {
            "text": "\u535a\u5c14\u5854\u62c9\u8499\u53e4\u81ea\u6cbb\u5dde",
            "value": "652700"
        }, {
            "text": "\u5df4\u97f3\u90ed\u695e\u8499\u53e4\u81ea\u6cbb\u5dde",
            "value": "652800"
        }, {
            "text": "\u963f\u514b\u82cf\u5730\u533a",
            "value": "652900"
        }, {
            "text": "\u514b\u5b5c\u52d2\u82cf\u67ef\u5c14\u514b\u5b5c\u81ea\u6cbb\u5dde",
            "value": "653000"
        }, {"text": "\u5580\u4ec0\u5730\u533a", "value": "653100"}, {
            "text": "\u548c\u7530\u5730\u533a",
            "value": "653200"
        }, {
            "text": "\u4f0a\u7281\u54c8\u8428\u514b\u81ea\u6cbb\u5dde",
            "value": "654000"
        }, {"text": "\u5854\u57ce\u5730\u533a", "value": "654200"}, {
            "text": "\u963f\u52d2\u6cf0\u5730\u533a",
            "value": "654300"
        }, {"text": "\u81ea\u6cbb\u533a\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212", "value": "659000"}],
        "710000": "",
        "810000": "",
        "820000": ""
    };