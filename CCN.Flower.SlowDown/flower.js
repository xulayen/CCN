
function flowerFnNew(){
    var oFlower=document.getElementById('flower');
    var FW=oFlower.offsetWidth;
    var FH=oFlower.offsetHeight;
    for(var i=0;i<20;i++){
        var aDiv=document.createElement('div');
        oFlower.appendChild(aDiv);
    }
    var aDivs=oFlower.getElementsByTagName('div');
    for(var j=0;j<aDivs.length;j++){
        var index=parseInt(8*Math.random())+1;
        aDivs[j].className='img'+index;
        aDivs[j].style.left=parseInt(FW*Math.random())+'px';
        aDivs[j].style.top=parseInt(FH*Math.random())+'px';
        isFirst=true;
        newRun(aDivs[j]);
    }
    function newRun(obj){
        obj.x=parseInt(FW*Math.random());
        if(obj.y>=FH&&!isFirst){
            obj.style.top='0px';
        }
        obj.y=parseInt(FH*Math.random())+FH;
        if(obj.y>=FH+50){
            obj.y=FH+50;
        }
        startMove(obj,{left:obj.x,top:obj.y},function(){
            isFirst=false;
            newRun(obj);
        });
    }
}
flowerFnNew();
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}
function startMove(obj,json,endFn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var bBtn = true;
        for(var attr in json){

            var iCur = 0;

            if(attr == 'opacity'){
                if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
                    iCur = Math.round(parseFloat(getStyle(obj,attr))*100);

                }
                else{
                    iCur = Math.round(parseFloat(getStyle(obj,attr))*100) || 100;
                }
            }
            else{
                iCur = parseInt(getStyle(obj,attr)) || 0;
            }

            var iSpeed = (json[attr] - iCur)/300;
            iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if(iCur!=json[attr]){
                bBtn = false;
            }

            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed)+ ')';
                obj.style.opacity = (iCur + iSpeed)/100;
            }
            else{
                obj.style[attr] = iCur + iSpeed + 'px';
            }
        }

        if(bBtn){
            clearInterval(obj.timer);

            if(endFn){
                endFn.call(obj);
            }
        }

    },30);

}