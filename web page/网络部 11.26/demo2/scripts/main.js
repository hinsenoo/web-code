window.onload = function(){
    // 小图标视觉360°运动
    var pop = document.getElementById('pop');
    var list = pop.getElementsByTagName('a');
    for(var i = 0;i < list.length; i++){
        list[i].onmouseenter = function(){
            var icon = this.getElementsByTagName('em')[0];
            startMove(icon,{top:-15,opacity:0},function(){
                icon.style.top = 25 + 'px';
                startMove(icon,{top:15,opacity:100});
            });     
        }
    }
    //拉伸模块
    var show = document.getElementById('show');
    pop.onmouseover = function(){
        startMove(pop,{bottom:422});
    }
    pop.onmouseout = function(){
        startMove(pop,{bottom:0});
    }
    var webIcon = document.getElementById('web-icon');
    var serverIcon = document.getElementById('server-icon');
    var hackerIcon = document.getElementById('hacker-icon');
    change(webIcon,serverIcon,hackerIcon);
}