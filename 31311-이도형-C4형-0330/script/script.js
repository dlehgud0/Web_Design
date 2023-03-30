jQuery(document).ready(function(){

    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    }).mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    setInterval(function(){
    //일정간격으로 반복해
        $(".imgslide2").delay(1500)
        //imgslide2에 딜레이를 줘
        $(".imgslide2").animate({marginLeft:-800},600,function(){
        //imgslide2가 움직이게 왼쪽여백을 줘
            $(".imgslide2 li:first").appendTo(".imgslide2>ul")
            //imgslide2 li의 첫번째를 막내로 보내
            $(".imgslide2").css({marginLeft:0})
            //imgslide2의 css를 설정해(왼쪽여백 0으로)
        })
    })
})