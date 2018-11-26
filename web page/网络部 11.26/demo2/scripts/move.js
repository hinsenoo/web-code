//函数作用：获取对象样式
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
} 
//函数作用：运动框架
//fn为函数 startMove(obj,(attr1:iTarget,attr2:iTarget2),fn)
function startMove(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;//假设
        for(var attr in json)
        {
        //1.取当前的值
            var iCur = 0;
            if(attr == 'opacity'){
                iCur = Math.round(parseFloat(getStyle(obj,attr)) * 100);
            }
            else{
                iCur = parseInt(getStyle(obj,attr));
            }
            //2.算速度
            var iSpeed = (json[attr] - iCur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            //3.检测停止
            if(iCur != json[attr])
            {
                flag = false;
            }
            if(attr == 'opacity'){
                obj.style.filter = 'alpha:(opacity:'+(iCur + iSpeed)+')';
                obj.style.opacity = (iCur + iSpeed) / 100;
            }
            else{
                    obj.style[attr] = iCur + iSpeed + "px";
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn)
            {
                fn();
            }
        }
    },20)
    //改变时间值 控制速度大小
}