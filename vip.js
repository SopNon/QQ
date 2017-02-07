$(document).ready(function () {
    //页头下拉列表
    $('#nav>li').hover(function () {
        $(this).children('ul[class^=menu-]').css('display', 'block');
        $(this).children('ul[class^=menu-]').length && $('.shadow').removeClass('hide').addClass('show');
    }, function () {
        $(this).children('ul[class^=menu-]').css('display', 'none');
        $('.shadow').removeClass('show').addClass('hide');
    })

    // =============  轮播  =============
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播
        t = 3000; //轮播时间间隔
    length = $('.slider-panel').length;

    //将除了第一张图片隐藏
    $('.slider-panel:not(:first)').hide();
    //将第一个slider-item设为激活状态
    $('.slider-item:first').addClass('slider-item-selected');
    //隐藏向前、向后翻按钮
    $('.slider-page').show();

    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
    $('.slider-panel, .slider-pre, .slider-next').hover(function () {
        stop();
        //$('.slider-page').show();
    }, function () {
        //$('.slider-page').hide();
        start();
    });

    $('.slider-item').hover(function (e) {
        stop();
        var preIndex = $(".slider-item").filter(".slider-item-selected").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function () {
        start();
    });

    $('.slider-pre').click(function () {pre();});
    $('.slider-next').click(function () {next();});

    //  向前翻页
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }

    //  向后翻页
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }

    // 从preIndex页翻到currentIndex页
    // preIndex 整数，翻页的起始页
    // currentIndex 整数，翻到的那页
    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-item').removeClass('slider-item-selected');
        $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
    }

    //  开始轮播
    function start() {
        if (!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }

    //停止轮播
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }

    //开始轮播
    start();

    //  四大特权
    //$('.active-list-info').hover(function(){
    //    $(this).addClass('hover');
    //},function(){
    //    $(this).removeClass('hover');
    //});
    //  页尾固定导航
    $(window).scroll(function(){
        if($(window).scrollTop()>160){
            $('#nav-footer').addClass('scroll');
        }else{
            $('#nav-footer').removeClass('scroll');
        }
    });
});

window.onload=setTimeout(function(){
    $('.signin').addClass('signin-load');
},1000);

$('#user').click(function(){
	$('.modal').css('display','block');
});

$('#btn').click(function(){
    $.post('login.php',$('#login-form').serialize(),function(txt){
		console.log(txt);
        if(txt==='succ'){
            $('.modal').css('display','none');
            var uname=$('[name="username"]').val();
            $('#user').html(uname);
        }else if(txt==='err'){
            alert('登录失败');
        }
    });
});