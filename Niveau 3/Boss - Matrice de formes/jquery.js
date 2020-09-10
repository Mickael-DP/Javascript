$("#plein").click(function(){
    $("span").addClass("plein")
})

$("#vide").click(function(){
    $("span").removeClass("plein")
})

$(".rond").click(function(){
    $(this).toggleClass("plein")
})

$(".carre").click(function(){
    $(this).siblings().toggleClass("plein")
    $(this).toggleClass("plein")
})

$(".losange").click(function(){$
    $(this).toggleClass("plein")
    $(this).siblings().toggleClass("plein")
    $(".col").toggleClass("plein")
})