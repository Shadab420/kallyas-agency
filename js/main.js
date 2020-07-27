$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout:2800,
        autoplaySpeed: 4500,
        // navRewind: false,
        margin: 0,
        responsiveClass:true,
        center: true,
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
            }
        }
    });

    //set footer date
    $('#date').html(new Date().getFullYear());
})