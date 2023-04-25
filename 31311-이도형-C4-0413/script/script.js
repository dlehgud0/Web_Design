jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    }).mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    setInterval(function(){
        $(".imgslide2").delay(2000)
        $(".imgslide2").animate({marginTop:-350},1000,function(){
            $(".imgslide2 li:first").appendTo(".imgslide2>ul")
            $(".imgslide2").css({marginTop:0})
        })
    })
})