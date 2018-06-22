$(function () {
    /*排行榜的手动滑动*/
    var movebox= $('.RankingListbox');
    var zhe=$('#zhe');
    //获取需要拖拽的div
    var div1 = document.getElementById("ranklist");
    var zhe1=document.getElementById('zhe');
    /**谷歌**/
    zhe1.ontouchstart = function (evt) {
        evt.preventDefault();
        var oEvent = evt || event;
        //获取按下鼠标到div left  top的距离
        var distanceX = oEvent.changedTouches[0].clientX - div1.offsetLeft;
        //添加doc滑动时间
        document.ontouchmove = function (evt) {
            var oEvent = evt || event;
            //重新计算div的left top值
            var left = oEvent.changedTouches[0].clientX - distanceX;
            //left  当小于等于零时，设置为零 防止div拖出document之外
            if (left >= 0) {
                left = 0;
            }
            //当left 超过文档右边界  设置为右边界
            else if (left <= document.documentElement.clientWidth - div1.offsetWidth) {
                left = document.documentElement.clientWidth - div1.offsetWidth;
            }
            //重新给div赋值
            div1.style.left = left + "px";
        }
        //添加鼠标抬起事件
        zhe1.ontouchend = function () {
            //清空事件
            document.ontouchstart = null;
            zhe1.ontouchend = null;
        }
    }
    /*火狐*/
    zhe1.onmousedown = function (evt) {
        evt.preventDefault();
        var oEvent = evt || event;
        //获取按下鼠标到div left  top的距离
        var distanceX = oEvent.clientX - div1.offsetLeft;
        //添加doc滑动时间
        document.onmousemove = function (evt) {
            var oEvent = evt || event;
            //重新计算div的left top值
            var left = oEvent.clientX - distanceX;
            //left  当小于等于零时，设置为零 防止div拖出document之外
            if (left >= 0) {
                left = 0;
            }
            //当left 超过文档右边界  设置为右边界
            else if (left <= document.documentElement.clientWidth - div1.offsetWidth) {
                left = document.documentElement.clientWidth - div1.offsetWidth;
            }
            //重新给div赋值
            div1.style.left = left + "px";
        }
        //添加鼠标抬起事件
        zhe1.onmouseup = function () {
            //清空事件
            document.onmousemove = null;
            zhe1.onmouseup = null;
        }
    }







    /*/!*分享*!/
    //获取需要拖拽的div
    var div2 = document.getElementById("share");
    var zhe2=document.getElementById('sharebox');
    /!*谷歌*!/
    zhe2.ontouchstart = function (evt) {
        evt.preventDefault();
        var oEvent = evt || event;
        //获取按下鼠标到div left  top的距离
        var distanceX = oEvent.changedTouches[0].clientX - div1.offsetLeft;
        //添加doc滑动时间
        document.ontouchmove = function (evt) {
            var oEvent = evt || event;
            //重新计算div的left top值
            var left = oEvent.changedTouches[0].clientX - distanceX;
            //left  当小于等于零时，设置为零 防止div拖出document之外
            if (left >= 0) {
                left = 0;
            }
            //当left 超过文档右边界  设置为右边界
            else if (left <= document.documentElement.clientWidth - div1.offsetWidth) {
                left = document.documentElement.clientWidth - div1.offsetWidth;
            }
            //重新给div赋值
            div2.style.left = left + "px";
        }
        //添加鼠标抬起事件
        zhe2.ontouchend = function () {
            //清空事件
            document.ontouchstart = null;
            zhe2.ontouchend = null;
        }
    }
    /!*火狐*!/
    zhe2.onmousedown = function (evt) {
        evt.preventDefault();
        var oEvent = evt || event;
        //获取按下鼠标到div left  top的距离
        var distanceX = oEvent.clientX - div2.offsetLeft;
        //添加doc滑动时间
        document.onmousemove = function (evt) {
            var oEvent = evt || event;
            //重新计算div的left top值
            var left = oEvent.clientX - distanceX;
            //left  当小于等于零时，设置为零 防止div拖出document之外
            if (left >= 0) {
                left = 0;
            }
            //当left 超过文档右边界  设置为右边界
            else if (left <= document.documentElement.clientWidth - div2.offsetWidth) {
                left = document.documentElement.clientWidth - div2.offsetWidth;
            }
            //重新给div赋值
            div2.style.left = left + "px";
        }
        //添加鼠标抬起事件
        zhe2.onmouseup = function () {
            //清空事件
            document.onmousemove = null;
            zhe2.onmouseup = null;
        }
    }*/


        /*点击加号出现*/
    var plus=$('.plus');
    var inviteframe=$('.inviteframe');
    var big=$('#bigbox');
    var h=inviteframe.height();
    plus.on('click',function(){
        inviteframe.css({'transform':' translateY(-'+h+'px)','transition':'all 0.6s'});
        big.css({'overflow':'visible'});
        setTimeout(function(){
            $('.bigzhe').css({'display':'inline'})
        },100)
    })
    /*点击取消消失*/
    var cancel=$('.cancel');
    var h1=$('.RankingList').height();
    cancel.on('click',function(){
        inviteframe.css({'transform':'none','transition':'all 0.6s'});
        big.css({'overflow':'hidden'});
        setTimeout(function(){
            $('.bigzhe').css({'display':'none'})
        },300)
    })
    $('.bigzhe').on('click',function(){
        inviteframe.css({'transform':'none','transition':'all 0.6s'});
        big.css({'overflow':'hidden'});
        setTimeout(function(){
            $('.bigzhe').css({'display':'none'})
        },300)
    })





})