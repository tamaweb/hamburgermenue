var $btnIcon = $('#btn i') // 使い回すものは変数で取得する。　変数に$をつけて、jQueryと主張。判別がしやすくなる。

$('#btn').on('click', function(){

    $('body').toggleClass('open')

    // console.log($('body').hasClass('open'))

    // もし、bodyにクラス名openを持っていたら・・・文
    if($('body').hasClass('open')){
        $btnIcon.removeClass('ri-menu-line').addClass('ri-close-line')
    }  // ここまででバツにできるが元に戻らない。elseで３本線に戻す。
    else {
        $btnIcon.removeClass('ri-close-line').addClass('ri-menu-line')
    }
})