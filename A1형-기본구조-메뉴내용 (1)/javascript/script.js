jQuery(document).ready(function(){
    //전부 내리는 메뉴
    $(".main").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
        $(".bgmenu").stop().slideDown()
    }).mouseout(function(){
        $(this).find(".sub").stop().slideUp()
        $(".bgmenu").stop().slideUp()
    })

    //하나씩 내리는 메뉴
    // $(".main>li").mouseover(function(){
    //     $(this).find(".sub").stop().slideDown()
    //     $(".bgmenu").stop().slideDown()
    // }).mouseout(function(){
    //     $(this).find(".sub").stop().slideUp()
    //     $(".bgmenu").stop().slideUp()
    // })
    
    //이미지 슬라이드
    setInterval(function(){
        $(".imgslide2").delay(2000)
        $(".imgslide2").animate({marginTop:-300},1000,function(){
            $(".imgslide2 li:first").appendTo(".imgslide2>ul")
            $(".imgslide2").css({marginTop:0})
        })
    })
    //공지사항 팝업
    $(".notice li:first").click(function(){
        $(".modal").show()
    })
    $(".pop_bot>button").click(function(){
        $(".modal").hide()
    })
    
    
})