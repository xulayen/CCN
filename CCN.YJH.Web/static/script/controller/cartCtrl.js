var cart = {
    list: [],
    currentCart: {},
    currentSelectAdr: {},
    link: {
        man: localStorage.getItem("userLinkMan") || '吴秀波',
        phone: localStorage.getItem("userLinkPhone") || '13788955988'
    },
    currentIndex: 0
};


$(function () {


    ShowOrder_Box();

    hideOrder_Box();

    //显示购物车
    LoadCartList();

    //选择地址按钮操作
    select_icon_address_btn();

    //新增或修改数量
    addandsub();

    //显示地址详情、结算订单
    ShowAddressDetail();

    //清空购物车
    DeleteAllGoods();


    ShowUserInfo();

    UpdateUserInfo();

    GetUserInfo();

    InitPage();

    GetUserAddressList();

    initGoodsPoint();

    DeleteSingle();

    $("#btn_createorder").click(function(){CreateOrderChange();});

})

function LoadCartList() {

    $("#div_cartlist").html('');
    var carlist = localStorage.getItem('carlist') || [];
    var json_cartlist = JSON.parse(carlist);
    if (json_cartlist.length <= 0) {
        layer.msg("购物车空空如也~赶快去添加商品吧！");
        return;
    }
    var lis = "";

    for (var i = 0; i < json_cartlist.length; i++) {
        
        var bk_rul = '../../../static/images/mall/goods/' + json_cartlist[i].goodmsrc + '.png';

        lis += '<div class="sc-box"><div class="sc-box-header"><span class="ft_333333">' + json_cartlist[i].goodname + '</span><img class="img_del" src="../../static/images/del_icon.png"></div><div class="sc-box-cnt"><img class="select_icon" src="../../static/images/select_icon.png"><div class="sc-box-cnt-left ft_333333"><input type="hidden" class="r_good_id" value='+ json_cartlist[i].goodid+' ><input type="hidden" class="r_good_name" value='+ json_cartlist[i].goodname +' ><p><span class="cart_point">积分</span><span class="ft_yellow r_goods_points">' + json_cartlist[i].goodpoint + '</span></p><hr><p><span>数量</span> <span class="ft_yellow"><b class="fl_l mgl_15 subtract">-</b> <a class="ft_num r_goodnum">' + json_cartlist[i].goodnum + '</a> <b class="fl_r mgr_15 add">+</b> </span></p></div><img style="width: 36%; right: 4%; bottom: 0%;" class="good-img" src="' + bk_rul + '"></div></div>';

    }

    $("#div_cartlist").html(lis);


}

function ShowAddressDetail() {
    $('.sc-footer-button').click(function () {
        //$('.mask,.change_result').show();
    });
    $('.mask').click(function () {
        $('.mask,.change_result').hide();
    });

}

function addandsub() {
    $('.subtract').click(function () {
        var num = parseInt($(this).next('a').text());
        if(num<=1){
            layer.msg('亲，不能再减少了！');
            return;
        }
        var goods_point=$(this).parents('p').siblings('p').find('.r_goods_points');
        var goods_point_current=$(goods_point).text();
        var goods_point_one=Number(goods_point_current)/num;
        num--;
        $(goods_point).text(goods_point_one*num);
        $(this).next('a').text(num);
        var isCurrent=$(this).parents('.sc-box-cnt').find('.select_icon').hasClass('active');
        if(isCurrent){
            $('.sc-footer-z b').text(num);
            $('.sc-footer-x b').text(goods_point_one*num);
        }
    });
    $('.add').click(function () {
        var num = parseInt($(this).prev('a').text());
        if(num>=10){
            layer.msg('已超出最大数量');
            return;
        }
        
        var goods_point=$(this).parents('p').siblings('p').find('.r_goods_points');
        var goods_point_current=$(goods_point).text();
        var goods_point_one=Number(goods_point_current)/num;
        num++;
        $(goods_point).text(goods_point_one*num);
        $(this).prev('a').text(num);
        var isCurrent=$(this).parents('.sc-box-cnt').find('.select_icon').hasClass('active');
        if(isCurrent){
            $('.sc-footer-z b').text(num);
            $('.sc-footer-x b').text(goods_point_one*num);
        }
    });

}

function select_icon_address_btn() {
    $('.select_icon').bind('click', function () {
        if($(this).hasClass('active')){
            return;
        }else{
            $('.select_icon').removeClass('active');
            $('.select_icon').attr('src', '../../static/images/select_icon.png');
            $(this).addClass('active');
            $(this).attr('src', '../../static/images/select_c_icon.png');
            var goods_detail=$(this).siblings('.sc-box-cnt-left');
            var goods_num_sum=$(goods_detail).find('.r_goodnum').text();
            var goods_point_sum=$(goods_detail).find('.r_goods_points').text();
            $('.sc-footer-z b').text(goods_num_sum);
            $('.sc-footer-x b').text(goods_point_sum);
        }
        
    })

}


function DeleteAllGoods() {
    $("#delete_all_goods").bind("click", function () {

        if (!confirm("确定清空购物车吗？")) {
            return;
        }
        $('.sc-footer-z b').text(0);
        $('.sc-footer-x b').text(0);
        localStorage.setItem('carlist', '');
        $("#div_cartlist").html('');
        layer.msg("购物车空空如也~赶快去添加商品吧！");
    })
}


function ShowOrder_Box() {
    $("#btn_go").bind("click", function () {

        var selectedgood = $(".select_icon.active");
        if(selectedgood == undefined || selectedgood.length <= 0){
            layer.msg("请先选择需要兑换的商品！");
            return;
        }

        $('.mask').show();
        //$(".change_result").sho();
        $("#order_box").show();


        var $goodpoint = $(selectedgood).siblings(".sc-box-cnt-left").find(".r_goods_points").html();
        var $goodnum = $(selectedgood).siblings(".sc-box-cnt-left").find(".r_goodnum").html();
        var $goodid = $(selectedgood).siblings(".sc-box-cnt-left").find(".r_good_id").val();

        $("#span_goods_point").html($goodpoint);
        $("#num").html($goodnum);
        $("#span_total_points").html($goodpoint * $goodnum );

        GetUserAddressList();

    })
}


function hideOrder_Box() {
    $('.mask').click(function () {
        $('.mask,.change_result,.order-box').hide();
    });
}


function InitPage() {
    $('.info-cnt').mouseover(function ()
    {
        $(this).find('.cnt').css('padding-left', 17);
        $(this).find('img').show();
    });
    $('.info-cnt').mouseout(function ()
    {
        $(this).find('.cnt').css('padding-left', 0);
        $(this).find('img').hide();
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
}









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
    var zhang=10;
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
    var giftid = $(".select_icon.active").siblings(".sc-box-cnt-left").find(".r_good_id").val();
    var gifname = $(".select_icon.active").siblings(".sc-box-cnt-left").find(".r_good_name").val();
    //var giftid = getUrlParam("id");                                         //礼品编号
    //var gifname = $("#giftname").html();                                    //礼品名称
    var giftnum = $("#num").html();                                          //数量
    var giftpoints = $("#span_goods_point").html();                                //商品单个积分

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




function DeleteSingle(){
    
    $(".img_del").bind("click",function(){
        
        if(!confirm("是否删除该记录")){
            return;
        }
       
        var $current_good = $(this);
        var $r_good_id = $(this).parents().siblings(".sc-box-cnt").find(".r_good_id").val()

        var carlist = localStorage.getItem('carlist') || [];
        var json_cartlist = JSON.parse(carlist);

        for (var i = 0; i < json_cartlist.length; i++) {
            var $loc_id = json_cartlist[i].goodid;
            if($r_good_id == $loc_id){
                var isSelected=$(this).parents('.sc-box').find('.select_icon').hasClass('active');
                if(isSelected){
                    $('.sc-footer-z b').text(0);
                    $('.sc-footer-x b').text(0);
                }
                //删除本地存储内数据
                json_cartlist.splice(i,1);
                $($current_good).parents('.sc-box').hide();
                console.log($loc_id);
                if (json_cartlist.length <= 0) {
                    layer.msg("购物车空空如也~赶快去添加商品吧！");
                }
            }

        }   

        localStorage.setItem('carlist',JSON.stringify(json_cartlist)); 

    })

}