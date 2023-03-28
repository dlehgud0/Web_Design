jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    }).mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    //페이드인 페이드아웃
    // $(".imgslide li:gt(0)").hide();
    // setInterval(function(){
    //     $(".imgslide li:first").fadeOut()
    //     .next("li").fadeIn()
    //     .end().appendTo(".imgslide>ul")
    // },2500)

    //세로 슬라이드
    $(".imgslide li:gt(0)").hide();
    setInterval(function(){
        $(".imgslide li:first").slideUp()
        .next("li").fadeIn()
        .end().appendTo(".imgslide>ul")
    },1600)
})