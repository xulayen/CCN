$(function(){
    tabSwitch();
});
function tabSwitch(){                //积分清单  门店中心切换
    var oLine=document.getElementsByClassName('switch_line')[0];
    var oLeft=document.getElementsByClassName('switch_l')[0];
    var oRight=document.getElementsByClassName('switch_r')[0];
    var oSwitchL=document.getElementsByClassName('switch_onL')[0];
    var oSwitchR=document.getElementsByClassName('switch_onR')[0];
    var oBlock=document.getElementsByClassName('switch_block')[0];
    var l=oLine.offsetWidth-oBlock.offsetWidth+2;
    window.addEventListener("resize", function(){
        l=oLine.offsetWidth-oBlock.offsetWidth+2;
        if(oBlock.offsetLeft!=0){
            oBlock.style.left=l+'px';
        }
    }, false);
    oSwitchL.ontouchend=function(){
        startMove(oBlock,{left:0},300,'easeOut');
        oLeft.style.fontSize='0.76rem';
        oRight.style.fontSize='0.6rem';
        $('.user_detail,.btn_exit').hide();
        $('.user_point').show();
    };
    oSwitchR.ontouchend=function(){
        startMove(oBlock,{left:l},300,'easeOut');
        oLeft.style.fontSize='0.6rem';
        oRight.style.fontSize='0.76rem';
        $('.user_point').hide();
        $('.user_detail,.btn_exit').show();
    }
}