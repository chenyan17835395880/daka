$(function () {

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