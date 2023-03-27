jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    }).mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })
    
    $(".imgslide li:gt(0)").hide();
    setInterval(function(){//일정시간동안
        $(".imgslide li:first").fadeOut()
        //imgslide li의 첫번째 자식을 페이드아웃
        .next("li").fadeIn()
        //둘째 자식을 페이드인
        .end().appendTo(".imgslide>ul")
        //첫번째 자식을 막내로 끌어 내림
    },2000)
})