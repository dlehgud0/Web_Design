jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    }).mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })
    
    $(".imgslide li:gt(0)").hide();
    setInterval(function(){
        $(".imgslide li:first").fadeOut()
        .next("li").fadeIn().end().appendTo(".imgslide>ul")
    },2000)
})