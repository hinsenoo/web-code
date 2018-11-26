//函数作用：隐藏其他元素  以及  重现
    function transparent(obj,check){
        var title = document.getElementById('title');
        var footer = document.getElementById('footer');
        var web = document.getElementById('web');
        var server = document.getElementById('server');
        var hacker = document.getElementById('hacker');
        var arr = [title,footer,web,server,hacker];
        //为flase时 透明度降低  除被选择元素外  true时透明度都为1
        if(check){
                for (var i = 0;i < arr.length;i++){
                    startMove(arr[i],{opacity:100});
                }
            }else{
                for (var i = 0;i < arr.length;i++){
                    if( obj != arr[i]){
                        startMove(arr[i],{opacity:0});
                    }else{
                        startMove(arr[i],{opacity:100});
                    }
                }
            }
    }
//函数作用：触发transparent函数
    /*function hide(obj,objParent){
        var appear = true;
        obj.onmouseover = function(){
            transparent(objParent,!appear);
        }
        obj.onmouseout = function(){
            transparent(objParent,appear);
        }
    }*/

//函数作用：触发transparent函数 隐藏其他元素  并且切换背景图片
    function change(fObj,sObj,tObj){
        var appear = true;
        var background = document.getElementById('main');
        var button = document.getElementsByClassName('button');
        for(var i = 0; i < 3;i++){
            if(i == 0){
                fObj.onmouseover = function(){
                    transparent(this.parentNode,!appear);
                    background.style.background = "url(imgs/background/web.jpg)";
                    background.style.backgroundSize = "100% 100%";
                    button[0].style.color = "#efa733";
                }
                fObj.onmouseout = function(){
                    transparent(this.parentNode,appear);
                    background.style.background = "url(imgs/background/homePage.png)";
                    background.style.backgroundSize = "100% 100%";
                    button[0].style.color = "#4c4747";
                }
            }else if(i == 1){
                sObj.onmouseover = function(){
                    transparent(this.parentNode,!appear);
                    background.style.background = "url(imgs/background/server.jpg)";
                    background.style.backgroundSize = "100% 100%";
                    button[1].style.color = "#176bfa";
                }
                sObj.onmouseout = function(){
                    transparent(this.parentNode,appear);
                    background.style.background = "url(imgs/background/homePage.png)";
                    background.style.backgroundSize = "100% 100%";
                    button[1].style.color = "#4c4747";
                }
            }else{
                tObj.onmouseover = function(){
                    transparent(this.parentNode,!appear);
                    background.style.background = "url(imgs/background/hacker.png)";
                    background.style.backgroundSize = "100% 100%";
                    button[2].style.color = "#860917";
                }
                tObj.onmouseout = function(){
                    transparent(this.parentNode,appear);
                    background.style.background = "url(imgs/background/homePage.png)";
                    background.style.backgroundSize = "100% 100%";
                    button[2].style.color = "#4c4747";
                }
            }
        }
                
    }

