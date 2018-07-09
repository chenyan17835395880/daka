$(function () {

    /*显示邀请的好友*/
    var box = document.querySelector("#ulzhe");
    var startx,starty,movex,movey
    box.addEventListener("touchstart", function (e){
        e.preventDefault()
        startx=e.touches[0].clientX,starty=e.touches[0].clientX;
    })
    box.addEventListener("touchmove", function (e){
        e.preventDefault()
        movex=e.touches[0].clientX,movey=e.touches[0].clientX;
    })

    /*榜单的昵称*/
    $('.ul li span').each(function(index,value){
        var str=$(value).html();
        var arr=[],arr1=[];
        arr.push(str.substring(0,str.length-1));
        for(var i=0;i<arr.length;i++){
            function replace(str, start, end, symbol) {
                start = ~~start, end = ~~end || str.length, symbol = symbol || '*',
                    num = end - start, sb = '',
                    reg = new RegExp('(.{' + start + '}).{' + num + '}(.*)');
                for (var i = 0; i < num; i++) {
                    sb += symbol;
                }
                return str.replace(reg, '$1' + sb + '$2');
            }
            $(value).html(replace(str,0,str.length-1))
        }
    })

    /*每个榜单的上下滑动*/
    var rewardlist = document.querySelector("#rewardlist");
    rewardlist.addEventListener("touchstart", function (e){
        e.preventDefault()
        startx=e.touches[0].clientX,starty=e.touches[0].clientX;
        console.log(1)
        $('#rewardlist').stop( true,true )

    })
    rewardlist.addEventListener("touchmove", function (e){
        e.preventDefault()
        movex=e.touches[0].clientX,movey=e.touches[0].clientX;
        console.log(movex-startx)

    })



})