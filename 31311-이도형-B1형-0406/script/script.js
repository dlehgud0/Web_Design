jQuery(document).ready(function(){
    $(".main").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
        $(".bgmenu").stop().slideDown()
    }).mouseout(function(){
        $(this).find(".sub").stop().slideUp()
        $(".bgmenu").stop().slideUp()
    })
})