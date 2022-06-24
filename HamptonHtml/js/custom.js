$(document).ready( function() {
    $( window ).resize(function() {
        if (window.innerWidth <= 767){ }
    })
    
    $(".mob_menu").on('click', function() {
        $(this).toggleClass('active')
        $(this).parents(".header").toggleClass('active')
        $(this).parents(".header").find(".header_menu").slideToggle()
    })

})