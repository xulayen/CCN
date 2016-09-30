$(function ()
{
    addcart();
    ShowUserInfo();
    UpdateUserInfo();
    GetUserInfo();

    $('.mask').click(function () {
        $('.mask,.change_result,.order-box').hide();
    });

    $('.info-cnt').mouseover(function ()
    {
        //$(this).find('.cnt').css('padding-left', 0);
        //$(this).find('img').show();
    });
    $('.info-cnt').mouseout(function ()
    {
//        $(this).find('.cnt').css('padding-left', 0);
//        $(this).find('img').hide();
    });
    $('.edit').click(function ()
    {
        $id = $(this).attr('data-id');
        $('.' + $id).find('.info-cnt-edit').show();
        $('.' + $id).find('.info-cnt-top').hide();
        $('.' + $id).css("border-color", '#ffd600');
        $('.' + $id).next().css("border-left-color", '#ffd600');
        $('.order-box-footer .button').css({
            'background': '#e7e7e7',
            'color': '#666666'
        });
    });
    $('.order-box-info .button').click(function ()
    {
        $id = $(this).attr('data-id');
        $('.' + $id).find('.info-cnt-edit').hide();
        $('.' + $id).find('.info-cnt-top').show();
        $('.' + $id).css("border-color", '#919191');
        $('.' + $id).next().css("border-left-color", '#919191');
        $('.order-box-footer .button').css({
            'background': '#ffd600',
            'color': '#ffffff'
        });
    });
    $('#subtract').click(function ()
    {
         var num=parseInt($('.num').text());
         if(num<=1){
            layer.msg('亲，不能再减少了！');
            return;
        }
        $num = num - 1;
        $('.num,#num').text($num);


        var good_num =$("#num").html();
        var good_point = $("#good_point").html();
        var totalpoints = good_point * good_num;

        $("#span_total_points").text(totalpoints);

    });
    $('#add').click(function ()
    {
        var num=parseInt($('.num').text());
        if(num>=10){
            layer.msg('已超出最大数量');
            return;
        }
        $('.num,#num').text(num + 1);
        
        $num = parseInt($('.num').text());

        var good_num =$("#num").html();
        var good_point = $("#good_point").html();
        var totalpoints = good_point * good_num;

        $("#span_total_points").text(totalpoints);

    });


    //    $('.select_img').click(function ()
    //    {
    //        $('.select_img').removeClass('active');
    //        $('.select_img').attr('src', '../../static/images/select_icon.png');
    //        $(this).addClass('active');
    //        $(this).attr('src', '../../static/images/select_c_icon.png');
    //    });
   
//    $('.new_button').click(function ()
//    {
//        $value = $(this).prev().val();
//        $(this).prev().val('');
//        $(this).parent().hide();
//        $('.new-address').show();
//        var strVar = "";
//        strVar += "            <li>";
//        strVar += "                <img class=\"select_img\" src=\"../../static/images/select_icon.png\">";
//        strVar += "                <input readonly value=" + $value + ">";
//        strVar += "                <div class=\"ac-right\">";
//        strVar += "                    <img data-id=\"del\" src=\"../../static/images/del_c_icon.png\">";
//        strVar += "                    <img src=\"../../static/images/vertical_line.png\">";
//        strVar += "                    <img data-id=\"edit\" src=\"../../static/images/edit.png\">";
//        strVar += "                <\/div>";
//        strVar += "                <a class=\"button\">完成<\/a>";
//        strVar += "            <\/li>";
//        $(strVar).insertBefore($(this).parent());
//        console.log('12');
//        $('.order-box-footer .button').css({ 'background': '#ffd200' });
//    });


    

    //GetUserAddressList();

    //initGoodsPoint();

    $("#btn_createorder").click(function(){CreateOrderChange();});

});


function initGoodsPoint(){
    $("#span_goods_point").html($("#good_point").html());
    $("#span_total_points").html($("#good_point").html());
    $("#span_total_points").bind();
}

function resetOrderDetail(){
    $("#num").html("1");
    $("#span_good_count").html("1");
}


function select_address_btn(){
    $('.select_img').bind('click',function(){
        $('.select_img').removeClass('active');
        $('.select_img').attr('src', '../../static/images/select_icon.png');
        $(this).addClass('active');
        $(this).attr('src', '../../static/images/select_c_icon.png');
    })
}


function update_address_btn(){
    $('li img').click(function ()
    {
        $id = $(this).attr('data-id');
        if ($id == 'del')
        {
            DeleteAddressByUserId($(this));

        } else if ($id == 'edit')
        {
            $(this).parents('li').css('border-color', '#ffd600');
            $(this).parent().hide();
            $(this).parent().next().show();
            $(this).parent().prev('input').removeAttr('readonly');
            $(this).parent().prev('input').focus();
            $(this).parent().prev('input').val($(this).parent().prev('input').val());
            $(this).parent().prev('input').css('margin-left', 41);
            $(this).parent().prevAll('img').hide();
            $('.order-box-footer .button').css({
                'background': '#e7e7e7',
                'color': '#666666'
            });
        }
    });

    $('li .button').click(function ()
    {
        $(this).hide();
        $(this).prev().show();
        $(this).prevAll('input').attr('readonly', 'readonly');
        $(this).prevAll('input').css('margin-left', 0);
        $(this).prevAll('img').show();
        $(this).parents('li').css('border-color', '#fff');
        $('.order-box-footer .button').css({
            'background': '#ffd600',
            'color': '#ffffff'
        });
    });
    $('.new-address').click(function ()
    {
        $(this).hide();
        $('.new').show();
        $('.order-box-footer .button').css({
            'background': '#e7e7e7',
            'color': '#666666'
        });
    });

        
    //点击完成修改地址
    $(".btn_update_address").bind("click",function(){

        var addrid = $(this).parent().find('.hid_addrid').val();
        var addressname = $(this).parent().find('.update_address_btn').val();

        var data = {
            'action': '3',
            'addressid': addrid,    //地址id
            'realname':'戴思敏',                                //收货姓名
            'postmobile':'18918928542',                         //收货人手机号
            'postprovince':'上海市1',                           //省
            'postcity':'上海市1',                               //市   
            'postcounty':'黄浦区1',                             //区   
            'detailaddress': addressname,                      //详细地址
            'zipcode':'202222',                                //邮编
        };

        $.ajax({
            type: "get",
            url: url_config.url,
            data: data,
            dataType: "json",
//            dataType: "jsonp",
//            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            success: function (data)
            {

                var message = data.message;
                if (data.state == 0)
                {
                    alert("修改成功！");
                } else
                {
                    alert("修改失败！");
                }
            },
            error: function (e)
            {
            }
        });


    })

}

//获取地址
function GetUserAddressList()
{

    var orderli = "";

    $("#order_address_list").html('');

    $.ajax({
        type: "get",

        url: url_config.url,
        data: {
            'action': '0',
            userid: 'c786e011d1fb4a5996c7499e7ff28ecc'
        },
        dataType: "json",
//        dataType: "jsonp",
//        jsonp: "callback", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
        success: function (data)
        {

            var message = data.message;
            if (data.state == 0)
            {

                var json = JSON.parse(data.data);

                var lis = "";
                $.each(json, function (idx, obj)
                {

                    lis += '<li><input type="hidden" class="hid_addrid" value="'+ obj.ADDRESSID +'" /><img class="select_img" src="../../static/images/select_icon.png"><input readonly class="update_address_btn" value="' + obj.DETAILADDRESS + '"><div class="ac-right"><img data-id="del" src="../../static/images/del_c_icon.png" class="img_address_delete"><img src="../../static/images/vertical_line.png"><img data-id="edit" src="../../static/images/edit.png"></div><a class="button btn_update_address">完成</a></li>';
                });

                $(".order_address_list").html(lis).append('<li class="new" id="li_address"><input value="" id="txt_address"><a class="new_button" id="btn_add_address">新建</a></li>');

                //获取列表
                select_address_btn();

                //更新地址
                update_address_btn();

                //新增地址
                //$("#btn_add_address").bind("click",function(){AddAddressByUserId});


                $("#btn_add_address").click(function(){
                    AddAddressByUserId();
                })

            } else
            {
                alert("获取地址列表有误！");
            }
        },
        error: function (e)
        {
        }
    });

}


//新增地址
function AddAddressByUserId()
{
    $('.new-address').show();
    $('.order-box-footer .button').css({ 'background': '#ffd200' });
    $('#li_address').hide();

    var orderli = "";
    var realname = "";
    var addressdetail = $("#txt_address").val();

    $("#order_address_list").html('');

    var data = {
        'action': '2',
        'userid': 'c786e011d1fb4a5996c7499e7ff28ecc',
        'realname':'戴思敏',
        'postmobile':'18918928545',
        'postprovince':'上海市',
        'postcity':'上海市',
        'postcounty':'黄浦区',
        'detailaddress':addressdetail,
        'zipcode':'201111',
    };

    $.ajax({
        type: "get",

        url: url_config.url,
        data: data,
        dataType : "json",
//        dataType: "jsonp",
//        jsonp: "callback", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
        success: function (data)
        {

            var message = data.message;
            if (data.state == 0)
            {
                alert("新增成功！")
            } else
            {
                alert("新增失败，请重新添加！")
            }
             $('.mask,.order_box').hide();
        },
        error: function (e)
        {
        }
    });

}



//新增地址
function DeleteAddressByUserId($li_del)
{
    
    if(!confirm("是否删除改地址？")){
        return;
    }

    var addrid = $($li_del).parent().parent().find('.hid_addrid').val();
    
    if(addrid == "" || addrid == undefined){
        alert("请先选择一个地址！");
        return;
    }

    var data = {
        'action': '4',
        'addressid': addrid,     //地址id
    };

    $.ajax({
        type: "get",
        url: url_config.url,
        data: data,
        dataType: "json",
//        dataType: "jsonp",
//        jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
        success: function (data)
        {

            var message = data.message;
            if (data.state == 0)
            {
                $($li_del).parent().parent().remove();

            } else
            {

            }


        },
        error: function (e)
        {
        }
    });

}



function CreateOrderChange(){

    if(!confirm("是否确认兑换？")){
        return;
    }


    var addressid = $(".select_img.active").parent().find(".hid_addrid").val();   //地址id
    var giftid = getUrlParam("id");                                         //礼品编号
    var gifname = $("#giftname").html();                                    //礼品名称
    var giftnum = $("#num").html();                                          //数量
    var giftpoints = $("#good_point").html();                                //商品单个积分

    if(addressid  == undefined || addressid == ""){
        alert("请选择收货地址！");
        return;
    }

    if(giftnum <= 0 ){
        alert("兑换数量大于0！");
    }

    var data = {
                'action': '5',
                'addressid': addressid,    //地址id
                'userid': 'c786e011d1fb4a5996c7499e7ff28ecc',       //用户id
                'giftid': giftid,                                  //礼品编号
                'giftname': gifname,                          //礼品名称
                'giftnum': giftnum,                                     //数量
                'giftpoints': giftpoints                                //商品单个积分
            };

    $.ajax({
        type: "get",
        url: url_config.url,
        data: data,
        dataType: "json",
//        dataType: "jsonp",
//        jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
        success: function (data)
        {

            var message = data.message;
            if (data.state == 0)
            {
                $("#order_box").hide();
                $('.mask,.change_result').show();
                //$($li_del).parent().parent().remove();

            } else
            {

            }


        },
        error: function (e)
        {
        }
    });

}

function ShowUserInfo(){
    var man = localStorage.getItem("userLinkMan") || '吴秀波';
    var phone = localStorage.getItem("userLinkPhone") || '13788955988';
    $("#span_showname").html(man);
    $("#span_showphoneno").html(phone);
}

function UpdateUserInfo(){
    

    $("#btn_ok_username").bind("click",function(){
        var editname = $("#txt_editname").val();

        if(editname == "" || editname == undefined){
            layer.msg("收件人不为空");
            return;
        }
        localStorage.setItem("userLinkMan",editname);
        $("#span_showname").html(editname);
    })
    

    $("#btn_ok_userphone").bind("click",function(){
        var editphoneno = $("#txt_editphoneno").val();
        if(editphoneno == "" || editphoneno == undefined){
            layer.msg("收件人手机号不为空");
            return;
        }
        localStorage.setItem("userLinkPhone",editphoneno);
        $("#span_showphoneno").html(editphoneno);

    })


}


//添加购物车
function addcart(){

    //本地存储添加购物车逻辑
    $("#add_cart").bind("click",function(){
        
        var carlist = localStorage.getItem('carlist') || [];

        var currentgood = {};
        currentgood.goodid = getUrlParam("id");
        currentgood.goodname = "";
        currentgood.goodpoint = "";
        currentgood.goodmsrc = "";
        currentgood.goodnum = 1;

        if(carlist.length > 0){
            var json_cartlist = JSON.parse(carlist);
            for (var i = 0; i < goodsAll.length; i++) {
            if( currentgood.goodid == goodsAll[i].id){
                    //如果找到商品，获取商品积分并添加到 购物车
                    currentgood.goodname = goodsAll[i].name;
                    currentgood.goodpoint = goodsAll[i].point;
                    currentgood.goodmsrc = goodsAll[i].m_src;
                    if(json_cartlist.length > 0){
                        for (var j = 0; j < json_cartlist.length; j++) {

                            var j_goodid = json_cartlist[j].goodid;
                            var j_goodnum = json_cartlist[j].goodnum;

                            if(currentgood.goodid == j_goodid){
                                currentgood.goodnum = parseInt(j_goodnum) + 1;
                                json_cartlist.splice(j,1);
                            }
                        }
                    }
                    json_cartlist.push(currentgood);

                    localStorage.setItem('carlist',JSON.stringify(json_cartlist)); 
                    console.log(cart.carlist);
                    layer.msg("添加购物车成功");
                }
            }
        }else{
            var json_cartlist = carlist;
            for (var i = 0; i < goodsAll.length; i++) {
            if( currentgood.goodid == goodsAll[i].id){
                    //如果找到商品，获取商品积分并添加到 购物车
                    currentgood.goodname = goodsAll[i].name;
                    currentgood.goodpoint = goodsAll[i].point;
                    currentgood.goodmsrc = goodsAll[i].m_src;
                    json_cartlist.push(currentgood);
                    localStorage.setItem('carlist',JSON.stringify(json_cartlist)); 
                    console.log(cart.carlist);
                    layer.msg("添加购物车成功");
                }
            }
        }

    })


}


function ShowAddressDetail() {
    $('.sc-footer-button').click(function () {
        $('.mask,.change_result').show();
    });
   

}